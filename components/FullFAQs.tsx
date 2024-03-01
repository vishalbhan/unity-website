import React from 'react'
import { builder } from '@builder.io/react';
import FAQs from './FAQs';
import useWindowWidth from '@/hooks/useWindowWidth';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function FullFAQs() {
  const [data, setData] = React.useState<any>(null);
  const [selectedCatgeory, setSelectedCategory] = React.useState<number>(0);
  const width = useWindowWidth()

  React.useEffect(() => {
    builder.getAll('fa-qs').then((data) => {
      setData(data);
    })
  }, []);
  
  return (
    <div className='md:grid grid-cols-4'>
      {
        width > 768 ? (
          <div className="flex flex-col gap-6">
            {
              data?.map((item: any, index: number) => {
                return (
                  <a 
                    key={item.id} 
                    onClick={() => setSelectedCategory(index)}
                    className={`w-fit cursor-pointer p-4 rounded-full ${selectedCatgeory === index ? 'bg-black text-white' : ''}`}
                  >
                    {item.data.category}
                  </a>
                )
              })
            }
          </div>
        ) : (
          <div className='w-full'>
            <DropdownMenu>
              <DropdownMenuTrigger className='bg-black text-white w-full p-3 rounded-full mb-12 relative'>
                { data && data[selectedCatgeory].data.category }
                <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2' size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white w-full'>
                {
                  data?.map((_: any, i: number) => (
                    <DropdownMenuItem 
                      key={`menu-item-${i}`}
                      onClick={() => setSelectedCategory(i)}
                      className='p-3 w-full text-left hover:bg-gray-100 cursor-pointer'
                    >
                      {_.data.category}
                    </DropdownMenuItem>
                  ))
                }
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      }
      <div className="col-span-3">
        { data && 
          <div className='-mt-10'>
            <FAQs theme="light" faqs={data[selectedCatgeory].data.questions} /> 
          </div>
        }
      </div>
    </div>
  )
}
