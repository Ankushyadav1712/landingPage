// // use rafce for auto write 


// import {Menu,X} from 'lucide-react';

// import { useState } from 'react';

// import logo from "../assets/logo.png";

// import React from 'react'

// const Navbar = () => {

//   const [mobileopen, setMobileOpen] = useState(false);
//   const toggleNavbar = ()=>{
//     setMobileOpen(!mobileopen);
//   }

//   return (
//     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//         <div className="container px-4 mx-auto relative text-sm">
//             <div className="flex justify-between items-center">
//                 {/* for logo */}
//                 <div className="flex items-center flex-shrink-0">
//                     <img  className="h-10 w-10 mr-2 rounded-full" src={logo} alt="logo" />
//                     {/* tracking tight for letter spacing */}
//                     <span className="text-xl tracking-tight">Invertery App</span>
//                 </div>

//                 <ul className=" lg-flex ml-14 space-x-12">
//                   <a href="./about">About</a>
//                   <a href="#">Features</a>
//                   <a href="#">Testinomails</a>
//                 </ul>

//                 {/* sign button */}

//                 <div className=" lg:flex justify-center space-x-12 items-center">
//                   <button className="py-2 px-3 border rounded-md">
//                     Sign-In
//                   </button>
//                   <button className="bg-gradient-to-r from-emerald-500 to bg-emerald-600 py-2 px-3 rounded-md">
//                     Create an account
//                   </button>
//                 </div>
//                 <div className="lg:hidden md:flex flex-col justify-end">
//                   <button onClick={toggleNavbar}>
//                     {mobileopen ? <X/> :<Menu/>}
//                   </button>
//                 </div>
//                 {mobileopen && ()}
//             </div>
//         </div>
//     </nav>  
//   )
// }

// export default Navbar



import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Invertery App</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-emerald-500 to bg-emerald-600 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

