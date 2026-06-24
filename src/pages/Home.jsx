import { useState } from "react";
import home from "../../public/Layer-1.png";
import MenuFilter from "../components/MenuFilter";

function Home() {
  return (
    <>
      <div className="flex w-375 m-auto pt-16 ">
        <div className=" w-187.5 h-125 flex flex-col items-center justify-center px-10 ">
          <p className="text-5xl font-bold pb-9 text-text leading-tight">
            გახდი საკუთარი ბარის მთავარი
            <span className="text-accent"> მიქსოლოგი</span>
          </p>

          <p>
            ინტერაქციული გაიდები, ზუსტი პროპორციები და საიდუმლო ინგრედიენტები
            იდეალური სასმელების დასამზადებლად.
          </p>
        </div>
        <div className=" w-187.5 flex flex-col justify-center items-center">
          <img src={home} className="w-125" />
        </div>


        
      </div>

      <div className="flex w-300 h-20 items-center justify-center  m-auto mt-20  ">

                <MenuFilter />

        </div>
                
    </>
  );
}

export default Home;
