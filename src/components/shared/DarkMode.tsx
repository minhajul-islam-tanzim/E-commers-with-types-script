import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [active, setActive] = useState<boolean>(
    localStorage.getItem("proparty") === "dark",
  );

  
  useEffect(() => {
    if (active) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("proparty", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("proparty", "light");
    }
  }, [active]);

  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      className="text-2xl cursor-pointer"
    >
      {active ? <MdDarkMode /> : <MdOutlineLightMode />}
    </div>
  );
};

export default DarkMode;
