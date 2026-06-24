import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { NavLink } from "react-router-dom";

function MenuFilter() {
  // საწყის მნიშვნელობად მივეცით ცარიელი მასივი []
  const [alcoholCategories, setAlcoholCategories] = useState([]);
  const [currentLang, setCurrentLang] = useState("ka");

  useEffect(() => {
    // ასინქრონული ფუნქციის სწორი სინტაქსი
    const fetchMenu = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // ვინახავთ კონკრეტულად ალკოჰოლის კატეგორიებს
        setAlcoholCategories(data.alcohol_categories || []);
      } catch (error) {
        console.error("მონაცემების წამოღებისას დაფიქსირდა შეცდომა:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4">
      {/* სტილისთვის დავამატე Tailwind კლასები */}
      <ul className="flex flex-wrap gap-3 list-none">
        {alcoholCategories.map((item) => (
          <li key={item.id}>
            <NavLink
              // URL-ში გადაეცემა slug (მაგალითად: /cocktails/rum ან /cocktails/classic)
              to={`/Cocktails/${item.slug}`}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border 
                ${
                  isActive
                    ? "bg-[#10b981] text-white border-transparent shadow-md"
                    : "bg-white text-[#1e120c] border-[#1e120c]/10 hover:text-[#84cc16] hover:border-[#84cc16]/30"
                }`
              }
            >
              {/* დინამიურად გამაქვს სახელი მიმდინარე ენის მიხედვით */}
              {item.lang[currentLang]?.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuFilter;
