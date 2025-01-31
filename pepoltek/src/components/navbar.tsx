import React from 'react';
// import { Link } from 'react-router-dom';


const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
                        return (
                            <a href={href} className="text-gray-600 hover:text-red-600">
                                {children}
                            </a>
                        );
                    };

const Navbar: React.FC = () => {
    return (
        <nav className="bg-pink-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-lg font-bold">PEPOL.TEK</a>
                <div className="flex-1 flex justify-center">
                    <div className="flex items-center space-x-4">
                        <NavLink href="/" children="Home" />
                        <NavLink href="/about" children="About" />
                        <NavLink href="/services" children="Our Services" />
                        <NavLink href="/portfolio" children="Portfolio" />
                        <NavLink href="/blog" children="Blog" />
                        <NavLink href="/contact" children="Contact" />
                    </div>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;