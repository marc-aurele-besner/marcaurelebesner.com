import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

interface ISceneProps {
  className?: string
  eventSource?: React.MutableRefObject<any>
  eventPrefix?: string
  children: JSX.Element
}

const Scene: React.FC<ISceneProps> = ({ children, ...props }) => {
  return (
    <>
      {/* @ts-ignore */}
      <Canvas {...props}>
        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />
        {children}
        <Preload all />
      </Canvas>
    </>
  )
}

export default Scene
