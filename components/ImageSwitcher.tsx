import React, { useState } from 'react';

interface ImageSwitcherProps {
  data: {
    title: string;
    code: string;
  }[];
}

const ImageSwitcher: React.FC<ImageSwitcherProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
        <div dangerouslySetInnerHTML={{__html:data[selectedIndex].code}} className='mb-12' />
        <div className='flex justify-center items-center gap-6 mb-16'>
        {
          data?.map((_, i) => (
            <a 
              key={`menu-item-${i}`} 
              onClick={() => setSelectedIndex(i)}
              className={`cursor-pointer w-fit px-5 py-3 rounded-full ${selectedIndex === i ? 'bg-black text-white' : ''}`}
            >
              <div>{_.title}</div>
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default ImageSwitcher;