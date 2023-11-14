import React from 'react'

const ButtonHero = () => {
  return (
    <a href="#about" className="mx-24">
        <button
        type="button"
        className=" text-md text-primary p-4 items-start rounded-lg font-poppins font-semibold relative px-8 py-2 bg-white isolation-auto  border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 z-10   before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 before:-z-10 hover:text-white"
        >
        About Papua
        </button>
    </a>
  )
}

export default ButtonHero