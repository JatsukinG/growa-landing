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
          <div className="mt-24 h-[50vh] grid md:grid-cols-3 grid-cols-1">
            <div>
              <h3 className="mb-4 text-3xl font-bold text-green-700">
                Nuestra Torre Hidropónica
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum deserunt iste modi quam quisquam.
              </p>
            </div>
            <div>
              <TowerCanvas/>
            </div>
            <div>
              <p>
                Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                reasonable.

                The generated Lorem Ipsum is therefore always free from repetition injected humour, or
                non-characteristic
                words etc. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                classi
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HidrophonicTowerSummary