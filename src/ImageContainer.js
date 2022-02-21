import React from 'react';
import './ImageContainer.css';
import Logo from './images/logo.png';

function ImageContainer(props) {
  const { } = props;
  return (
    <>
      <img className='imagecontainer' src={Logo} alt="" />
    </>
  )
}

export default ImageContainer