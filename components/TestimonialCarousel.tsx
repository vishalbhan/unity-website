import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { builder } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function TestimonialCarousel() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    builder.getAll('testimonials').then((data: any) => {
      setData(data);
    })
  }, [])


  return (
    <div className='my-20 max-w-full'>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full pb-20"
      >
        <CarouselContent className='items-center'>
          {
            data.map((_: any, index: number) => (
              <CarouselItem key={index} className={`basis-2/3 md:basis-1/3`}>
                {
                  _.data.type === "video" &&
                  <div className="dark-card relative aspect-[9/16]">
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src={_.data.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className='absolute bottom-4 left-4 font-semibold text-white'>{_.data.videoUserName}</p>
                  </div>
                }
                {
                  _.data.type === "text" &&
                  <div className="dark-card aspect-[9/16]">
                    <h6 className='mb-6'>{_.data.textTitle}</h6>
                    <div className='text-[rgba(255,255,255,0.8)] mb-6'>{_.data.textContent}</div>
                    <p className='font-semibold text-white'>{_.data.textUserName}</p>
                  </div>
                }
                {
                  _.data.type === "double" &&
                  <>
                    <div className='white-card mb-4 aspect-square grid place-items-center text-center'>
                      <div>
                        { _.data.textUserImage && <img src={_.data.textUserImage} className='w-16 h-16 rounded-full mb-6 mx-auto' /> }
                        <div className='mb-4'>{_.data.textContent}</div>
                        <p className='font-semibold'>{_.data.textUserName}</p>
                      </div>
                    </div>
                    <div className="dark-card relative aspect-square">
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src={_.data.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className='absolute bottom-4 left-4 font-semibold text-white'>{_.data.videoUserName}</p>
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
