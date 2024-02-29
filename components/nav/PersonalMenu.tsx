import React, { forwardRef, LegacyRef } from 'react';
import { navItems } from './navItems';
import { ArrowRight } from 'lucide-react';

export const PersonalMenu = forwardRef<HTMLElement>((props, ref) => {
  const [personalSelectedIndex, setPersonalSelectedIndex] = React.useState(0);
  
  return (
    <div className="w-[900px] p-8" ref={ref as LegacyRef<HTMLDivElement>}>
      <a href="/">
        <h6 className="mb-8 flex items-center">
          Personal banking
          <ArrowRight className='ml-2' />
        </h6>
      </a>
      <div className="grid grid-cols-[250px,1fr] items-start gap-8">
        <div>
          <div className={`sm rounded-xl mb-4 p-4 ${personalSelectedIndex === 0 ? 'bg-[#F5F4F1]' : ''}`} onMouseEnter={() => setPersonalSelectedIndex(0)}>
            <h6 className="">Save</h6>
            <div className='text-sm'>Grow your savings securely with unity accounts and deposits</div>
          </div>
          <div className={`sm rounded-xl mb-4 p-4 ${personalSelectedIndex === 1 ? 'bg-[#F5F4F1]' : ''}`} onMouseEnter={() => setPersonalSelectedIndex(1)}>
            <h6 className="">Borrow</h6>
            <div className='text-sm'>Get instant loans with interest rates in your interest</div>
          </div>
          <div className={`sm rounded-xl mb-4 p-4 ${personalSelectedIndex === 2 ? 'bg-[#F5F4F1]' : ''}`} onMouseEnter={() => setPersonalSelectedIndex(2)}>
            <h6 className="">Insure</h6>
            <div className='text-sm'>Secure your future with health insurance etc</div>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {personalSelectedIndex === 0 && navItems.personal.save.map((item: any) => (
            <li key={item.href}>
              <a className="flex items-center space-x-6" href={item.href}>
                {item.icon}
                <p className="text-sm font-medium">{item.title}</p>
              </a>
            </li>
          ))}
          {personalSelectedIndex === 1 && navItems.personal.borrow.map((item: any) => (
            <li key={item.href}>
              <a className="flex items-center space-x-6" href={item.href}>
                {item.icon}
                <p className="text-sm font-medium">{item.title}</p>
              </a>
            </li>
          ))}
          {personalSelectedIndex === 2 && navItems.personal.invest.map((item: any) => (
            <li key={item.href} className="col-span-2">
              <a className="flex items-center space-x-6" href={item.href}>
                {item.icon}
                <p className="text-sm font-medium">{item.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
})
