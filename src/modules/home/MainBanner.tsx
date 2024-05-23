import React, { useEffect } from 'react'
import Navbar from '@/components/navbar'
import AnimatedCursor from '@/components/cursor/AnimatedCursor'
import Image from 'next/image'

const MainBanner = () => {
  return (
      <section
          className="h-screen items-center flex flex-col bg-no-repeat bg-fixed bg-top bg-cover"
          style={{ backgroundImage: 'url(/images/bg2.jpg)' }}>
        <Navbar/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="my-auto container relative">
          <div className="grid grid-cols-1 justify-center text-center">
            <div className="flex flex-col items-center">
              <Image
                  src="/images/logo_white.svg"
                  alt="logo"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-96 mb-12"/>
              <p className="text-white text-lg max-w-xl mx-auto">
                La forma mas rapida, ecologica y economica de cultivar desde cualquier lugar!
              </p>
              <div className="mt-8">
                <button className="px-8 py-4 rounded-full bg-white text-green-800 font-bold">
                  Consiguela la tuya
                </button>
              </div>
            </div>
          </div>
        </div>
        <AnimatedCursor/>
      </section>
  )
}

export default MainBanner