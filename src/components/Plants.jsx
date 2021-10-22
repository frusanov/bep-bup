import { useLoader } from '@react-three/fiber'
import react from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { loadersObserver, uriPrefix } from '../App'

export default function Plants(props) {
  const observed = loadersObserver.addLoader('Plants')
  const gltf = useLoader(GLTFLoader, uriPrefix + '/models/plants.gltf', null, loadersObserver.watchStatus(observed.id))

  return <primitive object={gltf.scene} {...props} />
}
