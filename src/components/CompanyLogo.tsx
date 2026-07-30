import slake from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocomers from "../assets/woocommerce.png";
import sitepoint from "../assets/sitepoint.png";
import menudies from "../assets/meundies.png";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion";

const CompanyLogo = () => {
  const loops: string[] = [slake, amazon, woocomers, sitepoint, menudies];

  return (
    <motion.div
      className=" w-full container mx-auto py-20 flex sm:px-6 lg:px-8 sm:flex-row flex-col sm:items-center items-start md:mt-20"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="w-75 px-6 shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner <br /> Hubspot segment
      </div>

      <div className="w-full overflow-hidden">
        <div className="animate-marquee mt-6">
          {loops.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              className="mx-12 h-8 object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}

          {/* duplicate logo */}
          {loops.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt=""
              className="mx-12 h-8 object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyLogo;
