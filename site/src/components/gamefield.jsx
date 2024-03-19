import React, { useRef, useState, useEffect, useCallback, ReactNode} from 'react'
import { Canvas, useFrame, color } from '@react-three/fiber'
import { useFBX } from '@react-three/drei';
import { extend } from '@react-three/fiber'
import { Group, Raycaster, Vector3 } from "three";
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls });




export function Hover(props) {
  const {
    children,
  } = props;

  useEffect(() => {
    // console.log(children.props);
  })
  
  useFrame((state, delta) => {
    //console.log(delta);
    children.props.object.rotation.y += delta*0.3;
  });

  return (
    <group name="hover">  
      {children}
    </group>
  );
}


function Field() {

  const fbx = useFBX('/gamefield.fbx')

  // const Rotate = useCallback(() => {
  //   setRot(rot => {
  //     return rot + 0.0005;
  //   });
  //   requestAnimationFrame(() => {
  //     Rotate();
  //   })
  // })

  // useFrame(() => {
  //     //   setRot(rot => {
  // //     return rot + 0.0005;
  // //   });
  // })

  useEffect(() => {

    // Rotate();

  }, [])


  return (
    // <div className="canvas-container">
      
  
      <Canvas style={{height: "500px"}} camera={{far: 2000}} shadows={true}>
        {/* <ambientLight intensity={Math.PI / 2} /> */}
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} /> */}
        <pointLight position={[0, 200, -10]} decay={0} intensity={1} />
        <color attach="background" args={['#f5efe6']} />
         <Hover>
          <primitive color={"white"} material={null} rotation={[0.4, 0, 0]} position={[0, 0, -900]} object={fbx} />
        </Hover>
      </Canvas>
    // </div>
  )
}

export default Field;