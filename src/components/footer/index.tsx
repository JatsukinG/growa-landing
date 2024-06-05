import Image from 'next/image'

const Footer = () => {
  return (
      <footer className="bg-white rounded-lg shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image
                  src="/images/isotipo_green.svg"
                  alt="logo"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-8 h-auto"/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Growa</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#main-banner" className="hover:underline me-4 md:me-6">Inicio</a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline me-4 md:me-6">Acerca de nosotros</a>
              </li>
              <li>
                <a href="#advantages" className="hover:underline me-4 md:me-6">Ventajas</a>
              </li>
              <li>
                <a href="#product" className="hover:underline">Producto</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
          <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a
              href="https://flowbite.com/" className="hover:underline">Growa™</a>. All Rights Reserved.</span>
        </div>
      </footer>
  )
}

export default Footer