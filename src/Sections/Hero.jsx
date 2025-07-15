import { PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import CanvasLoader from '../Components/CanvasLoader'
import { useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../Components/Target'
import ReactLogo from '../Components/ReactLogo'
import Cube from '../Components/Cube'
import Rings from '../Components/Rings'
import HeroCamera from '../Components/HeroCamera'
import Button from '../Components/Button'

const Hero = () => {
  const controls = useControls('PC', {positionX:{value:2.5, min: -10, max: 10}, positionY:{value:2.5, min: -10, max: 10}, positionZ:{value:2.5, min: -10, max: 10}, rotationX:{value:2.5, min: -10, max: 10}, rotationY:{value:2.5, min: -10, max: 10}, rotationZ:{value:2.5, min: -10, max: 10}, scale:{value:1, min: 0.1, max: 10}});
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth:768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:tex-3xl text-xl font-medium text-white text-center font-general '>Hi, I am Subodh <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Building Products</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>

                </Suspense>

                <PerspectiveCamera makeDefault position={[0, 0, 20]}/>

                <PC scale={[controls.scale, controls.scale, controls.scale]} position={[controls.positionX, controls.positionY, controls.positionZ]} rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]} />
                
                <HeroCamera isMobile={ isMobile }>
                  <PC>
                    position={sizes.deskPosition}
                    scale={sizes.deskScale}
                    rotation={[0, -Math.PI, 0]}
                  </PC>
                </HeroCamera>

                <group>
                  <Target position={sizes.targetPosition}/>
                  <ReactLogo position={sizes.reactLogoPosition}/>
                  <Cube position={sizes.cubePosition}/>
                  <Rings position={sizes.ringsPosition}/>
                </group>
                <ambientLight intensity={1}/>
                <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Canvas>
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href="#about" className='w-fit'>
              <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
            </a>
        </div>
    </section>
  )
}

export default Hero