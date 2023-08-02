import React from 'react';

import { Popover } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import config from '../config/index.json';

const LangImage = () => {
  const { GreekLang } = config;
  const { title, img } = GreekLang;
  return (
    <div
      role="presentation"
      className="flex flex-wrap sm:gap-10 gap-8 items-center justify-right mt-4 h-12"
    >
      <Popover>
        <div role="alert" className="relative pt-4 pb-4 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-right sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div
              role="link"
              className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div
                role="presentation"
                className="flex items-center justify-right w-full md:w-auto mb-14"
              >
                <a href="https://op3c-react.netlify.app/">
                  {/* <a href="https://op3c.planetek.net/"> */}
                  <span className="sr-only">{title}</span>
                  <img
                    alt="logo"
                    className="h-16 w-auto sm:h-16 mt-4"
                    src={img}
                  />
                </a>
                <div
                  role="button"
                  className="-mr-2 flex items-center md:hidden"
                >
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-right text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Popover.Panel
          focus
          className="absolute z-10 top-0  p-2 transition transform origin-top-right md:hidden"
        >
          <div
            className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
          >
            <div
              role="button"
              className="px-5 pt-4 flex items-center justify-between"
            >
              <div>
                <img className="h-8 w-auto" src={img} alt="" />
              </div>
              <div role="button" className="-mr-2">
                <Popover.Button
                  className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                >
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};

export default LangImage;
