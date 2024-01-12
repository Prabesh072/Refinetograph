import React from 'react';

const Footer = () => {
  return (

    <footer style={footerStyle} >
      <div style={{
        display: 'flex',
        gap: "10px"
      }}>
        <a href="/" >Home</a>
        <a href="/team-members" >Team Members</a>
      </div>

      <div style={{ margin: "0" }}>&copy; 2024 Refinetograph. All rights reserved.
      </div>

    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
