import React from 'react'
import Rive from '@rive-app/react-canvas';

export default function RiveAnimation({ rivFile }: { rivFile: string }) {
  return (
    <div>
      <Rive
        src={rivFile}
        stateMachines="bumpy"
      />
    </div>
  )
}
