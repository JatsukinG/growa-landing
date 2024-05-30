import Image from 'next/image'
import clsx from 'clsx'
import { FaCarrot, FaClock, FaCompressArrowsAlt, FaLeaf, FaPaintBrush, FaRegSmile } from 'react-icons/fa'

const advantages = [
  {
    icon: FaRegSmile,
    title: 'Fácil de Usar',
    desc: 'No necesitas experiencia previa en jardinería. Nuestro sistema es simple y automatizado.',
  },
  {
    icon: FaCompressArrowsAlt,
    title: 'Ahorro de Espacio',
    desc: 'Diseño vertical compacto, ideal para cualquier hogar, incluso apartamentos pequeños.',
  },
  {
    icon: FaLeaf,
    title: 'Ecológico',
    desc: 'Consume hasta un 90% menos de agua y no requiere pesticidas, promoviendo un cultivo sostenible.',
  },
  {
    icon: FaClock,
    title: 'Producción Rápida',
    desc: 'Las plantas crecen más rápido gracias a la entrega directa de nutrientes.',
  },
  {
    icon: FaPaintBrush,
    title: 'Decorativo',
    desc: 'Diseño elegante que añade un toque moderno y natural a tu hogar.',
  },
  {
    icon: FaCarrot,
    title: 'Alimentos Frescos',
    desc: 'Cultiva tus propias verduras y hierbas frescas en casa, sin químicos.',
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
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              ¿Por Qué Elegir Nuestras Torres Hidropónicas?
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Beneficios que mejoran tu hogar y el medio ambiente
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {advantages.map((item, index) => {
              let Icons = item.icon
              return (
                  <div
                      key={index}
                      className={clsx([
                        'group p-6 rounded-lg shadow bg-white transition-all duration-500 ease-in-out',
                        'hover:-translate-y-2 dark:shadow-gray-800 dark:bg-slate-900',
                      ])}>
                    <div className={clsx([
                      'w-16 h-16 rounded-lg text-2xl flex align-middle justify-center items-center',
                      'text-green-600 bg-green-600/5 shadow-sm border-2 border-green-600/20',
                      'group-hover:text-white group-hover:bg-green-600 dark:shadow-gray-800',
                      'transition-all duration-500 ease-in-out',
                    ])}>
                      <Icons className="w-6 h-6"/>
                    </div>

                    <div className="content mt-7">
                      <p className="title h5 text-lg font-medium hover:text-green-600">{item.title}</p>
                      <p className="text-slate-400 mt-3">{item.desc}</p>
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