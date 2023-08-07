import React from 'react';

// import config from 'next/dist/server/config';

import config from '../config/index.json';

const news = () => {
  const { News } = config;
  const [firstItem] = News.items;

  return (
    <section
      className={`mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 bg-background py-8`}
      id="product"
    >
      <div role="document" className={`container max-w-5xl mx-auto m-8`}>
        <h3 className={`text-3xl text-black leading-none mb-3`}>
          {firstItem?.description}
        </h3>
        <div className={`flex flex-wrap`}>
          {/* Image */}
          <div className={`w-full sm:w-full p-1`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
          <div className={`w-full sm:w-full p-6 ml-24`}>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href={firstItem?.href}
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                >
                  Read More{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default news;
