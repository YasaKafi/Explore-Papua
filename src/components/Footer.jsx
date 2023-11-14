import React from 'react';

const Footer = () => {
  return (
      <footer className="flex flex-col items-center justify-center bg-none">
        <div className="flex flex-row gap-3 py-5 underline text-sm">
          <a href="#">Privacy Policy</a>            
          <a href="#">Terms of Service</a>            
          <a href="#">Cookies Settings</a>            
        </div>
        <hr className="border-white border-1 w-screen lg:w-[1500px]  " />
        <h2 className="text-lg pt-3 md:font-semibold md:text-xl ">2023 Resume. All right reserved.</h2>
      </footer>
  );
}

export default Footer;
