import React from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';

const PhoneControl = (props) => {
  return (
    <>
      <div
        {...props}
        style={{
          border: '2px solid #ccc',
          padding: 5,
          width: 45,
        }}
      >
        {props.children}
      </div>
      <p style={{ color: '#ccc', fontSize: 10 }}>{props.label}</p>
    </>
  );
};

export default PhoneControl;
