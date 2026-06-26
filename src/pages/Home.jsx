import { useState } from "react";
import MenuFilter from "../components/MenuFilter";
import Cards from "../components/Cards";

function Home() {
  return (
    <>
      <div
       
      >
        <div className="w-375 m-auto flex justify-around  md:flex-row items-center  pt-16 ">
          <div className="w-full md:w-1/2 flex flex-col  text-left">
            <p className="text-4xl md:text-5xl font-black pb-6 text-text leading-tight">
              გახდი საკუთარი ბარის მთავარი
              <span className="text-accent block md:inline"> მიქსოლოგი</span>
            </p>
            <p className="text-black text-base md:text-lg leading-relaxed">
              ინტერაქციული გაიდები, ზუსტი პროპორციები და საიდუმლო ინგრედიენტები
              იდეალური სასმელების დასამზადებლად.
            </p>
          </div>

          <div className=" w-100 flex justify-center items-center ">
            <img
              src="/Layer-1.png"
              className="w-full max-w-md drop-shadow-xl"
              alt="Main Cocktail"
            />
          </div>
        </div>

        <div className="w-full pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className=" flex justify-center  text-4xl font-black mt-20  ">
                აირჩიე სასურველი გემო და ალკოჰოლის ბაზა
              </h2>

              <div
                className=" flex justify-around w-6xl  m-auto my-12
              "
              >
                <MenuFilter />
              </div>

              <div className=" flex flex-wrap justify-between items-center pt-10">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
