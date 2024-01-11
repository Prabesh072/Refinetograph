import React, { useRef } from 'react';

const NightImage= () => {
  const fileInputRef = useRef(null);

  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleProceed = () => {
    console.log('Proceed clicked');
    // Add logic here to proceed with the selected image
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div>Enhance your low-light image here.</div>

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
      />

     <div style={{ textAlign: 'center', marginTop: '20px'}}> 
      <button
        type= "button"
        className="btn btn-primary me-2"
        style={{ margin: '10px', padding: '10px' }}
        onClick={handleSelectImage}
        >
        Select Image
      </button>

      <button
        type= "button"
        className="btn btn-primary me-2"
        style={{ margin: '10px', padding: '10px' }}
        onClick={handleProceed}
        >
        Proceed
      </button>
      </div> 
      </div>

  );
};

export default NightImage;