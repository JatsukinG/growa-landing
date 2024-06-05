'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'

const items = [
  {
    to: '#main-banner',
    name: 'Inicio',
  },
  {
    to: '#about-us',
    name: 'Acerca de nosotros',
  },
  {
    to: '#advantages',
    name: 'Ventajas',
  },
  {
    to: '#product',
    name: 'Producto',
  },
]

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false)
  const location = usePathname()

  useEffect(() => {
    setIsMenu(false)
  }, [location])

  return (
      <nav className="relative w-full z-50">
        <div className="lg:px-24 sm:px-12 px-4 flex items-center justify-between">
          <Link href="#main-banner" className="logo">
            <div className="absolute top-0 bg-white p-4">
              <Image
                  src="/images/isotipo_black.svg"
                  alt="logo"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-32"/>
            </div>
          </Link>

          <span
              onClick={() => setIsMenu(!isMenu)}
              className={clsx([
                'md:hidden block text-3xl',
                'hover:text-green-400 hover:cursor-pointer',
              ])}>
            {isMenu ? <IoClose/> : <BiMenu/>}
          </span>

          <div className={clsx([
            isMenu ? 'block' : 'md:block hidden',
            'md:w-max md:relative absolute top-full left-0 w-full',
          ])}>
            <ul className="flex md:flex-row flex-col items-center">
              {
                items.map(item => (
                    <li
                        key={item.to}
                        className="w-max text-center font-bold text-sm text-white px-6 md:py-8 py-4">
                      <Link href={item.to}>
                        {item.name}
                      </Link>
                    </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar