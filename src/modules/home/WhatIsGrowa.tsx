import React from 'react'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const WhatIsGrowa = () => {
  return (
      <section id="about-us" className="relative md:py-12 py-8">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="w-full lg:col-span-5 md:col-span-6 px-24 py-8">
              <Image
                  src="/images/htower.png"
                  alt="logo"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-auto rounded-2xl"/>
            </div>
            <div className="lg:col-span-7 md:col-span-6">
              <div className="ms-6">
                <h5 className="text-2xl font-bold">Que es Growa?</h5>
                <p className="mt-4 text-slate-400">
                  Nuestro objetivo en Growa es producir alimentos limpios basados en los principios de sostenibilidad
                  ambiental, optimización, innovación y aprovechamiento del espacio.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:order-1 order-2 lg:col-span-7 md:col-span-6">
              <div className="ms-6">
                <h5 className="text-2xl font-bold">Qué son las Torres Growa?</h5>
                <p className="mt-4 text-slate-400">
                  es un sistema de cultivo doméstico alternativo e innovador que busca concientizar a la gente y brindar
                  alternativas de sostenibilidad
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-green-700"><FaCheckCircle/></span>
                  <p className="text-slate-400 font-bold">Innovación</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-green-700"><FaCheckCircle/></span>
                  <p className="text-slate-400 font-bold">Optimización</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-green-700"><FaCheckCircle/></span>
                  <p className="text-slate-400 font-bold">Reutilización</p>
                </div>
              </div>
            </div>
            <div className="md:order-2 order-1w-full lg:col-span-5 md:col-span-6 px-12 py-8">
              <Image
                  src="/images/htower.jpeg"
                  alt="logo"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-full h-auto rounded-2xl"/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhatIsGrowa