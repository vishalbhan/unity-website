import React, { useEffect } from 'react'
import { useRive } from '@rive-app/react-canvas';

export default function RiveAnimation({ rivFile }: { rivFile: string }) {
  const { rive, RiveComponent } = useRive({
    src: rivFile,
    autoplay: true,
  });

  useEffect(() => {
    rive?.play()
  }, [rive])

  return (
    <div className='h-96'>
      <RiveComponent />
    </div>
  )
}
