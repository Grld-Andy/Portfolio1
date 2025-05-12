import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('cursor-pointer', {
      'text-[#7232B8]': isActive,
      'hover:text-[#7232B8]': !isActive,
    });

  return (
    <div className='pb-20'>
      <div className='bg-black/80 z-50 w-full fixed flex justify-between items-center px-10 py-4'>
        <ul className='flex gap-8'>
          <li>
            <NavLink to="/" className={linkClass}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/studio" className={linkClass}>
              STUDIO
            </NavLink>
          </li>
        </ul>
        <button className='bg-gradient-to-br from-purple-500 to-purple-700 transition-all duration-150 form_button_glow w-[120px] cursor-pointer rounded-lg py-[10px] text-[12px] font-semibold'>
          <p className='rounded-lg'>Get In Touch</p>
        </button>
      </div>
      <div className='fixed z-50 top-3 left-0 w-full pointer-events-none'>
        <h1 className='text-center text-[25px] jedira'>ed.win</h1>
      </div>
    </div>
  );
};

export default Navbar;
