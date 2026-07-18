import Logo from "../assets/bag.png";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";



interface MenuItem {
  id: number;
  name: string;
  link: string
}



 const Menu: MenuItem[] = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'Top Rated',
    link: '/'
  },
  {
    id: 3,
    name: 'Kids Wear',
    link: '/#'
  },
  {
    id: 4,
    name: 'Mans Wear',
    link: '/#'
  },
  {
    id: 5,
    name: 'Electronics',
    link: '/#'
  },
 
 ];

 const dropDownLinks: MenuItem[] = [
    {id:1,
    name:'Tranding Products',
    link: '/#'
  },
    {id:2,
    name:'Best Selling',
    link: '/#'
  },
    {id:3,
    name:'Top Rated',
    link: '/#'
  }
]

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-yellow-800 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="bg-amber-200/50 ">
        <div className="container flex justify-between items-center ">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex items-center 
            "
            >
              <img className="w-13  sm:text-4x1" src={Logo} alt="" />
              Sh-<span className="text-orange-600">M</span>art
            </a>
          </div>
          {/* search bar */}

          <div className="flex justify-between items-center gap-5">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] focus:w-[300px] transition-all duration-300 rounded-full border border-gray-300  px-2 py-1 outline-none focus:border-1 focus:border-orange-400 bg-amber-50
                  "
              />
              <CiSearch className="absolute text-gray-500 top-1/4 -tranlate-y-1/3 right-3" />
            </div>
            {/* order-button  */}
            <button
              className="cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 py-1 px-4  transition-all duration-1000 text-black  rounded-full flex items-center group"
              onClick={() => {
                alert("this products not available");
              }}
            >
              <span
                className="max-w-0 group-hover:max-w-[100px] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
"
              >
                Order
              </span>
              <FaCartShopping
                className="text-xl text-white drop-shadow-sm
              cursor-pointer
              "
              />
            </button>

            {/* darkmode button  */}
            <div>
              <DarkMode></DarkMode>
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar */}


      <div className="sm:flex justify-center p-3 dark:bg-black bg-gray-400 ">
        <ul className="sm:flex  items-center gap-20">
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="hover:text-yellow-500 font-bold transition-all block duration-100 hover:scale-105">{data.name}</a>
              </li>
            ))
          }

          <li className="relative group">
              <a className="hover:text-yellow-500 font-bold transition-all block duration-100 hover:scale-105 flex items-center gap-1" href="">Tranding<FaCaretDown/></a >
              



              {/* dropdoown feture */}


              <div className="absolute hidden group-hover:block bg-white/70 dark:bg-gray-800 shadow-md rounded-md w-60 py-2 z-50 pt-5">
                <ul >
                  {
                    dropDownLinks.map((data) =>
                      <li key={data.id}>
                      <a href={data.link} className="text-black dark:text-white font-bold p-3 inline-block hover:bg-yellow-300 rounded-2xl hover:w-full">{data.name}</a>
                    </li>
                    )
                  }
                </ul>
                  </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
