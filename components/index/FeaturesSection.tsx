import React from 'react';

const FeaturesSection = () => (
  <section className="text-gray-400 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">INNOVATIVE SOLUTIONS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Our Key Features</h1>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-white text-lg title-font font-medium">Custom Development</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">Tailored software solutions to meet your unique business needs, enhancing efficiency and productivity.</p>
              <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-white text-lg title-font font-medium">API Integration</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">Seamlessly connect your favorite apps and tools with custom API integrations, enhancing functionality and data flow.</p>
              <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-white text-lg title-font font-medium">Workflow Automation</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">Automate repetitive tasks and streamline operations to save time and reduce errors, boosting overall efficiency.</p>
              <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
