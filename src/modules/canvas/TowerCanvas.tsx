'use client'
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
// @ts-ignore
import { TowerModel } from '@/modules/models/Tower'

const TowerCanvas = () => {
  return (
      <div className="w-full h-full">
        <Canvas camera={{ fov: 7, position: [-50, 40, -50] }}>
          <ambientLight intensity={2}/>
          <PresentationControls enabled snap>
            <group position={[0, -2, 0]}>
              <TowerModel/>
            </group>
          </PresentationControls>
        </Canvas>
      </div>
  )
}

export default TowerCanvas