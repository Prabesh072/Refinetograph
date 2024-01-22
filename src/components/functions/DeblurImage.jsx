import React, { useRef, useState } from 'react';

const DeblurImage = () => {
  const fileInputRef = useRef(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);

  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageInputChange = (event) => {
    if (event.target.files.length > 0) {
      const imageFile = event.target.files[0];

      // Extract the name from the full path
      const imageName = imageFile.name;
      setSelectedImageName(imageName);

      // Create a preview URL for the selected image
      const previewURL = URL.createObjectURL(imageFile);
      setSelectedImagePreview(previewURL);
    }
  };

  const handleProceed = () => {
    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      const imageFile = fileInputRef.current.files[0];

      const formData = new FormData();
      formData.append('image', imageFile);

      // Make a POST request to the backend server
      fetch('http://localhost:8848/process-image', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        // Process the response - Update the UI with the processed image
        setProcessedImage(URL.createObjectURL(blob));
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
    } else {
      console.log('Please select an image before proceeding.');
    }
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '20px',
      height: "88vh",
      backgroundColor: "var(--color-1)",
    }}>
      <h2>Denoise your noisy image with our exciting tool</h2>

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onInput={handleImageInputChange}
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          type="button"
          className="btn btn-primary me-2"
          style={{ margin: '10px', padding: '10px' }}
          onClick={handleSelectImage}
        >
          Select Image
        </button>

        {selectedImagePreview && (
          <div style={{ margin: '10px', padding: '10px' }}>
            <h5>Selected Image</h5>
            <img src={selectedImagePreview} alt="Selected Image" style={{ maxWidth: '100%' }} />
            {selectedImageName && <p>{selectedImageName}</p>}
          </div>
        )}

        <button
          type="button"
          className="btn btn-primary me-2"
          style={{ margin: '10px', padding: '10px' }}
          onClick={handleProceed}
        >
          Proceed
        </button>
      </div>

      {processedImage && (
        <div style={{ marginTop: '20px' }}>
          <h3>Processed Image</h3>
          <img src={processedImage} alt="Processed Image" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>

  );
};

export default DeblurImage;
