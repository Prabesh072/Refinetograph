import React from 'react'

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#a2ab9f" }}>
      <div
        style={{
          padding: '10px 15px',
          fontSize: '22px',
          height: '150px',
          backgroundColor: "#2a2a2a",
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          color: "#fff"
        }}>
        <h1> About Us</h1>
      </div>

      <div className='section'>
        <h3>Image Enhancement:</h3>
        <p >We have used SRGAN architecture for building our model, which is successfully able to upscale/enhance image resolution by 4times. </p>

        <h3>Deblur Image:</h3>
        <p>To generate our model for deblurring image, we used Convolutional Autoencoders, which is capable to achieve promising result.</p>

        <h3>Night Image:</h3>
        <p>Still in progress...</p>
      </div>
    </div>

  )
}
export default About