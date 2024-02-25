import React, { forwardRef, LegacyRef } from 'react';
import { navItems } from './navItems';

export const CompanyMenu = forwardRef<HTMLElement>((props, ref) => {
  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className='p-8'>
      <ul className="grid grid-cols-2 gap-4">
        {navItems.company.map((item) => (
          <li key={item.href}>
            <a className="flex items-center space-x-6" href={item.href}>
              {item.icon}
              <p className="text-sm font-medium">{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
})
