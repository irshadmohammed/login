import React from 'react';
import './SocialButtons.css';
import { FacebookFilled, AppleFilled } from '@ant-design/icons';

function SocialButtons(props) {
  return (
    <div className='social'>
      <p>- OR -</p>
      <div className='social__iconAlign'>
        <button className='social__button'>
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" />{" "}
          Sign in with Google
        </button>
        <div className='social__iconWrapper'>
          <FacebookFilled style={{ color: "blue", fontSize: "40px" }} />
        </div>
        <div className='social__iconWrapper'>
          <AppleFilled style={{ color: "black", fontSize: "40px" }} />
        </div>
      </div>
    </div>
  )
}

export default SocialButtons