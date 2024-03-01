import React, { forwardRef, LegacyRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const CompanyMenu = forwardRef<HTMLElement>((props, ref) => {
  const [items, setItems] = React.useState<any>([]);
  
  React.useEffect(() => {
    fetch("https://cdn.builder.io/api/v3/content/navigation?apiKey=21b44296fc364461abc19d1d5fa5792d&query.name=Company&limit=1")
      .then(res => res.json())
      .then((data: any) => {
        if (data.results) setItems(data.results[0].data.items);
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
