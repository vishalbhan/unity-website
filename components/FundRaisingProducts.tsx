import React from 'react'
import Button from './Button'
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const navItems = [
  { title: 'Short Term' },
  { title: 'Medium Term'},
  { title: 'Long Term' },
]

type Service = {
  items: {
    title: string,
    description: string
  }[]
}

export default function FundRaisingProducts() {
  const [page, setPage] = React.useState(0)
  const [data, setData] = React.useState<Service | null>(null)

  React.useEffect(() => {
    if (page === 0) {
      builder.get('treasury-services',{
        query: {
          name: "Short Term"
        }
      }).promise().then(( data: any ) => {
        if (data) setData(data.data)
      })
    }

    if (page === 1) {
      builder.get('treasury-services',{
        query: {
          name: "Medium Term"
        }
      }).promise().then(( data: any ) => {
        if (data) setData(data.data)
      })
    }

    if (page === 2) {
      builder.get('treasury-services',{
        query: {
          name: "Long Term"
        }
      }).promise().then(( data: any ) => {
        if (data) setData(data.data)
      })
    }
  }, [page])

  return (
    <div>
      {/* Menu */}
      <div className='flex justify-center items-center gap-10 mb-16'>
        {
          navItems.map((_, i) => (
            <a 
              key={`menu-item-${i}`} 
              onClick={() => setPage(i)}
              className={`cursor-pointer w-fit px-5 py-3 rounded-full ${page === i ? 'bg-black text-white' : ''}`}
            >
              <div>{_.title}</div>
            </a>
          ))
        }
      </div>
      
      {/* Content */}
      <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {
            data?.items.map((_: any, i: number) => (
              <div className='white-card' key={`treasury-service-item-${i}`}>
                <h6 className="mb-6">{_.title}</h6>
                <div className="mb-6">{_.description}</div>
                <Button
                  text="Reach out to us"
                  type="link"
                  href="/contact-us"
                  icon="arrow-right"
                />
              </div>
            ))
          }
        </div>
      </div>
      
    </div>
  )
}