import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2022 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
