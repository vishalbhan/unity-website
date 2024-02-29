import React, { forwardRef, LegacyRef } from 'react';
import { navItems } from './navItems';
import { ArrowRight } from 'lucide-react';

export const BusinessMenu = forwardRef<HTMLElement>((props, ref) => {
  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className='p-8'>
      <a href="/business">
        <h6 className="mb-8 flex items-center">
          Business banking
          <ArrowRight className='ml-2' />
        </h6>
      </a>
      <ul className="grid grid-cols-2 gap-6">
        {navItems.business.map((item) => (
          <li key={item.href}>
            <a className="flex items-center space-x-4" href={item.href}>
              {item.icon}
              <p className="text-sm font-medium">{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
})
