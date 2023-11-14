"use client";

import { Fragment, useState } from "react";
import imageAssets from "../utils/helpers";
import { Popover, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faCompass,
  faImages,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Routes from "@/routes/routes";

const dropdown = [
  { name: "Adat istiadat", href: Routes.ADAT_ISTIADAT },
  { name: "Kisah Papua", href: Routes.KISAH_PAPUA },
  { name: "Perekonomian Papua", href: Routes.PEREKONOMIAN_PAPUA },
  { name: "Wisata Papua", href: Routes.WISATA_PAPUA },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  

  

  return (
    <header className="bg-secondary fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href={Routes.GENERAL_PAGE} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={imageAssets.imageLogo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 flex items-end justify-end h-screen bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          >
            <div className="bg-white w-64 h-full shadow-lg z-10 p-4">
              <ul className="py-4">
                <li className="mb-4">
                  <a
                    href={Routes.HOME_PAGE}
                    className="block px-4 py-2 text-gray-800"
                  >
                    <FontAwesomeIcon icon={faHome} className="mr-5" />
                    Home
                  </a>
                </li>
                <li className="mb-4 ml-1">
                
                  <a
                    href={Routes.KILAS_PAPUA}
                    className="block px-4 py-2 text-gray-800"
                  >
                    <FontAwesomeIcon icon={faInfo} className="mr-7" />
                    Kilas Papua
                  </a>
                 
                </li>
                <li className="mb-4">
                  <Popover className="relative">
                    <Popover.Button className="block px-4 py-2 text-gray-800 ">
                      <FontAwesomeIcon icon={faCompass} className="mr-3" />
                      Ada apa di Papua
                      <ChevronDownIcon
                        className="h-6 w-6 inline-flex text-gray-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-500 delay-500"
                      enterFrom="opacity-0 translate-y-1 delay-500"
                      enterTo="opacity-100 translate-y-0 delay-500"
                      leave="transition ease-in duration-150 delay-500"
                      leaveFrom="opacity-100 translate-y-0 delay-500"
                      leaveTo="opacity-0 translate-y-1 delay-500"
                    >
                      <Popover.Panel className="absolute left-3 top-full z-10 mt-3 w-48 overflow-hidden rounded-3xl bg-secondary shadow-lg ring-1 ring-gray-900/5">
                        {dropdown.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-white hover:text-green-600"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </li>
                <li className="mb-4">
                  <a
                    href={Routes.GALERI_PAPUA}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600"
                  >
                    <FontAwesomeIcon icon={faImages} className="mr-4" />
                    Galeri Papua
                  </a>
                </li>
                <li>
                  <a
                    href={Routes.DEVELOPER_PAGE}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-green-600"
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-5" />
                    Pengembang
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

<Popover.Group className="hidden lg:flex lg:gap-x-5 mx-10">
  <a
    href={Routes.HOME_PAGE}
    className="text-sm font-semibold leading-6 text-white hover:text-green-600  px-4 py-2 rounded"
  >
    Utama
  </a>
  <a
    href={Routes.KILAS_PAPUA}
    className="text-sm font-semibold leading-6 text-white hover:text-green-600  px-4 py-2 rounded"
  >
    Kilas Papua
  </a>
  <div
   
    className="relative group"
  >
    <a
      href="#"
      onClick={toggleDropdown}
      className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-green-600  px-4 py-2 rounded"
    >
      Ada apa di Papua
      <ChevronDownIcon
        className="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
    </a>
    {dropdownOpen && (
  <div
    className="absolute -left-2 top-full z-10 mt-3 overflow-hidden rounded-3xl bg-secondary shadow-lg ring-1 ring-gray-900/5 p-4 delay-150 hover:delay-500 transition-all duration-300"
  >
    {dropdown.map((item) => (
      <div
        key={item.name}
        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 "
      >
        <div className="flex-auto">
          <a
            href={item.href}
            className="block font-semibold text-white hover:text-green-600"
          >
            {item.name}
            <span className="absolute inset-0" />
          </a>
        </div>
      </div>
    ))}
  </div>
)}

  </div>
  <a
    href={Routes.GALERI_PAPUA}
    className="text-sm font-semibold leading-6 text-white hover:text-green-600  px-4 py-2 rounded"
  >
    Galeri Papua
  </a>
  <a
    href={Routes.DEVELOPER_PAGE}
    className="text-sm font-semibold leading-6 text-white hover:text-green-600 px-4 py-2 rounded"
  >
    Pengembang
  </a>
</Popover.Group>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          ></a>
        </div>
      </nav>
    </header>
  );
}
