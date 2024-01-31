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
    slug: string
    image: string
    date: string | Date
    type: "blog" | "story"
    category: string[]
    excerpt: string
    readtime: number
  }[]
}

const blogs = [
  {
    title: 'How to save your money efficiently in your life?',
    slug: 'how-to-save-your-money-efficiently-in-your-life',
    image: 'https://picsum.photos/400/300',
    type: 'blog',
    date: '2024-01-01',
    category: ['Finance', 'Saving'],
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    readtime: 5,
  },
  {
    title: 'How to save your money efficiently in your life?',
    slug: 'how-to-save-your-money-efficiently-in-your-life',
    image: 'https://picsum.photos/400/300',
    type: 'story',
    date: '2024-01-01',
    category: ['Finance', 'Saving'],
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    readtime: 5,
  },
  {
    title: 'How to save your money efficiently in your life?',
    slug: 'how-to-save-your-money-efficiently-in-your-life',
    image: 'https://picsum.photos/400/300',
    type: 'blog',
    date: '2024-01-01',
    category: ['Finance', 'Saving'],
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    readtime: 5,
  },
  {
    title: 'How to save your money efficiently in your life?',
    slug: 'how-to-save-your-money-efficiently-in-your-life',
    image: 'https://picsum.photos/400/300',
    type: 'story',
    date: '2024-01-01',
    category: ['Finance', 'Saving'],
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    readtime: 5,
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
        <CarouselContent className='items-stretch'>
          {blogs.map((_, index) => (
            <CarouselItem key={index} className={`${_.type === 'story' ? 'md:basis-1/2' : 'md:basis-1/3'}`}>
              <BlogCard className='h-full'>
                <div 
                  style={{backgroundImage: `url(${_.image})`}}
                  className={`relative bg-cover bg-center w-full h-72 ${_.type === 'blog' ? '' : 'aspect-video'}`}
                >
                  <Badge className='absolute top-4 left-4'>{_.type.toUpperCase()}</Badge>
                </div>
                <div className='p-6'>
                  <h6 className='mb-6'>{_.title}</h6>
                  <p className='text-sm text-gray-500 mb-6'>{_.readtime} min read | 1 day ago</p>
                </div>
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
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 16px 0px rgba(168, 161, 125, 0.12), 0px 0px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 1px 0px rgba(0, 0, 0, 0.13);
  overflow: hidden;
  align-items: stretch;
`

const Badge = styled.div`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 4px;
  background: rgba(30, 30, 30, 0.50);
  color: #fff;
  font-family: 'Archivo', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.12px;
`
