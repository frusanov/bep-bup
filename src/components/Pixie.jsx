import { useLoader } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { loadersObserver, uriPrefix } from '../App'

export default function Pixie(props) {
  const observed = loadersObserver.addLoader('Pixie')
  const gltf = useLoader(GLTFLoader, uriPrefix + '/models/pixie.gltf', null, loadersObserver.watchStatus(observed.id))

  const [rotata, setRotata] = useState(0)

  useEffect(() => {
    let lastRotata = 0

    const intertval = setInterval(() => {
      lastRotata = lastRotata + 0.01
      setRotata(lastRotata)
    }, 1000 / 60)

    return () => clearInterval(intertval)
  }, [])

  return (
    <mesh rotation={[0, rotata, -0.02]} {...props}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}
