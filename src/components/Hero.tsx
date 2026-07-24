
const Hero = () => {
  return (
    <div>
   
    <section className="container mx-auto flex  flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-4">
             {/* left side  */}

             <div className="flex flex-col gap-10 w-full md:w-1/2 ">
             {/* start badge */}

             <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full transition-colors w-fit cursor-pointer group">
              <span className="text-blue-600 group-hover:scale-110 "> ⭐</span>
              <span className="text-sm font-medium ">Jump start your growth</span>
             </div>
             
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight">We boost the growth for <span className="text-blue-600 inline-block relative"> Startup to Fortune 600
               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>

              </span> Companies 
              <span className="animate-pulse">🏅</span>
              </h1>

              <p className="text-gray-600 text-lg md:text-xl max-w-xl">Get the most accurate leads, sales people training and conversions , tools and more - all within the same one billing.</p>

              <div className="flex gap-3 max-w-md">
                <input type="email" id="" placeholder="Email Address"   className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500  focus:ring-2 focus:ring-blue-500"/>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ml-2"> →</button>
              </div>



             </div>



            {/* right side  */}

            <div className="w-full md:w-1/2">right</div>


    </section>


    </div>
  )
}

export default Hero
