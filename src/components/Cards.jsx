import { useEffect, useState } from "react";
import { API_URL } from "../config";

function Cards() {
  const [prod, setProd] = useState([]);
  const [currentLang, setCurrentLang] = useState("ka");

  useEffect(() => {
    const fetchProd = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProd(data.cocktails);
    };

    fetchProd();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {prod.map((item) => (
          <div
            className="bg-card backdrop-blur-md rounded-2xl p-5 border border-text/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            key={item.id}
          >
            <div className="w-full h-48 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-main">
              <img
                src={item.image}
                alt=""
                className="w-37.5 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-lg text-text">
              {item.lang[currentLang]?.title}
            </h3>
            <p className="text-sm text-text/70 mt-1">
              {item.lang[currentLang]?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
