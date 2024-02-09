import React from 'react'
import { builder } from '@builder.io/react';
import FAQs from './FAQs';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function FullFAQs() {
  const [data, setData] = React.useState<any>(null);
  const [selectedCatgeory, setSelectedCategory] = React.useState<number>(0);

  React.useEffect(() => {
    builder.getAll('fa-qs').then((data) => {
      setData(data);
    })
  }, []);
  
  return (
    <div className='grid grid-cols-3'>
      <div className="flex flex-col gap-6">
        {
          data?.map((item: any, index: number) => {
            return (
              <a key={item.id} onClick={() => setSelectedCategory(index)}>
                <p>{item.data.category}</p>
              </a>
            )
          })
        }
      </div>
      <div className="col-span-2">
        { data && <FAQs theme="light" faqs={data[selectedCatgeory].data.questions} /> }
      </div>
    </div>
  )
}
