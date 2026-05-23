import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-5xl rounded-full z-50 transition-all duration-500 ease-out border px-6 md:px-8 py-3 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/80" 
          : "bg-[#080809]/20 backdrop-blur-md border-white/5"
      }`}
    >
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 transition-transform duration-300 hover:scale-102'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-6 h-6 object-contain filter invert opacity-90' />
          <p className='text-white text-[15px] font-normal tracking-wide cursor-pointer flex items-center'>
            Vincent &nbsp;
            <span className='text-secondary font-light text-[13px]'> | Developer </span>
          </p>
        </Link>

        {/* Desktop Navbar */}
        <ul className='list-none hidden sm:flex flex-row items-center gap-1.5'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`block px-4 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full ${
                  active === nav.title
                    ? "bg-white/10 text-white font-semibold"
                    : "text-secondary hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[20px] h-[20px] object-contain filter invert opacity-80'
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-5 bg-[#121316]/95 backdrop-blur-xl border border-white/10 absolute top-14 right-0 mx-2 my-1 min-w-[180px] z-50 rounded-2xl shadow-2xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-3 w-full'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='w-full border-b border-white/5 pb-1.5 last:border-b-0 last:pb-0'
                >
                  <a
                    href={`#${nav.id}`}
                    className={`block w-full text-[13px] font-medium tracking-wide py-0.5 transition-colors ${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
