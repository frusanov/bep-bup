import { useLoader } from '@react-three/fiber'
import react from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { loadersObserver, uriPrefix } from '../App'

export default function Shroom04(props) {
  const observed = loadersObserver.addLoader('Shroom04')
  const gltf = useLoader(GLTFLoader, uriPrefix + '/models/shroom-4.gltf', null, loadersObserver.watchStatus(observed.id))

  return <primitive object={gltf.scene} {...props} />
}
