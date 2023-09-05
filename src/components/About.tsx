import React from 'react';

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Map Your Ancestors Project
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        This project was created to show the migration journeys of your ancestors.  You can add location data for a known ancestor and view it on a map.  You can also export your data to a JavaScript file that you can upload later for mapping.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#inputdata"
                            className="ml-4 inline-flex text-rose-50 bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-500 hover:text-white rounded text-lg">
                                Input Your Data
                        </a>
                        <a
                            href="#mapdata"
                            className="ml-4 inline-flex text-rose-50 bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-500 hover:text-white rounded text-lg">
                                Map Your Data
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
