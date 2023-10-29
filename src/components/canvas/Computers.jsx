import { Suspense, useEffect, useState } from 'react';
import{ Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ( { isMobile} ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <ambientLight intensity={7}/>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={10} position={[5, -1.2, 0]}/>
      <pointLight intensity={10} position={[-5, -1.2, 0]}/>
      <primitive 
        object={computer.scene}
        scale={isMobile ? 2.5 : 2.75}
        position={[0, -1.5, 0]}
        rotation={[0.0, -3.15, 0.0]}
      /> 
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
    ('max-width: 500px'));

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }

  }, [])
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{position: [10, 20, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={(Math.PI / 2)}
          minPolarAngle={(Math.PI / 2)}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas