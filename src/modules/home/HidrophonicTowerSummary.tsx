import clsx from 'clsx'
import TowerCanvas from '@/modules/canvas/TowerCanvas'

const HidrophonicTowerSummary = () => {
  return (
      <section id="product" className="relative py-16 bg-gray-50">
        <div className="container relative">
          <div className="flex flex-col items-center text-center">
            <h2 className={clsx([
              'text-center md:text-6xl sm:text-5xl text-4xl font-extrabold uppercase',
              'bg-bg3 bg-cover bg-clip-text text-transparent animate-background-debounce',
            ])}>
              Nuestra torre hidropónica
            </h2>
          </div>
          <div
              style={{ backgroundImage: 'url(\'/images/icon_light.svg\')' }}
              className="md:mt-12 mt-8 md:h-[80vh] h-[50vh] bg-contain bg-center bg-no-repeat">
            <TowerCanvas/>
          </div>
        </div>
      </section>
  )
}

export default HidrophonicTowerSummary