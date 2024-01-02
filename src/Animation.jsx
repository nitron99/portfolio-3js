import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
// import { BoxGeometry, IcosahedronGeometry, Vector3 } from 'three';

const Animation = () => {
  const ref = useRef();
  // const mouseRef = useRef();

  useFrame(( { clock } ) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.02;
    // ref.current.rotation.y = clock.getElapsedTime() * ;
    ref.current.rotation.z = clock.getElapsedTime() * 0.07;

  
  });

  useEffect(() => {
    ref.current.position.x = 0;
    ref.current.position.y = 0;
    ref.current.position.z = -10;

  }, []);

  // document.onmousemove = (e) => {
  //   // console.log();
  //   console.log(e.pageY);
  //   let x = (e.pageX * 0.001) * 8;
  //   let y = (e.pageY * 0.001) * 8;

  //   let centerX = window.innerWidth / 2;
  //   let centerY = window.innerHeight / 2;

  //   if(x < centerX) {
  //     x = centerX-x;
  //   } else {
  //     x = +x;
  //   }

    
  //   if(y < centerY) {
  //     y = centerY-y;
  //   } else {
  //     y = +y;
  //   }

  //   mouseRef.current.position.x = -x;
  //   mouseRef.current.position.y = -y;
  //   // console.log(ref.current)
  // }

  // const handleEnter = () => {
  //   console.log(ref.current)
  //   ref.current.material.wireframe = false;
  //   ref.current.geometry = new BoxGeometry(1.2,1.2,1.2);
  // }

  // const handleLeave = () => {
  //   ref.current.material.wireframe = true;
  //   ref.current.geometry = new IcosahedronGeometry();
  // }

  return (
    <>
    <mesh ref={ref}
      // onPointerEnter={handleEnter} 
      // onPointerLeave={handleLeave}
      >
      <ambientLight intensity={0.1} />
      <directionalLight color="#fff" position={[0, 0, 5]} />
      <icosahedronGeometry args={[4, 4, 4]} />
      <meshBasicMaterial wireframe={true} color={"#f1f1f1"} />
    </mesh>
{/* 
    <mesh ref={mouseRef}>
      <ambientLight intensity={0.1} />
      <directionalLight color="#fff" position={[0, 0, 5]} />
      <icosahedronGeometry args={[1, 1, 1]} />
      <meshBasicMaterial wireframe={true} color={"#90E4C1"}/>
    </mesh> */}

    </>
  )
}

export default Animation