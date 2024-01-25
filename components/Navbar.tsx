import React from 'react';
import { Logo } from './icons';
import { NavMenu } from './NavMenu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='py-6'>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <Link href="/"><Logo /></Link>
            <NavMenu />
          </div>
          <div className="flex items-center space-x-12">
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;