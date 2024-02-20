import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState();

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');

            window.scrollTo(0, 0);
          }}
        >
          {/*TODO - update to 'M' */}
          <img
            src={logo}
            alt={logo}
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Michael &nbsp;
            <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? 'text-white' : 'text-secondary'
              } hover:text-white font-medium cursor-pointer`}
              onClick={() => {
                setActive(title);
              }}
            >
              {/* TODO - update blog link */}
              <a href={id === 'blog' ? '' : `#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={menu}
            className="object-contain cursor-pointer w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  className={`${
                    active === title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(title);
                  }}
                >
                  <a href={`#${id}`}>{title}</a>
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
