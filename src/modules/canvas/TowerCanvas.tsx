'use client'
import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
// @ts-ignore
import { TowerModel } from '@/modules/models/Tower'

const TowerCanvas = () => {
  return (
      <div className="w-full h-full">
        <Canvas camera={{ zoom: 15, position: [0, 40, 100] }}>
          <ambientLight intensity={1}/>
          <PresentationControls>
            <group position={[0, -5, 0]}>
              <TowerModel/>
            </group>
          </PresentationControls>
        </Canvas>
      </div>
  )
}

export default TowerCanvas