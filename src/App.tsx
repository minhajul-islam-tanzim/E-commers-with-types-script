




import CompanyLogo from "./components/CompanyLogo"
import FeaturesSection from "./components/FeaturesSec"
import Hero from "./components/Hero"
import MonitoringSec from "./components/MonitoringSec"
import Navbar from "./components/Navbar"
import PricSec from "./components/PricSec"
import PurposeSec from "./components/PurposeSec"
import ScadSec from "./components/ScadSec"



const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden ">
       <div className="absolute -top-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[81px] -z-10">
      </div>

      <div className="overflow-hidden">

        <Navbar />
        <Hero></Hero>
        <CompanyLogo />
        <PurposeSec />
        <FeaturesSection />
        <ScadSec />
        <MonitoringSec />
        <PricSec />

       </div>
    </div>
  )
}

export default App
