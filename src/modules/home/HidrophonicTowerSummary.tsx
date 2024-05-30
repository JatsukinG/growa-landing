import clsx from 'clsx'
import TowerCanvas from '@/modules/canvas/TowerCanvas'

const HidrophonicTowerSummary = () => {
  return (
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="flex justify-center">
            <h2 className={clsx([
              'text-center md:text-6xl sm:text-5xl text-4xl font-extrabold uppercase',
              'bg-bg3 bg-cover bg-clip-text text-transparent animate-background-debounce',
            ])}>
              Nuestra torre hidropónica
            </h2>
          </div>
          <div className="md:mt-24 mt-8 h-[80vh]">
            <TowerCanvas/>
          </div>
        </div>
      </section>
  )
}

export default HidrophonicTowerSummary