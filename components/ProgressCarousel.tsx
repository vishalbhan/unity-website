import React from 'react'
import * as Progress from '@radix-ui/react-progress';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type Sections = {
  title: string,
  cards: {
    content: string,
    illustration: string,
  }[]
}[]

export default function ProgressCarousel({ sections }: { sections: Sections }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [progress, setProgress] = React.useState(0)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  
  React.useEffect(() => {
    setProgress((current/count) * 100)
  }, [current])

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <div className='max-w-2xl mx-auto mb-12'>
      <Progress.Root
        className="relative overflow-hidden bg-white rounded-full w-full h-[15px]"
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: 'translateZ(0)',
        }}
        value={progress}
      >
        <Progress.Indicator
          className="bg-[#EE9D00] w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - (progress)}%)` }}
        />
      </Progress.Root>
        <div className="flex items-center justify-around">
          {
            sections.map((section, i) => (
              <h5 key={i} className='p-8'>{section.title}</h5>
            ))
          }
        </div>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="pb-20"
      >
        <CarouselContent>
          {
            sections.map((section, i) => (
              section.cards.map((item, j) => (
                <CarouselItem key={j} className="md:basis-1/3">
                  <div className='white-card relative'>
                    <div className="badge mb-4">{section.title}</div>
                    <div className='sm mb-32' dangerouslySetInnerHTML={{__html:item.content}} />
                    <div dangerouslySetInnerHTML={{__html: item.illustration}} className='absolute bottom-6 right-6'/>
                  </div>
                </CarouselItem>
              )
            )
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
