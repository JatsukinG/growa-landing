import React from 'react'
import Image from 'next/image'

const WhatIsGrowa = () => {
  return (
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="h-full w-full lg:col-span-5 md:col-span-6 bg-bg3">
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="ms-6">
                <p className="text-slate-400 text-lg mb-0">The phrasal sequence of the Lorem Ipsum text is now so
                  widespread and commonplace that many DTP programmes can generate dummy text using the starting
                  sequence Lorem ipsum.</p>

                <h4 className="my-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Food is our
                  common ground, <br/> a universal experience.</h4>

                <p className="text-slate-400">Fortunately, the phrase Lorem Ipsum is now recognized by electronic
                  pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print
                  with overlooked dummy text.</p>

                <div className="mt-6">
                  {/*<Image src="/images/sign.png" width={128} height={32} alt=""/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhatIsGrowa