import React from 'react'
import Footer from '../Footer'

const FooterNew = () => {
  return (
    <div className="flex items-center justify-center mt-16 bg-none ">
        <div className="absolute lg:pt-48">
        <Footer/>
        </div>
        <svg className="hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9DB367" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,197.3C320,171,400,85,480,69.3C560,53,640,107,720,149.3C800,192,880,224,960,208C1040,192,1120,128,1200,122.7C1280,117,1360,171,1400,197.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
  )
}

export default FooterNew