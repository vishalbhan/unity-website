import React, { useEffect } from 'react';
import { Logo } from './icons';
import { NavMenu } from './NavMenu';
import Link from 'next/link';
import Button from './Button';
import { Gift } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = ({ color } : { color: string; }) => {
  const pathname = usePathname()

  return (
    <nav id="nav" className='px-6 py-4 md:py-6' style={{background: pathname === '/business' ? '#080808' : 'transparent'}}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10 xl:space-x-20">
            <Link href="/"><Logo style={color} /></Link>
            <NavMenu style={color} />
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <Gift style={{color: color === "light" ? "#000" : "#FFF"}} />
            <Button text="Login" type="tertiary" href="/" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;