import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaWordpress, FaWix, FaReact   } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="bg-gray-900 text-white p-10">
                <div className="container mx-auto flex justify-between">
                        {/* About Us */}
                        <div>
                                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                                <p className="mb-6 w-[450px]">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at.
                                </p>
                                <div className="flex space-x-4">
                                        <a href="#" className="bg-white text-red-500 p-2 rounded">
                                                <FaLinkedinIn />
                                        </a>
                                        <a href="#" className="bg-white text-red-500 p-2 rounded">
                                                <FaInstagram />
                                        </a>
                                        <a href="#" className="bg-white text-red-500 p-2 rounded">
                                                <FaFacebookF />
                                        </a>
                                        <a href="#" className="bg-white text-red-500 p-2 rounded">
                                                <FaTwitter />
                                        </a>
                                </div>
                        </div>

                        {/* Services */}
                        <div>
                                <h2 className="text-2xl font-bold mb-4">Services</h2>
                                <ul className="space-y-2">
                                        <li>Web Design/Development</li>
                                        <li>App Development</li>
                                        <li>UI/UX Design</li>
                                        <li>HubSpot Integration</li>
                                        <li>Email Marketing</li>
                                        <li>Website Migration</li>
                                </ul>
                        </div>

                        {/* Career */}
                        <div>
                        <h2 className="text-2xl font-bold mb-4">Career</h2>
                                <div className="space-y-4">
                                        <div className="flex items-center">
                                            <FaReact className='w-12 h-12 mr-4' />
                                        <div>
                                                <h3 className="text-red-500">ReactJs Dev.</h3>
                                                <p>1-5 Years of Exp.</p>
                                        </div>
                                        </div>
                                        <div className="flex items-center">
                                            <FaWordpress className='w-12 h-12 mr-4' />
                                        <div>
                                                <h3 className="text-red-500">Wordpress Dev.</h3>
                                                <p>1-5 Years of Exp.</p>
                                        </div>
                                        </div>
                                        <div className="flex items-center">
                                            <FaWix className='w-12 h-12 mr-4' />
                                        <div>
                                                <h3 className="text-red-500">Wix Developer</h3>
                                                <p>1-5 Years of Exp.</p>
                                        </div>
                                        </div>
                                </div>
                        </div>

                        {/* Subscribe Us */}
                        <div className='w-2xs'>
                                <h2 className="text-2xl font-bold mb-4">Subscribe Us</h2>
                                <p className="mb-4 w-[250px]">
                                        It is a long established fact that a reader will be distracted by the readable.
                                </p>
                                <form className="flex flex-col w-full max-w-md">
                                        <input type="email" placeholder="Email" className="w-auto p-2 mb-2 border border-gray-700 rounded placeholder-black bg-white" />
                                        <button type="submit" className="bg-red-500 text-white mt-4 ml-auto py-2 rounded w-[100px] justify-items-end">
                                        Submit
                                        </button>
                                </form>
                        </div>
                </div>
                <div className="mt-8 text-center">
                        <p className="mr-4">&copy; 2024 PEPOL.TEK - All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Footer;