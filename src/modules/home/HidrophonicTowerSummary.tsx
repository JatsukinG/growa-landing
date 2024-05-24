import React from 'react'
import TowerCanvas from '@/modules/canvas/TowerCanvas'

const HidrophonicTowerSummary = () => {
  return (
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="flex justify-center">
            <h2 className="text-9xl font-extrabold bg-bg1 bg-cover bg-clip-text text-transparent">
              PRODUCTOS
            </h2>
          </div>
          <div className="mt-24 h-[80vh]">
            <TowerCanvas/>
          </div>
        </div>
      </section>
  )
}

export default HidrophonicTowerSummary