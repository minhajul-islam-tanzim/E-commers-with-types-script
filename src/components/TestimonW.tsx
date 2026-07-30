import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion";




// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

interface dataShow {
  id: number;
  name: string;
  image: string;
  text: string;
}

const TestimonW = () => {
  const testimonials: dataShow[] = [
    {
      id: 1,
      name: "Rohan",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "Farhana",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sadia apu",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  return (
    <div id="testimonial">
      <motion.section className="py-16 px-4 max-w-7xl mx-auto"
       variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
      
      
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Our Happy Clients review
          </h2>
          <p className="text-gray-600">Best place to start Trading</p>
        </div>

        {/* testimonial cards */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              720: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="h-full py-4 md:py-12"
              >
                <div className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">
                    {testimonial.name}
                  </h3>
                  <div>
                    <div>
                      {[...Array(5)].map((_, starIndex) => (
                        <span className="text-blue-500" key={starIndex}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* navigational buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-transform hover:scale-110 active:scale-90">
              <BsChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-transform hover:scale-110 active:scale-90">
              <BsChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TestimonW;
