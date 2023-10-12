import React from 'react';
import SearchBar from './SearchBar';
import HeaderText from './HeaderText';
import imageAssets from '@/utils/helpers';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${imageAssets.imgWRajaAmpat3})`,
  };

  return (
    <div className="relative mb-15 h-5/6">
      <div
        className="absolute inset-0 bg-cover backdrop-blur-md backdrop-opacity-30"
        style={headerStyle}
      />
      <div className="relative py-64">
        <HeaderText />
        <SearchBar />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default Header;
