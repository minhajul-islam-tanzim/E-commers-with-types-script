import slake from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocomers from "../assets/woocommerce.png"
import sitepoint from "../assets/sitepoint.png"
import menudies from "../assets/meundies.png"

const CompanyLogo = () => {
  const loops: string[] = [slake, amazon, woocomers, sitepoint, menudies];

  return (
    <div className="w-full container mx-auto py-20 flex sm:px-6 lg:px-8 sm:flex-row flex-col sm:items-center items-start">
      <div className="w-[300px] px-6 shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left ">
        Proud partner <br /> Hubspot segment
      </div>

      <div className="w-full overflow-hidden ">
        {/* এখানে 'flex' আর 'whitespace-nowrap' লাগবে না, শুধু 'animate-marquee' */}
        <div className="animate-marquee mt-6">
          {loops.map((logo, index) => {
            return <img key={index} src={logo} alt="" className="mx-12  h-8 object-contain opacity-70 grayscale hover:grayscale-0 transition-all  duration-300" />
          })}

          {/* duplicate logo */}
          {loops.map((logo, index) => {
            return <img key={`duplicate-${index}`} src={logo} alt="" className="mx-12 h-8 object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300" />
          })}
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo