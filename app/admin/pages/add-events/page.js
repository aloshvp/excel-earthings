"use client";
import { useState } from "react";
import { format } from 'date-fns'; // Used for formatting the date before submission
import { alert } from "@functions/alertmessage";
import DatePickerComponent from "@functions/datepicker";
import { ValidateFileUpload } from "app/admin/components/ValidateFileUpload";
import Link from "next/link";


const initialFormState = {
    event: '',
    date: null, 
    time: '',
    place: '',
    description: '',
    file_upload: null, 
};

const AddEvents = () => {
    const [formData, setFormData] = useState(initialFormState);
    const [fileName, setFileName] = useState('Choose a file...');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleDateChange = (date) => {
        setFormData(prevData => ({
            ...prevData,
            date: date, 
        }));
    };



    const handleFileChange = (event) => {

        const result = ValidateFileUpload(event, ['jpeg', 'png', 'jpg', 'svg']);
        if (!result.isValid) {
            alert(result.message);
        }

        const file = event.target.files[0];

        if (file) {
            setFileName(file.name);
            setFormData(prevData => ({
                ...prevData,
                file_upload: file, 
            }));
        } else {
            setFileName('Choose a file...');
            setFormData(prevData => ({
                ...prevData,
                file_upload: null,
            }));
        }
    };


    const validateForm = () => {
        const requiredFields = ['event', 'time', 'place', 'description'];
        let emptyFields = [];

        requiredFields.forEach(key => {
            if (!formData[key] || formData[key].trim() === '') {
                emptyFields.push(key);
            }
        });

        if (!formData.date) {
            emptyFields.push('Date');
        }

        if (!formData.file_upload) {
            emptyFields.push('Upload Image');
        }

        if (emptyFields.length > 0) {
            const fieldNames = emptyFields.map(key => {
                switch(key) {
                    case 'event': return 'Event Heading';
                    case 'time': return 'Timing';
                    case 'place': return 'Place';
                    case 'description': return 'Description';
                    case 'Upload Image': return 'Upload Image';
                    default: return key;
                }
            });
            
            alert(`Please fill in all the required fields:\n- ${fieldNames.join('\n- ')}`);
            return false;
        }
        return true;
    };


 
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        if (!validateForm()) {
            return; 
        }

        setIsSubmitting(true);
        
        const postFormData = new FormData();
        

        Object.keys(formData).forEach(key => {
            if (key === 'date' && formData.date) {
                 postFormData.append(key, format(formData.date, 'yyyy-MM-dd'));
            } else if (key !== 'file_upload') {
                postFormData.append(key, formData[key]);
            }
        });
        

        if (formData.file_upload) {
            postFormData.append('imageFile', formData.file_upload); 
        }
        
        try {
            postFormData.append('switchOption', 'ManageEvents');
            postFormData.append('option', 'insert');
            postFormData.append('active', isActive ? 1 : 0);
            const response = await fetch('/api/events', {
                method: 'POST',
                body: postFormData, 
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            alert('success','Event successfully added!');
            
            // Reset Form on success
            setFormData(initialFormState);
            setFileName('Choose a file...');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to add event. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="adminCmnWrap">
            <div className="admnHead"><h2>Add Events</h2> <Link href={"/admin/pages/view-events"}>View Data</Link></div>  
            <form className="responsive-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="field-group">
                        <label htmlFor="event">Event Heading <em className="required">*</em></label>
                        <input 
                            type="text" 
                            id="event" 
                            name="event" 
                            value={formData.event} 
                            onChange={handleInputChange}
                            placeholder="Event Name" 
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="date">Date <em className="required">*</em></label>
                        <DatePickerComponent selectedDate={formData.date} onChange={handleDateChange} placeHolder={"DD-MM-YYYY"}/>
                    </div>
                    <div className="field-group">
                        <label htmlFor="time">Timing <em className="required">*</em></label>
                        <input 
                            type="text" 
                            id="time" 
                            name="time" 
                            value={formData.time} 
                            onChange={handleInputChange}
                            placeholder="9am - 6pm" 
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="place">Place <em className="required">*</em></label>
                        <input 
                            type="text" 
                            id="place" 
                            name="place" 
                            value={formData.place} 
                            onChange={handleInputChange}
                            placeholder="Place" 
                        />
                    </div>
                    <div className="field-group textarea-full">
                        <label htmlFor="description">Description <em className="required">*</em></label>
                        <textarea 
                            id="description" 
                            name="description" 
                            rows="4" 
                            value={formData.description} 
                            onChange={handleInputChange}
                            placeholder="Type your message here..." 
                        ></textarea>
                    </div>
                    <div className="field-group">
                        <label htmlFor="file_upload">Upload Image <em className="required">*</em></label>
                        <div className="custom-file-upload">
                            <div id="file_name_display" className="file-display">
                                <span>{fileName}</span>
                                <span className="browse-button">Browse</span>
                            </div>
                            <input 
                                type="file" 
                                id="file_upload" 
                                name="file_upload" 
                                accept="image/*" 
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="containerActive">Active
                            <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                 <input type='text' className='hiddeninput' name="hiddenfield" />
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save'}
                </button>
            </form>
        </div>
    );
}

export default AddEvents;