import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_URL } from "../config";

function Navbar() {
  const [menuItems, setmenuItems] = useState([]);
  const [currentLang, setCurrentLang] = useState("ka");

  useEffect(() => {
    const navbar = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data && data.navbars) {
        setmenuItems(data.navbars);
      }
    };
    navbar();
  }, []);

  return (
    <>
      <div className=" pt-14">
        <div className="w-375 h-20 flex items-center m-auto bg-nav backdrop-blur-md justify-between px-10 rounded-2xl border-b border-white/5 sticky top-0 z-50">
          <div className=" text-2xl text-text font-black tracking-wider uppercase">
            MyOwn
            <span className="text-accent ">Bar</span>
          </div>

          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-6 text-text font-semibold">
              {menuItems?.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `transition-all duration-200 hover:text-hover ${
                        isActive
                          ? "border-b-2 border-accent text-accent pb-1 font-bold"
                          : "opacity-85"
                      }`
                    }
                  >
                    {item.lang?.[currentLang]?.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 border-l border-white/20 pl-6 text-sm font-bold text-text">
              <button
                onClick={() => setCurrentLang("ka")}
                className={`cursor-pointer px-1 transition-all ${
                  currentLang === "ka"
                    ? "text-accent scale-110 border-b border-accent pb-0.5"
                    : "opacity-50 hover:opacity-100 hover:text-hover"
                }`}
              >
                KA
              </button>
              <button
                onClick={() => setCurrentLang("en")}
                className={`cursor-pointer px-1 transition-all ${
                  currentLang === "en"
                    ? "text-accent scale-110 border-b border-accent pb-0.5"
                    : "opacity-50 hover:opacity-100 hover:text-hover"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
