import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { NavLink } from "react-router-dom";

function MenuFilter() {
  const [alcoholCategories, setAlcoholCategories] = useState([]);
  const [currentLang, setCurrentLang] = useState("ka");

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      setAlcoholCategories(data.alcohol_categories || []);
    };

    fetchMenu();
  }, []);

  return (
    <ul className="flex flex-wrap gap-3 list-none">
      {alcoholCategories.map((item) => (
        <li key={item.id}>
          <NavLink
            to={`/Cocktails/${item.slug}`}
            className={({ isActive }) =>
              `px-10 py-3 rounded-full text-sm font-medium transition-all duration-200 border 
                ${
                  isActive
                    ? "bg-accent text-white border-transparent shadow-md"
                    : "bg-white text-text border-text/10 hover:text-hover hover:border-hover/30"
                }`
            }
          >
            {item.lang[currentLang]?.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MenuFilter;
