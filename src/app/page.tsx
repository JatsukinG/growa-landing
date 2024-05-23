import MainBanner from '@/modules/home/MainBanner'
import WhatIsGrowa from '@/modules/home/WhatIsGrowa'
import Advantages from '@/modules/home/Advantages'
import HidrophonicTowerSummary from '@/modules/home/HidrophonicTowerSummary'

export default function Home() {
  return (
      <main className="w-full">
        <MainBanner/>
        <WhatIsGrowa/>
        <Advantages/>
        <HidrophonicTowerSummary/>
        <div className="h-screen"></div>
      </main>
  )
}
