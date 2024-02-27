import React from 'react';
import { PersonalMenu } from './nav/PersonalMenu';
import { BusinessMenu } from './nav/BusinessMenu';
import { CompanyMenu } from './nav/CompanyMenu';
import clsx from 'clsx';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

const navItems = [
  {
    title: 'Personal',
    href: '/personal',
    hasDropdown: true,
  },
  {
    title: 'Business',
    href: '/business',
    hasDropdown: true,
  },
  {
    title: 'Company',
    href: '/company',
    hasDropdown: true,
  },
  {
    title: 'Inclusive',
    href: '/inclusive',
    hasDropdown: false,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    hasDropdown: false,
  },
];

const AnimatedNavMenu: React.FC<{color: string}> = ({ color }) => {
  const [hovering, setHovering] = React.useState<number | null>(null)
  const [popoverLeft, setPopoverLeft] = React.useState<number | null>(null)
  const [popoverHeight, setPopoverHeight] = React.useState<number | null>(null)

  const refs = React.useRef<(HTMLElement | null)[]>([])

  const handleMouseEnter = (index: number, el: HTMLElement) => {
    setHovering(index)
    setPopoverLeft(el.offsetLeft)
    const menuElement = refs.current[index]
    if (menuElement) {
      setPopoverHeight(menuElement.offsetHeight)
    }
  }

  React.useEffect(() => {
    console.log(hovering);
  }, [hovering]);

  return (
    <nav className="z-50 relative" onMouseEnter={() => setHovering(null)}>
      <div className='flex gap-2'>
        {
          navItems.map((item, index) => (
            <NavMenuItem key={item.title}>
              {
                item.hasDropdown ? (
                  <a
                    href={item.href}
                    onMouseEnter={(e) => handleMouseEnter(index, e.currentTarget)}
                    className='flex items-center'
                  >
                    {item.title}
                    <ChevronDown size={16} className={clsx('ml-1 transition-all duration-150', hovering === index ? "rotate-180" : "")} />
                  </a>
                ) : (
                  <a 
                    href={item.href}
                    onMouseEnter={() => setHovering(null)}
                  >
                    {item.title}
                  </a>
                )
              }
            </NavMenuItem>
          ))
        }
        <div
          className={clsx(
            'z-50 absolute top-12 -ml-24 bg-white shadow-lg rounded-xl transition-all duration-300',
            hovering !== null ? "transition-all" : "opacity-0 pointer-events-none",
          )}
          style={{ 
            width: hovering === 0 && 900 || 650,
            height: popoverHeight || 0,
            left: popoverLeft || 0 
          }}
        >
          <SlideWrapper index={0} hovering={hovering} setHovering={setHovering}>
            <PersonalMenu ref={element => refs.current[0] = element} />
          </SlideWrapper>
          <SlideWrapper index={1} hovering={hovering} setHovering={setHovering}>
            <BusinessMenu ref={element => refs.current[1] = element} />
          </SlideWrapper>
          <SlideWrapper index={2} hovering={hovering} setHovering={setHovering}>
            <CompanyMenu ref={element => refs.current[2] = element} />
          </SlideWrapper>
        </div>
      </div>
    </nav>
  );
};

const SlideWrapper: React.FC<{ 
  index: number, 
  hovering: number | null, 
  children: React.ReactNode,
  setHovering: React.Dispatch<React.SetStateAction<number | null>>
}> = (
    { index, hovering, setHovering, children }) => { 
  return ( 
    <SlideInner
      onMouseEnter={() => setHovering(index)}
      onMouseLeave={() => setHovering(null)}
      className={clsx(
        "absolute w-full transition-all duration-300",
        hovering === index ? "opacity-100" : "opacity-0 pointer-events-none",
        hovering === index || hovering === null
          ? "transform-none"
          : hovering! > index
          ? "-translate-x-24"
          : "translate-x-24",
      )}
    >
      {children}
    </SlideInner>
  )
};

export default AnimatedNavMenu;

const NavMenuItem = styled.div`
  border-radius: 99px;
  background: transparent;
  padding: 4px 14px;
  transition: all 0.3s ease;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  &:hover {
    background: #EFEBDE;
  }
`

const SlideInner = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0px 24px 72px 0px #0000001F;
  border-radius: 24px;
  background-color: #fff;
  padding: 18px;
`