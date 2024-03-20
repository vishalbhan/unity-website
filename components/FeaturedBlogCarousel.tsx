import { formatDistanceToNow } from 'date-fns';
import React, { useState } from 'react';
import Button from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedBlogCarousel: React.FC = ({ blogs }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % blogs.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="featured-blog-carousel">
      <div
        className={`grid grid-cols-2 items-center gap-12`}
      >
        <div 
          className='relative bg-cover rounded-xl h-96'
          style={{ backgroundImage: `url(${blogs[currentSlide].article.value.data.image})` }}
        >

        </div>
        <div>
          <h4 className='font-semibold mb-4'>{blogs[currentSlide].article.value.data.title}</h4>
          <div className="sm mb-6">
            <p>{blogs[currentSlide].article.value.data.excerpt}</p>
          </div>
          <div className='text-sm text-gray-500 mb-6'>{blogs[currentSlide].article.value.data.readTime} min read&nbsp;&nbsp;|&nbsp;&nbsp;{formatDistanceToNow(blogs[currentSlide].article.value.data.date, { addSuffix: true })}</div>
          <Button
            text="Read Blog"
            type="link"
            href={`/blog/${blogs[currentSlide].article.value.data.slug}`}
            icon="arrow-right"
          />
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3 mt-8">
        <ChevronLeft size={18} onClick={handlePrev} className='cursor-pointer -ml-4' />
        {blogs?.map((blog: any, index: number) => (
          <button
            key={blog.id}
            className={`w-2 h-2 rounded-full bg-gray-200 transition-all duration-300 ${index === currentSlide ? 'w-5 bg-yellow-500' : ''}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
        <ChevronRight size={18} onClick={handleNext} className='cursor-pointer -mr-4' />
      </div>
    </div>
  );
};

export default FeaturedBlogCarousel;