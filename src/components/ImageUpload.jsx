import axios from "axios";
import React, { useState } from "react";

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [res, setRes] = useState(null); // Declare res as a state variable

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                "https://d567-34-168-163-111.ngrok-free.app/predict",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setRes(response.data); // Update the state with the response data
            console.log(response.data);
        } catch (error) {
            console.error("Error uploading the file:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload and Predict</button>
            {/* Display prediction results here if available */}
            {res && (
                <div>
                    <p>Predicted Class: {res.class}</p>
                    <p>Confidence: {(res.confidence * 100).toFixed(2)}%</p>
                </div>)}
        </form>
    );
};

export default ImageUpload;
