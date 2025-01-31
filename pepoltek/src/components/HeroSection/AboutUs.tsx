import React from 'react';
import aboutus from './../../assets/photo/about_us.png';
import rep from "./../../assets/icons/rep.png";

const AbountUsHero: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <img src={aboutus} alt="Team Image" className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-8" />
                <div className="md:w-2/3">
                    <h2 className="text-4xl font-bold mb-2 text-pink-600">\ About us \</h2>
                    <h1 className="text-5xl font-bold mb-4 text-blue-900">We Create, What You Need</h1>
                    <p className="mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="bg-white p-4 rounded flex items-center justify-between">
                        <div className="mb-2">
                            <img src={rep} alt="Team Member" className="w-12 h-12 rounded-full" />
                            <span className="font-bold text-blue-900">Get Instant Professional Advice</span>
                        </div>
                        <p className="text-black">Ready to Help: <span className="text-pink-600">+1 356 678 7897</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AbountUsHero;