// https://twitter.com/marcinignac/status/1288418586709630976

import * as THREE from 'three'
import React, { useState, useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { softShadows, BakeShadows, RoundedBox, Environment, useCursor, ContactShadows } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Text, CameraShake } from '@react-three/drei'
import Shroom01 from './components/Shroom01'
import Pixie from './components/Pixie'
import Shroom02 from './components/Shroom02'
import Shroom03 from './components/Shroom03'
import Plants from './components/Plants'
import Shroom04 from './components/Shroom04'
import Shroom05 from './components/Shroom05'
import LoadersObserver from './utils/LoadersObserver'
import Pixie2 from './components/Pixie2'

export const isProd = process.env.NODE_ENV === 'production'
export const uriPrefix = isProd ? '/bep-bup' : ''
// Soft shadows are expensive, uncomment and refresh when it's too slow
// softShadows()

export const loadersObserver = new LoadersObserver()

function damp(target, to, step, delta, v = new THREE.Vector3()) {
  if (target instanceof THREE.Vector3) {
    target.x = THREE.MathUtils.damp(target.x, to[0], step, delta)
    target.y = THREE.MathUtils.damp(target.y, to[1], step, delta)
    target.z = THREE.MathUtils.damp(target.z, to[2], step, delta)
  }
}

function Plane({ color, ...props }) {
  return (
    <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} {...props}>
      <meshStandardMaterial color={color} envMapIntensity={0.5} />
    </RoundedBox>
  )
}

function Hack() {
  const [zoom, set] = useState(true)

  useFrame((state, delta) => {
    const step = 1
    state.camera.fov = THREE.MathUtils.damp(state.camera.fov, zoom ? 8 : 50, step, delta)

    damp(state.camera.position, [zoom ? 25 : 10, zoom ? 1 : 2, zoom ? 0 : 10], step, delta)

    state.camera.lookAt(0, 2, 0)
    state.camera.updateProjectionMatrix()
  })

  useEffect(() => {
    loadersObserver.setOnLoad(() => {
      setTimeout(() => {
        const $loading = window.document.querySelector('#loading')

        $loading.style.opacity = '0'
        set(false)

        setTimeout(() => {
          $loading.style.display = 'none'
        }, 1000)
      }, 1000)
    })
  })

  return <></>
}

export default function App() {
  return (
    <Canvas shadows camera={{ position: [25, 1, 0], fov: 2 }}>
      <color attach="background" args={['#a2b9e7']} />
      <Hack />
      <directionalLight position={[0, 8, 5]} castShadow intensity={1} shadow-camera-far={70} />
      <Suspense fallback={null}>
        <Shroom01 scale={0.03} position={[1, -2, 3]} castShadow />
        <Plants scale={0.2} position={[-2, -3, 0]} castShadow />
        <Shroom02 scale={0.02} position={[-0.8, -1.5, -0.5]} castShadow />
        <Shroom03 scale={0.02} position={[1, -2, -0.5]} castShadow />
        <Shroom04 scale={0.04} position={[15, -4.2, -3]} castShadow />
        <Shroom05 scale={0.03} position={[0, -3, 0]} castShadow />
        <Pixie scale={0.1} position={[0.05, -1.1, 0]} />
        <Pixie2 scale={20} position={[-60, -180, -40]} rotation={[0, -1.2, 0.25]} />
        <Text
          position={[-21.5, 5, -20]}
          color={'#ff0f0f'}
          fontSize={4}
          maxWidth={20}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'left'}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle">
          ?? ???????? ????????????????! ????????! ????????!
        </Text>
        <group position={[0, -0.9, -3]}>
          <Plane color="#ea5b3f" rotation-x={-Math.PI / 2} position-z={2} scale={[5, 40, 0.2]} />
          <Plane color="#f4ae00" rotation-x={-Math.PI / 2} position={[0, 0, 0]} scale={[4.2, 0.2, 4]} />
        </group>
        <Environment preset="apartment" />
        <BakeShadows />
      </Suspense>
    </Canvas>
  )
}
