import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Button from './Button';
import { formatDistanceToNow } from 'date-fns';

export default function BlogCategoryCarousel({ category, count }: { category: 'string'; count: number }) {
  const [blogs, setBlogs] = React.useState<any>([])

  React.useEffect(() => {
    // fetch("https://cdn.builder.io/api/v3/html/blog-articles?apiKey=21b44296fc364461abc19d1d5fa5792d&query.data.category=Company")
    fetch("https://cdn.builder.io/api/v3/html/blog-articles?apiKey=21b44296fc364461abc19d1d5fa5792d")
      .then(res => res.json())
      .then((data: any) => {
        console.log(data.results)
        if (data.results) setBlogs(data.results[0].data.items);
      })
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h3>{category}</h3>
        <div className="flex items-center space-x-4">
          <div>
            {/* <CarouselPrevious className='mr-4' />
            <CarouselNext /> */}
          </div>
          <Button
            text="View All"
            href="/blog"
            type="link"
            icon="arrow-right"
          />
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full pb-20"
      >
        <CarouselContent className='items-stretch'>
          {blogs.length > 0 && blogs.map((_: any, index: number) => (
            <CarouselItem key={index} className="basis-4/5 md:basis-1/3">
              <div 
                style={{backgroundImage: `url(${_.article.value.data.image})`}}
                className={`relative bg-cover bg-center w-full h-72 aspect-square`}
              />
              <div className='p-6'>
                <h6 className='mb-6'>{_.article.value.data.title}</h6>
                <div className='text-gray-500 mb-6'>{_.article.value.data.readTime} min read | {formatDistanceToNow(_.article.value.data.date, { addSuffix: true })}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
