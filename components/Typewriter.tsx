import React from 'react'
import Typewriter from 'typewriter-effect';

type TypewriterComponentProps = {
  strings: string[]
}

export default function TypewriterComponent({ strings } : TypewriterComponentProps) {
  return (
    <h2 className='text-white text-center'>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  )
}
