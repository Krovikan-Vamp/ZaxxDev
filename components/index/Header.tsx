import React from 'react';

const HeaderSection = () => (
  <header className="text-gray-400 body-font bg-opacity-50 relative">
    <div className="z-0">
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://files.oaiusercontent.com/file-QizSOWNX3twfzpWvPrC8d6BC?se=2024-06-03T05%3A12%3A46Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D636a1150-1cf9-48ce-a157-a3e9aca045e7.webp&sig=hphUTtFqBzft5dbKcBuJj9EfEm7srfZk5sSV/tYyy9U%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}> </div>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
    </div>
    <div className="container relative mx-auto flex flex-col items-center py-24">
      <h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-white text-center">Elevate Your Business with Custom Solutions</h1>
      <p className="leading-relaxed mb-8 text-center">Transform your internal processes and boost efficiency with ZaxxDev's bespoke software development services.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Contact Us</button>
      </div>
    </div>
  </header>
);

export default HeaderSection;
