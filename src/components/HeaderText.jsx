import React from 'react';

const HeaderText = () => {
  const text3DStyle = {
    textShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)',

    background: 'linear-gradient(145deg, #ffff)',
    WebkitBackgroundClip: 'text',
  };

  return (
    <h1 className="font-poppins font-bold text-white text-5xl mx-12 mb-10 lg:text-7xl lg:text-left lg:w-7/12 lg:mx-24" style={text3DStyle}>
      Rasakan Kekayaan di Papua
    </h1>
  );
};

export default HeaderText;
