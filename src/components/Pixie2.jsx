import { useLoader } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { loadersObserver, uriPrefix } from '../App'

export default function Pixie2(props) {
  const observed = loadersObserver.addLoader('Pixie2')
  const gltf = useLoader(GLTFLoader, uriPrefix + '/models/pixie.gltf?2', null, loadersObserver.watchStatus(observed.id))

  return (
    <mesh {...props}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}
