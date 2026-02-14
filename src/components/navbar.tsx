"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function Navbar({cart, onOpen}: any) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [cartItems, setCartItems] = useState(cart);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl text-white">1101 Confectionary</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 text-white font-semibold">
          <a href="#">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div onClick={onOpen} className=" cursor-pointer relative"  >

              <img src={"/image/cart.svg"} alt="Cart" className="w-6" />

            <div className="absolute -top-2 -right-1 bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cart.length}
            </div>
          </div>
        </div>

        {/* Mobile button */}
       <div className="flex md:hidden items-center gap-6 text-white font-semibold">
         <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          ☰
        </button>
        <div onClick={onOpen} className=" cursor-pointer relative"  >

              <img src={"/image/cart.svg"} alt="Cart" className="w-6" />

            <div className="absolute -top-2 -right-1 bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cart.length}
            </div>
          </div>
       </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-white shadow-md md:hidden">
          <div className="flex flex-col p-6 text-gray-900  gap-4">
            <a href="#">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}

    </motion.nav>
  );
}
