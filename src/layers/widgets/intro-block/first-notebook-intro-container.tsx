'use client'

import { FunctionComponent, HTMLAttributes, Suspense } from 'react'
import {
  Environment,
  ContactShadows,
  OrbitControls,
  Html,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { cn } from '@/src/layers/shared'
import { NotebookUI } from '@/src/layers/entities'

interface FirstNotebookIntroContainerProps
  extends HTMLAttributes<HTMLCanvasElement> {
  className?: string
}

export const FirstNotebookIntroContainer: FunctionComponent<
  FirstNotebookIntroContainerProps
> = ({ className }) => {
  return (
    <Canvas
      className={cn(className)}
      camera={{ position: [-5, 0, -20], fov: 45 }}
    >
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={<Html center className="w-full"></Html>}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <NotebookUI />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  )
}
