import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = ({ position, size, color }) => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const Sphere = ({ position, size, color }) => {
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

const MyCanvas = () => {
  return (
    <Canvas>
      <directionalLight intensity={0.5} position={[0, 0, 1]} />
      <ambientLight intensity={0.5} />

      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={'green'} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={'hotpink'} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={'yellow'} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={'blue'} size={[1, 1, 1]} />
      </group> */}

      {/* <Cube position={[0, 0, 0]} color={'orange'} size={[1, 1, 1]} /> */}
      <Sphere />
    </Canvas>
  )
}

export default MyCanvas
