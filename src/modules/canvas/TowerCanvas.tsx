'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// @ts-ignore
import { TowerModel } from '@/modules/models/Tower'

const TowerCanvas = () => {
  return (
      <div className="w-full h-full">
        <Canvas camera={{ fov: 7, position: [-50, 40, -50] }}>
          <ambientLight intensity={2}/>
            <group position={[0, -2, 0]}>
              <TowerModel/>
            </group>
          <OrbitControls autoRotate enableZoom={false}/>
        </Canvas>
      </div>
  )
}

export default TowerCanvas