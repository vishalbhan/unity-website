import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import styled from 'styled-components'
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const testimonialSeed = [
  {
    type: "video",
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    videoUserName: "John Doe",
  },
  {
    type: "text",
    textTitle: "Amazing banking experience",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textUserName: "Jane Doe",
  },
  {
    type: "double",
    textUserImage: "https://picsum.photos/200/200",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    textUserName: "John Doe",
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    videoUserName: "Jane Doe",
  },
  {
    type: "video",
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    videoUserName: "John Doe",
  },
  {
    type: "text",
    textTitle: "Amazing banking experience",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textUserName: "Jane Doe",
  },
  {
    type: "double",
    textUserImage: "https://picsum.photos/200/200",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    textUserName: "John Doe",
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    videoUserName: "Jane Doe",
  },
]

export default function TestimonialCarousel({ testimonials }: any) {
  return (
    <div className='my-20 max-w-full'>
      <h2 className='text-center mb-20'>
        What our customers<br/>
        say about us
      </h2>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full pb-20"
      >
        <CarouselContent className='items-center'>
          {
            testimonialSeed.map((_: any, index: number) => (
              <CarouselItem key={index} className={`basis-2/3 md:basis-1/3`}>
                {
                  _.type === "video" &&
                  <div className="dark-card relative aspect-[9/16]">
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src={_.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className='absolute bottom-4 left-4 font-semibold text-white'>{_.videoUserName}</p>
                  </div>
                }
                {
                  _.type === "text" &&
                  <div className="dark-card aspect-[9/16]">
                    <h6 className='mb-6'>{_.textTitle}</h6>
                    <div className='text-[rgba(255,255,255,0.8)] mb-6'>{_.textContent}</div>
                    <p className='font-semibold text-white'>{_.textUserName}</p>
                  </div>
                }
                {
                  _.type === "double" &&
                  <>
                    <div className='white-card mb-4 aspect-square grid place-items-center text-center'>
                      <div>
                        <img src={_.textUserImage} className='w-16 h-16 rounded-full mb-6 mx-auto' />
                        <div className='mb-4'>{_.textContent}</div>
                        <p className='font-semibold'>{_.textUserName}</p>
                      </div>
                    </div>
                    <div className="dark-card relative aspect-square">
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src={_.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className='absolute bottom-4 left-4 font-semibold text-white'>{_.videoUserName}</p>
                  </div>
                  </>
                }
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <div className="flex items-end justify-between mt-20">
          <div>
            <CarouselPrevious className='mr-4' />
            <CarouselNext />
          </div>
        </div>
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
