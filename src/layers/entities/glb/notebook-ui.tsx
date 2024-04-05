'use client'

import { useRef } from 'react'
import { Group, MathUtils } from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Button, useTypingEffect } from '@/src/layers/shared'
import Image from 'next/image'

export const NotebookUI = ({ ...props }) => {
  const group = useRef<Group>(null)

  const { nodes, materials } = useGLTF('/glb/mac-draco.glb')

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1,
    )
    group.current.rotation.y = MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1,
    )
    group.current.rotation.z = MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1,
    )
    group.current.position.y = MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1,
    )
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            //@ts-ignore
            geometry={nodes['Cube008'].geometry}
          />
          <mesh
            material={materials['matte.001']}
            //@ts-ignore
            geometry={nodes['Cube008_1'].geometry}
          />
          <mesh
            //@ts-ignore
            geometry={nodes['Cube008_2'].geometry}
          >
            <Html
              className="h-[216px] w-[334px] rounded bg-white"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <HtmlInNotebook />
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        //@ts-ignore
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          //@ts-ignore
          geometry={nodes['Cube002'].geometry}
        />
        <mesh
          material={materials.trackpad}
          //@ts-ignore
          geometry={nodes['Cube002_1'].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        //@ts-ignore
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  )
}

const HtmlInNotebook = () => {
  const { word } = useTypingEffect(
    [
      '협업하기 편한',
      '끊임없이 공부하는',
      '조직을 위해 일하는',
      '기술적 호기심이 왕성한',
      '멋쟁이 프론트엔드',
    ],
    130,
    20,
  )

  return (
    <div
      className="h-[432px] w-[668px] origin-top-left scale-50 p-[20px]"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="relative m-auto size-[150px] overflow-hidden rounded-full">
        <Image
          layout="fill"
          className="m-auto"
          objectFit="cover"
          src={'/images/my-head-2.jpg'}
          alt={'상반신'}
        />
      </div>
      <div className="py-5 text-center text-3xl font-semibold">
        <p>안녕하세요!</p>
        <p>
          저는 <span className="text-blue-600">{word}</span>
        </p>
        <p>개발자입니다.</p>
      </div>
      <div className="mt-2 flex justify-center">
        <Button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 50,
              behavior: 'smooth',
            })
          }}
          className="h-[70px] rounded-full px-10 text-3xl "
        >
          About Me !
        </Button>
      </div>
    </div>
  )
}
