import Advantages from '@/modules/home/Advantages'
import MainBanner from '@/modules/home/MainBanner'
import WhatIsGrowa from '@/modules/home/WhatIsGrowa'
import HidrophonicTowerSummary from '@/modules/home/HidrophonicTowerSummary'

export default function Home() {
  return (
      <main className="w-full overflow-x-hidden">
        <MainBanner/>
        <WhatIsGrowa/>
        <Advantages/>
        <HidrophonicTowerSummary/>
        <div className="h-screen"></div>
      </main>
  )
}
