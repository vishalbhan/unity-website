import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent() {
  return (
    <Typewriter
      options={{
        strings: [
          'Text 1',
          'Text 2',
          'Text 3',
        ],
        autoStart: true,
        loop: true,
      }}
    />
  )
}
