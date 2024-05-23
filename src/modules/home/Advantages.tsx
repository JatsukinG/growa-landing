import { FaArrowRight, FaMendeley } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const advantages = [
  {
    icon: FaMendeley,
    title: 'Digital Marketing',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    icon: FaMendeley,
    title: 'Investing',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    icon: FaMendeley,
    title: 'Mortgage Advisor',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    icon: FaMendeley,
    title: 'Real Estate',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    icon: FaMendeley,
    title: 'Payroll & Accounting',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    icon: FaMendeley,
    title: 'Branch Registration',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
]

const Advantages = () => {
  return (
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="absolute bottom-0 right-0">
          <Image
              src="/plant_botton.png"
              alt="logo"
              sizes="100vw"
              width={0}
              height={0}
              className="h-[100vh] w-auto"/>
        </div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Ventajas</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you
              need to generate awareness, drive traffic, connect.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {advantages.map((item, index) => {
              let Icons = item.icon
              return (
                  <div key={index}
                       className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out">
                    <div
                        className="w-16 h-16 bg-green-600/5 group-hover:bg-green-600 group-hover:text-white border-2 border-green-600/20 text-green-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                      <Icons className="w-6 h-6"/>
                    </div>

                    <div className="content mt-7">
                      <Link href="/page-services"
                            className="title h5 text-lg font-medium hover:text-green-600">{item.title}</Link>
                      <p className="text-slate-400 mt-3">{item.desc}</p>

                      <div className="mt-5">
                        <Link href="#"
                              className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-green-600 hover:text-green-600 after:bg-green-600 duration-500">Read
                          More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                      </div>
                    </div>
                  </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default Advantages