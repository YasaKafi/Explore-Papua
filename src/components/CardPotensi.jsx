"use client";

import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";


export default function CardPotensi({ title, description }) {

  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
    setIsRotated(!isRotated);
  };
  

  return (
    <div className=" flex items-center justify-center ">

    <Popover className="bg-[#414141] p-5 border border-[#bdbaba55] rounded-lg w-[350px] group is-active">
      <div className="flex-column">
        <h3 className="group-[.is-active]:font-bold text-base text-[#FAFAFA] flex justify-between">
          {title}
          <div className="h-5 w-5 bg-slate-500 rounded-full ">
          <ChevronDownIcon
            className={`h-6 w-6 inline-flex text-gray-400 transform transition-transform ${
            isRotated ? "rotate-180" : "" 
            }`}
            aria-hidden="true"
            onClick={toggleContent}
          />
          </div>
        </h3>
        <Transition
          as={Fragment}
          show={isContentVisible}
          enter="transition ease-out duration-200 delay-200"
          enterFrom="opacity-0 translate-y-1 delay-200"
          enterTo="opacity-100 translate-y-0 delay-200"
          leave="transition ease-in duration-150 delay-200"
          leaveFrom="opacity-100 translate-y-0 delay-200"
          leaveTo="opacity-0 translate-y-1 delay-200"
        >
          {(isContentVisible) => (
            <div className={`max-h-0 overflow-hidden ${isContentVisible ? "max-h-[200px]" : "max-h-0"}`}>
              <p className="text-sm text-white">
                {description}
              </p>
            </div>
          )}
        </Transition>
      </div>
    </Popover>
  </div>

  );

};


