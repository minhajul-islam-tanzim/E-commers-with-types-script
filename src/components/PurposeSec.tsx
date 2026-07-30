import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const PurposeSec = () => {
  const features: Feature[] = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3">
          {/* heading text  */}
          <motion.div
            variants={textVariant(0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
          >
            <p className="text-purple-600 font-medium">ACHIVE MODE</p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900 mb-2">
              Purpose of a company is keep your team
            </h2>
          </motion.div>

          {/* bullet points  */}

          <div className="grid col-span-2 md:grid-cols-2 justify-between gap-2">
            {features.map((fea, index) => {
              return (
                 <motion.div
                  key={index}
                  variants={textVariant(index === 0 ? 0.4 : 0.5)} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                  className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex w-12 items-start justify-start text-4xl">
                    {fea.icon}
                  </div>
                  <div className="mt-2">
                    <h2 className="text-xl font-bold">{fea.title}</h2>
                    <p className="text-gray-600">{fea.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PurposeSec;
