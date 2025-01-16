import React from 'react';

const ServiceLoadingSkeleton = () => {
    return (
        <section className="min-h-screen md:mx-16">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5">
                    <h2><div className="skeleton h-6 w-48"></div></h2>
                    <div className="skeleton h-6 w-28 mt-8"></div>
                    <div className="mt-4 flex flex-row flex-wrap">
                        <div className="skeleton h-6 w-6 mr-4"></div>
                        <div className="skeleton h-6 w-6 mr-4"></div>
                        <div className="skeleton h-6 w-6 mr-4"></div>
                        <div className="skeleton h-6 w-6 mr-4"></div>
                    </div>
                    <div className="skeleton h-6 w-28 mt-8"></div>
                    <div className="mt-4 flex flex-row flex-wrap">
                        <div className="skeleton h-6 w-6 mr-4"></div>
                        <div className="skeleton h-6 w-6 mr-4"></div>
                        <div className="skeleton h-6 w-6 mr-4"></div>
                        <div className="skeleton h-6 w-6 mr-4"></div>
                    </div>
                </div>
                <main className="md:w-3/5 md:pl-6">
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-3/4"></div>
                        <div className="skeleton h-4 w-3/4"></div>
                        <div className="skeleton h-4 w-1/4"></div>
                        <div className="skeleton mt-12 h-32 w-full"></div>
                    </div>
                    <div className="flex md:mt-4 mt-6">
                        <div className="skeleton h-12 w-24 mr-4"></div>
                        <div className="skeleton h-12 w-24 mr-4"></div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ServiceLoadingSkeleton;