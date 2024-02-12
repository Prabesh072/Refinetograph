import React, { useRef, useState } from 'react';

const DeblurImage = () => {
  const fileInputRef = useRef(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageInputChange = (event) => {
    if (event.target.files.length > 0) {
      const imageFile = event.target.files[0];
      const imageName = imageFile.name;
      setSelectedImageName(imageName);
      const previewURL = URL.createObjectURL(imageFile);
      setSelectedImagePreview(previewURL);
      setErrorMessage('');
    }
  };

  const handleProceed = () => {
    if (!selectedImagePreview) {
      setErrorMessage('Select a file first.');
      return;
    }

    setLoading(true);

    const imageFile = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);

    fetch('http://localhost:8848/deblur-image', {
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
        setProcessedImage(URL.createObjectURL(blob));
      })
      .catch(error => {
        console.error('Error:', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'processed_image.jpg';
      link.click();
    }
  };

  const handleChooseAnotherFile = () => {
    setProcessedImage(null);
    setSelectedImageName('');
    setSelectedImagePreview(null);
    setErrorMessage('');
  };

  return (
    <div className="deblur-image-container"
      style={{
        textAlign: 'center',
        padding: '20px',
        height: '120vh',
        backgroundColor: 'var(--color-1)'
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
        {!processedImage && (
          <button
            type="button"
            className="btn btn-primary me-2"
            style={{ margin: '10px', padding: '10px' }}
            onClick={handleSelectImage}
          >
            Select Image
          </button>
        )}

        {selectedImagePreview && (
          <div style={{ margin: '10px', padding: '10px' }}>
            <h5>Selected Image</h5>
            <img src={selectedImagePreview} alt="Selected Image" style={{ maxWidth: '100%' }} />
            {selectedImageName && <p>{selectedImageName}</p>}
          </div>
        )}

        {errorMessage && (
          <div style={{ margin: '10px', padding: '10px', color: 'red' }}>
            <p>{errorMessage}</p>
          </div>
        )}

        {!processedImage && (
          <button
            type="button"
            className="btn btn-primary me-2"
            style={{ margin: '10px', padding: '10px' }}
            onClick={handleProceed}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed'}
          </button>
        )}

        {processedImage && (
          <div style={{ marginTop: '20px' }}>
            <h3>Processed Image</h3>
            <img src={processedImage} alt="Processed Image" style={{ maxWidth: '100%' }} />
            <div style={{ marginTop: '10px' }}>
              <button
                type="button"
                className="btn btn-success me-2"
                style={{ padding: '10px' }}
                onClick={handleDownload}
              >
                Download
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ padding: '10px' }}
                onClick={handleChooseAnotherFile}
              >
                Choose Another File
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeblurImage;
