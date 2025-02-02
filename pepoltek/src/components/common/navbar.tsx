import React from 'react';
import { NavLink  } from 'react-router-dom';



const Navbar: React.FC = () => {
    return (
        <nav className="bg-pink-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-lg font-bold">PEPOL.TEK</a>
                <div className="flex-1 flex justify-center">
                    <div className="flex items-center space-x-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        {/* <NavLink to="/about" children="About" />
                        <NavLink to="/services" children="Our Services" />
                        <NavLink to="/portfolio" children="Portfolio" />
                        <NavLink to="/blog" children="Blog" />
                        <NavLink to="/contact" children="Contact" /> */}
                    </div>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;