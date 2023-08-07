/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

import { Popover } from '@headlessui/react';

import HeaderLogo from './HeaderLogo';

const Menu = () => {
  return (
    <>
      <>
        <Popover>
          {/* <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <CompanyLogo />
    </div> */}
          <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <HeaderLogo />
          </div>
        </Popover>
        {/* <>
      <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <HeaderLogo />
      </div>
    </>
    <>
      <div role="alert" className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <CompanyLogo />
      </div>
    </> */}
      </>
      <a href="/">
        <span
          className={`relative pt-6 px-4 sm:px-6 lg:px-8 font-medium text-tertiary hover:text-secondary`}
        >
          Home
        </span>
      </a>
    </>
  );
};

export default Menu;
