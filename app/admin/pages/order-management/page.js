
"use client";
import { useState } from "react"
const OrderManagementPage = () => {
    const [fileName, setFileName] = useState('Choose a file...');
    
    const handleFileChange = (event) => {
        const fileInput = event.target;
        
        if (fileInput.files.length > 0) {
           
            setFileName(fileInput.files[0].name);
        } else {
            setFileName('Choose a file...');
        }
    };


    const fileNameStyle = {
        color: fileName === 'Choose a file...' ? '#888' : '#333'
    };

  return (
    <div className="adminCmnWrap">
        <h2 className="admnHead">Common Form</h2>
        <form className="responsive-form">
            <div className="form-grid">

                <div className="field-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" />
                </div>

                <div className="field-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" />
                </div>

                <div className="field-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890"/>
                </div>

            <div className="field-group">
                <label htmlFor="file_upload">Upload CV/Document</label>
                <div className="custom-file-upload">
                    <div id="file_name_display" className="file-display">
                        <span style={fileNameStyle}>{fileName}</span>
                        <span className="browse-button">Browse</span>
                    </div>
                    
                    <input type="file" id="file_upload" name="file_upload" onChange={handleFileChange}/>
                </div>
            </div>

                <div className="field-group textarea-full">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Type your message here..." ></textarea>
                </div>
                
                <div className="field-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder="New York"/>
                </div>
                
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
  )
}

export default OrderManagementPage