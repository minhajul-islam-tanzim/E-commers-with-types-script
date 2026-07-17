import Logo from "../assets/bag.png";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";



const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-yellow-600 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-amber-200/50 ">
        <div className="container flex justify-between items-center ">
          <div >
            <a href="#" className="font-bold text-2xl sm:text-3xl flex items-center 
            ">
              <img className="w-13  sm:text-4x1" src={Logo} alt="" />
              Sh-<span className="text-orange-600">M</span>art
            </a>
          </div>
          {/* search bar */}

          <div className="flex justify-between items-center gap-5">
            <div className="group relative hidden sm:block">
                <input type="text"
                 placeholder="search"
                  className="w-[200px] sm:w-[200px] focus:w-[300px] transition-all duration-300 rounded-full border border-gray-300  px-2 py-1 outline-none focus:border-1 focus:border-orange-400 bg-amber-50
                  " />
            <CiSearch className="absolute text-gray-500 top-1/4 -tranlate-y-1/3 right-3"/>
            </div>
          {/* order-button  */}
            <button className="cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 py-1 px-4  transition-all duration-1000 text-black  rounded-full flex items-center group" onClick={() => {
              alert('this products not available')
            }}>
              <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
">Order</span>
              <FaCartShopping 
              className="text-xl text-white drop-shadow-sm
              cursor-pointer
              "/>
            </button>

            {/* darkmode button  */}
            <div>
              <DarkMode></DarkMode>
            </div>


          </div>


        </div>
      </div>

      {/* lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
