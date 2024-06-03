import React from 'react';

const HeroSection = () => (
  <section className="text-gray-400 body-font">
    
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Transform Time-Consuming Tasks into <br /> Seamless Workflows
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          Discover how ZaxxDev can revolutionize your internal processes by analyzing critical workflows and optimizing efficiency.
          We help you leverage the power of built-in APIs from your favorite apps to extend their functionality and tailor solutions
          that fit your specific needs.
        </p>
        <div className="flex justify-center">
          <button className="btn btn-primary text-lg">
            Get Started
          </button>
          <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
