import { useLoader } from '@react-three/fiber'
import react from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { loadersObserver, uriPrefix } from '../App'

export default function Shroom05(props) {
  const observed = loadersObserver.addLoader('Shroom05')
  const gltf = useLoader(GLTFLoader, uriPrefix + '/models/shroom-5.gltf', null, loadersObserver.watchStatus(observed.id))

  return <primitive object={gltf.scene} {...props} />
}
