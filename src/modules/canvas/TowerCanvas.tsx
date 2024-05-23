'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// @ts-ignore
import { TowerModel } from '@/modules/models/Tower'

const TowerCanvas = () => {
  return (
      <div className="w-full h-full">
        <Canvas camera={{zoom: 40, position: [100,0,-400]}}>
          <ambientLight intensity={1}/>
          <TowerModel/>
          <OrbitControls autoRotate/>
        </Canvas>
      </div>
  )
}

export default TowerCanvas