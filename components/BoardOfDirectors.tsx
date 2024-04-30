import React from 'react'
import styled from 'styled-components'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BoardOfDirectors() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    builder.getAll('board-of-directors').then((data) => {
      setData(data);
    })
  }, []);

  return (
    <>
      <Container>
        {
          data?.map((item: any) => {
            return (
              <Dialog key={item.id}>
                <DialogTrigger className='cursor-pointer overflow-hidden' asChild>
                  <TeamItem>
                    <div className='bg-gray-200'>
                      <img src={item.data.image} alt={item.data.name} className='object-cover' />
                    </div>
                    <div className='p-6'>
                      <div className="text-[14px] text-gray-500 mb-4">{item.data.designation}</div>
                      <div className='text-lg font-semibold mb-4'>{item.data.name}</div>
                    </div>
                  </TeamItem>
                </DialogTrigger>
                <DialogContent className='bg-white p-6 max-h-[90%] overflow-auto' style={{maxWidth:'860px'}}>
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className='flex flex-col items-center md:items-start border-b-2 md:border-b-0 border-r-0 md:border-r-2 mb-6 md:p-6'>
                      <img src={item.data.image} alt={item.data.name} className='w-40 md:w-full object-cover mb-4' />
                      <div className="text-[14px] text-gray-500 mb-4">{item.data.designation}</div>
                      <div className='text-lg font-semibold mb-4'>{item.data.name}</div>
                    </div>
                    <div className="col-span-2 md:p-6 sm h-[505px] overflow-auto">
                      <div className='text-lg font-semibold mb-4'>About {item.data.name}</div>
                      <p className='max-h-80 overflow-y-scroll md:max-h-none'>
                        {item.data.bio}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })
        }
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  align-items: stretch;
`

const TeamItem = styled.div`
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(168, 161, 125, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.13);
`
