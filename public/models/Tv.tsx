/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Tv: THREE.Mesh
    TvStand: THREE.Mesh
  }
  materials: {
    Blackish: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/tv.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Tv.geometry}
        material={materials.Blackish}
        position={[0, 1.94, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.6, 0.02, 0.9]}
      />
      <mesh
        geometry={nodes.TvStand.geometry}
        material={materials.Material}
        position={[0, 0.98, 0.09]}
        scale={[0.77, 0.05, 0.2]}
      />
    </group>
  )
}

useGLTF.preload('/tv.glb')
