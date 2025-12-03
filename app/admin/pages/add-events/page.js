"use client";
import { useState } from "react";
import { format } from 'date-fns'; // Used for formatting the date before submission
import { alert } from "@functions/alertmessage";
import DatePickerComponent from "@functions/datepicker";
import { ValidateFileUpload } from "app/admin/components/ValidateFileUpload";


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

    const fileNameStyle = {
        color: fileName === 'Choose a file...' ? '#888' : '#333'
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
            const response = await fetch('/api/events', {
                method: 'POST',
                body: postFormData, 
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            alert('Event successfully added!');
            
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
            <h2 className="admnHead">Add Events</h2>
            <form className="responsive-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="field-group">
                        <label htmlFor="event">Event Heading <span className="required">*</span></label>
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
                        <label htmlFor="date">Date <span className="required">*</span></label>
                        <DatePickerComponent selectedDate={formData.date} onChange={handleDateChange} placeHolder={"DD-MM-YYYY"}/>
                    </div>
                    <div className="field-group">
                        <label htmlFor="time">Timing <span className="required">*</span></label>
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
                        <label htmlFor="place">Place <span className="required">*</span></label>
                        <input 
                            type="text" 
                            id="place" 
                            name="place" 
                            value={formData.place} 
                            onChange={handleInputChange}
                            placeholder="Place" 
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="file_upload">Upload Image <span className="required">*</span></label>
                        <div className="custom-file-upload">
                            <div id="file_name_display" className="file-display">
                                <span style={fileNameStyle}>{fileName}</span>
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
                    <div className="field-group textarea-full">
                        <label htmlFor="description">Description <span className="required">*</span></label>
                        <textarea 
                            id="description" 
                            name="description" 
                            rows="4" 
                            value={formData.description} 
                            onChange={handleInputChange}
                            placeholder="Type your message here..." 
                        ></textarea>
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