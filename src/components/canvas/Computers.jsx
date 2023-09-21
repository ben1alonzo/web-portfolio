import { Suspense, useEffect, useState } from 'react';
import{ Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <ambientLight intensity={7}/>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={10} position={[5, -1.2, 0]}/>
      <pointLight intensity={10} position={[-5, -1.2, 0]}/>
      <primitive object={computer.scene}
      scale={4}
      position={[0, -2.25, 0]}
      rotation={[0.0, -3.15, 0.0]}
      /> 
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={(Math.PI / 2)}
          minPolarAngle={(Math.PI / 2)}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )


}

export default ComputersCanvas