import React from 'react';

const Footer = () => {
  return (
    
    <footer style={footerStyle}>
      <div style={{margin:"0"}}>&copy; 2024 Refinetograph. All rights reserved.</div>
      <div>
        <a href="/teammembers">Team Members</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: "left",
  // alignItems: "center",
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
