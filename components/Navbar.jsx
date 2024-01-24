import React from 'react';
import { Logo } from './icons';

const Navbar = () => {
  return (
    <nav className='py-6'>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Logo />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;