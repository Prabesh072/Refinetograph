import React from 'react';

const Footer = () => {
  return (
    
    <footer style={footerStyle}>
      <p style={{margin:"0"}}>&copy; 2024 Refinetograph. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: "center",
  // alignItems: "center",
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
