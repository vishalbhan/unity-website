import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent() {
  return (
    <h2 className='text-white text-center'>
      <Typewriter
        options={{
          strings: [
            'Working Capital',
            'Supply chain finance',
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </h2>
  )
}
