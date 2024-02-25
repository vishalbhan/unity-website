import React, { forwardRef, LegacyRef } from 'react';
import { navItems } from './navItems';

export const BusinessMenu = forwardRef<HTMLElement>((props, ref) => {
  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className='p-8'>
      <h6 className="mb-8">Business banking</h6>
      <ul className="grid grid-cols-2 gap-4">
        {navItems.business.map((item) => (
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
