import React from 'react'
import { format } from 'date-fns'
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const navItems = [
  {
    title: 'Press Release',
  },
  {
    title: 'Latest News',
  },
  {
    title: 'Press Kit',
  },
]

type Article = {
  items: {
    title: string,
    image: string,
    date: string,
    link: string
  }[]
}

export default function MediaCentres() {
  const [page, setPage] = React.useState(0)
  const [data, setData] = React.useState<Article | null>(null)

  React.useEffect(() => {
    if (page === 0) {
      builder.get('media-centre',{
        query: {
          name: "Press Releases"
        }
      }).promise().then(( data: any ) => {
        if (data) setData(data.data)
      })
    }

    if (page === 1) {
      builder.get('media-centre',{
        query: {
          name: "Latest News"
        }
      }).promise().then(( data: any ) => {
        if (data) setData(data.data)
      })
    }
  }, [page])

  return (
    <div className='md:grid grid-cols-4 p-10'>

      {/* Menu */}
      <div className='flex flex-col gap-6'>
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
      <div className="col-span-3">

        {/* Press Release */}
        {
          page === 0 && (
            <div className='grid md:grid-cols-2 gap-12'>
              {
                data?.items.map((_, i) => (
                  <a key={`article-${i}`} href={_.link} target='_blank'>
                    <div className='flex flex-col gap-4'>
                      <img src={_.image} alt={_.title} className='w-full h-60 object-cover rounded-xl' />
                      <div className='flex flex-col gap-2'>
                        <div className='text-lg font-bold'>{_.title}</div>
                        <div className='text-sm text-gray-500'>{format(_.date, "do MMMM, y")}</div>
                      </div>
                    </div>
                  </a>
                ))
              }
            </div>
          )
        }

        {/* Latest News */}
        {
          page === 1 && (
            <div className='grid md:grid-cols-2 gap-12'>
              {
                data?.items.map((_, i) => (
                  <a key={`article-${i}`} href={_.link} target='_blank'>
                    <div className='flex flex-col gap-4'>
                      <img src={_.image} alt={_.title} className='w-full h-60 object-cover rounded-xl' />
                      <div className='flex flex-col gap-2'>
                        <div className='text-lg font-bold'>{_.title}</div>
                        <div className='text-sm text-gray-500'>{format(_.date, "do MMMM, y")}</div>
                      </div>
                    </div>
                  </a>
                ))
              }
            </div>
          )
        }

        {/* Press Kit */}
        {
          page === 2 && (
            <div>
              Press Kit
            </div>
          )
        }

      </div>
      
    </div>
  )
}