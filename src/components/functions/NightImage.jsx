import React, { useRef, useState } from 'react';

const NightImage = () => {
  const fileInputRef = useRef(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState({
    name: '',
    preview: null,
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageInputChange = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      const imageName = imageFile.name;
      const previewURL = URL.createObjectURL(imageFile);

      // Resize the preview image to default size (720 by 480)
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 720;
        canvas.height = 480;
        ctx.drawImage(img, 0, 0, 720, 480);
        const resizedPreviewURL = canvas.toDataURL('image/jpeg');

        setSelectedImage({
          name: imageName,
          preview: resizedPreviewURL,
        });
      };
      img.src = previewURL;

      setErrorMessage('');
    }
  };

  const handleProceed = () => {
    if (!selectedImage.preview) {
      setErrorMessage('Select a file first.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('image', fileInputRef.current.files[0]);

    fetch('http://localhost:8848/night-image', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        setProcessedImage(URL.createObjectURL(blob));
      })
      .catch((error) => {
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
    setSelectedImage({
      name: '',
      preview: null,
    });
    setErrorMessage('');
  };

  return (
    <div className="night-image-container" style={{ textAlign: 'center', padding: '20px', height: '120vh', backgroundColor: 'var(--color-1)' }}>
      <h2>Enhance your low-light image here.</h2>

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageInputChange}
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {!processedImage && (
          <>
            <button
              type="button"
              className="btn btn-primary me-2"
              style={{ margin: '10px', padding: '10px' }}
              onClick={handleSelectImage}
            >
              Select Image
            </button>

            {selectedImage.preview && (
              <div style={{ margin: '10px', padding: '10px' }}>
                <h5>Selected Image</h5>
                <img src={selectedImage.preview} alt="Selected Image" style={{ maxWidth: '100%' }} />
                {selectedImage.name && <p>{selectedImage.name}</p>}
              </div>
            )}

            {errorMessage && (
              <div style={{ margin: '10px', padding: '10px', color: 'red' }}>
                <p>{errorMessage}</p>
              </div>
            )}

            <button
              type="button"
              className="btn btn-primary me-2"
              style={{ margin: '10px', padding: '10px' }}
              onClick={handleProceed}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Proceed'}
            </button>
          </>
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

export default NightImage;
