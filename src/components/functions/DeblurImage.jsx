import React, { useRef, useState } from 'react';


const DeblurImage = () => {
  const fileInputRef = useRef(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleProceed = () => {
    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      const imageFile = fileInputRef.current.files[0];

      const formData = new FormData();
      formData.append('image', imageFile);

      //Make a POST request to the backend server
      fetch('http://localhost:8848/process-image', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("HTTP error! Status: ${response.status");
          }
          return response.blob();
        })

        .then(blob => {
          //Process the response- update UI with the processed image
          setProcessedImage(URL, createObjectURL(blob));
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
    }
    else {
      console.log('Please select an image before procceding.');
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

        <div style={{ margin: '10px', padding: '10px' }}>
          (selectedImageInfo && <p>{selectedImageInfo}</p>)
        </div>


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