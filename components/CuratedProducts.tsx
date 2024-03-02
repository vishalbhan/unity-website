import React from 'react';
import { builder } from '@builder.io/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const CuratedProducts: React.FC<any> = () => {
  const [curatedProducts, setCuratedProducts] = React.useState([]);

  React.useEffect(() => {
    builder
      .getAll('curated-products')
      .then((data: any) => {
        setCuratedProducts(data);
      });
  }, []);

  return (
    <div>
      {
        <Accordion type="single" collapsible>
          {
            curatedProducts.map((_: any, i: number) => {
              return (
                <div key={`curated-product-${i}`}>
                  <AccordionItem value={i.toString()} className='py-8 mb-8 bg-white'>
                    <AccordionTrigger className='text-left'>
                      <p className='text-xl pr-8'>{_.data.title}</p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{_.data.content}</p>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              )
            })
          }
        </Accordion>
      }
    </div>
  );
};

export default CuratedProducts;