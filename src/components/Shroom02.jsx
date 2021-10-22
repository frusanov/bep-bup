import { useLoader } from '@react-three/fiber'
import react from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { loadersObserver, uriPrefix } from '../App'

export default function Shroom02(props) {
  const observed = loadersObserver.addLoader('Shroom02')
  const gltf = useLoader(GLTFLoader, uriPrefix + '/models/shroom-2.gltf', null, loadersObserver.watchStatus(observed.id))

  return <primitive object={gltf.scene} {...props} />
}
