import React, { useRef, useState } from 'react';

const Upscale = () => {
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

      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 720;
          canvas.height = 480;
          ctx.drawImage(img, 0, 0, 720, 480);
          const resizedPreviewURL = canvas.toDataURL('image/jpeg');

          setSelectedImagePreview(resizedPreviewURL);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(imageFile);

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

    fetch('http://localhost:8848/upscale-image', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to process the image. Please try again.');
        }
        return response.blob();
      })
      .then(blob => {
        setProcessedImage(URL.createObjectURL(blob));
      })
      .catch(error => {
        console.error('Error:', error.message);
        setErrorMessage('An error occurred during processing.');
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
    <div style={{
      textAlign: 'center',
      padding: '20px',
      // height: '120vh',
      backgroundColor: 'var(--color-1)',
    }}>
      <h2>Upscale your low-resolution image by 4X</h2>

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
            <img 
            src={selectedImagePreview} 
            alt="Selected Image" 
            style={{ maxWidth: '100%', width: '720px', height: '480px', objectFit: 'cover' }}
            />
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
            style={{ margin: '10px',
            padding: '10px' }}
            onClick={handleProceed}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed'}
          </button>
        )}

        {processedImage && (
          <div 
          style={{ 
            marginTop: '20px',
            paddingBottom: '120px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' }}>
            <h5>Processed Image</h5>
            <div style={{ 
              width: '100%', 
              maxWidth: '600px' }}>
              <img src={processedImage} alt="Processed Image" 
              style={{ 
                width: '100%', 
                height: 'auto' }} />
            </div>
            <div style={{ 
              marginTop: '10px',
              display: 'flex', 
              gap: '10px' }}>
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

export default Upscale;
