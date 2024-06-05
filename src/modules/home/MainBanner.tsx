import Image from 'next/image'
import Navbar from '@/components/navbar'

const MainBanner = () => {
  return (
      <section
          id="main-banner"
          className="relative h-screen items-center flex flex-col bg-no-repeat bg-fixed bg-top bg-cover"
          style={{ backgroundImage: 'url(/images/bg2.jpg)' }}>
        <Navbar/>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="my-auto container relative">
          <div className="grid grid-cols-1 justify-center text-center">
            <div className="flex flex-col items-center">
              <Image
                  src="/images/logo_white.svg"
                  alt="logo"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="md:w-96 w-3/4 mb-12"/>
              <p className="text-white text-lg max-w-xl mx-auto">
                La forma mas rapida, ecologica y economica de cultivar desde cualquier lugar!
              </p>
              <div className="mt-8">
                <button className="px-8 py-4 rounded-full bg-white text-green-800 font-bold">
                  Reservar <strong>ahora mismo</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MainBanner