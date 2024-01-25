import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import styled from 'styled-components'

type Blogs = {
  blogs: {
    title: string
    preview: string
    image: string
  }[]
}

const blogs = [
  {
    title: 'How to save your money efficiently in your life?',
    metadata: '5 min read | 1 week ago',
    image: 'https://picsum.photos/400/300'
  },
  {
    title: 'How to save your money efficiently in your life?',
    metadata: '5 min read | 1 week ago',
    image: 'https://picsum.photos/400/300'
  },
  {
    title: 'How to save your money efficiently in your life?',
    metadata: '5 min read | 1 week ago',
    image: 'https://picsum.photos/400/300'
  },
  {
    title: 'How to save your money efficiently in your life?',
    metadata: '5 min read | 1 week ago',
    image: 'https://picsum.photos/400/300'
  },
]

export default function BlogPreview() {
  return (
    <div className='my-20 max-w-full'>
      <h2 className='mb-16'>Our blogs and stories</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full pb-20"
      >
        <CarouselContent>
          {blogs.map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <BlogCard>
                <div className='p-10'>
                  <h6 className='mb-6'>{_.title}</h6>
                  <p className='mb-6'>{_.metadata}</p>
                </div>
                <div style={{backgroundImage: `url(${_.image})`}} className='bg-cover h-full' />
              </BlogCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

const BlogCard = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(168, 161, 125, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.13);
  overflow: hidden;
`
