/* eslint-disable @next/next/no-html-link-for-pages */

import React from 'react';

import { Popover } from '@headlessui/react';

import HeaderLogo from './HeaderLogo';

const Menu = () => {
  return (
    <>
      <>
        <Popover>
          <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <HeaderLogo />
              <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <a href="/">
                  <span
                    className={`font-medium text-tertiary hover:text-secondary `}
                  >
                    Home
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </Popover>
      </>
    </>
  );
};

export default Menu;
