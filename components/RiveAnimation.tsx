import React from 'react'
import { useRive } from '@rive-app/react-canvas';

export default function RiveAnimation({ rivFile }: { rivFile: string }) {
  const { rive, RiveComponent } = useRive({
    src: rivFile,
    stateMachines: "bumpy",
    autoplay: false,
  });

  return (
    <div className='h-96'>
      <RiveComponent 
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  )
}
