import { CompassFilled } from '@ant-design/icons/lib/icons';
import React from 'react';
import './Toggler.css';
import { Switch } from 'antd';

function Toggler() {
  return (
    <>
      <div className='toggler'>
        <h3>Travelguru
          <CompassFilled className='toggler__compass' style={{ color: "#ff6052", }} />
        </h3>
      </div>
      <hr className='mb-70' />
    </>
  )
}

export default Toggler