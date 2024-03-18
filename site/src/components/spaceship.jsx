import React, { useRef, useState, useEffect, useCallback} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useFBX } from '@react-three/drei';
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls })


function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


function MyThree() {

  const fbx = useFBX('/ussDawsonAdvanced.fbx')
  const [rot, setRot] = useState(0);

  const Rotate = useCallback(() => {
    setRot(rot => {
      return rot + 0.0005;
    })
    requestAnimationFrame(() => {
      Rotate();
    })
  })

  useEffect(() => {

    Rotate();

  }, [])


  return (
    <div className="canvas-container">
      <Canvas camera={{far: 2000}} shadows={true} >

        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      
        <primitive rotation={[0.6, rot, 0]} position={[0, 25, -500]} object={fbx} />
        <meshStandardMaterial wireframe={true} />

      </Canvas>
    </div>
  )
}

export default MyThree