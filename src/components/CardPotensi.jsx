import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";


export default function CardPotensi() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className=" flex items-center justify-center mt-20">

    <Popover className="bg-white p-5 border border-[#c9c6c655] rounded-lg w-[350px] group is-active">
      <div className="flex-column">
        <h3 className="group-[.is-active]:font-bold text-base text-black flex justify-between">
          Potensi Title
          <div className="h-5 w-5 bg-slate-500 rounded-full ">
          <ChevronDownIcon
            className="h-6 w-6 inline-flex text-gray-400"
            aria-hidden="true"
            onClick={toggleContent}
          />
          </div>
        </h3>
        <Transition
          as={Fragment}
          show={isContentVisible}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 "
          enterTo="opacity-100 "
          leave="transition ease-in duration-150 transform"
          leaveFrom="opacity-100 "
          leaveTo="opacity-0"
        >
          {(isContentVisible) => (
            <div className={`max-h-0 overflow-hidden ${isContentVisible ? "max-h-[200px]" : "max-h-0"}`}>
              <p className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores cupiditate tempora, corporis quasi molestias provident
                voluptate debitis quod cumque aspernatur doloremque error quas
                sequi! Pariatur at veniam cum rerum eos saepe nobis reprehenderit
                quos eius nisi sint architecto quis, repellendus, facilis culpa
                aperiam consequatur maiores nihil numquam nesciunt eaque
                temporibus.
              </p>
            </div>
          )}
        </Transition>
      </div>
    </Popover>
  </div>

  );

};


