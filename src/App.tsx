




import CompanyLogo from "./components/CompanyLogo"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden ">
       <div className="absolute -top-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[81px] -z-10">
      </div>

      <div className="overflow-hidden">

        <Navbar />
        <Hero></Hero>
        <CompanyLogo />

        
       </div>
    </div>
  )
}

export default App
