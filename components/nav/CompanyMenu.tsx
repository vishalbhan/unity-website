import React, { forwardRef, LegacyRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const CompanyMenu = forwardRef<HTMLElement>((props, ref) => {
  const [items, setItems] = React.useState<any>([]);
  
  React.useEffect(() => {
    builder
      .get('navigation', {
        query: {
          name: 'Company'
        },
      })
      .promise()
      .then((data: any) => {
        if (data) setItems(data.data.items);
      })
  }, [])


  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className='p-8'>
      <ul className="grid grid-cols-2 gap-6">
        {items.map((item: any) => (
          <li key={item.link}>
            <a className="flex items-center space-x-4" href={item.link}>
              <div dangerouslySetInnerHTML={{__html:item.icon}} />
              <p className="text-sm font-medium">{item.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
})
