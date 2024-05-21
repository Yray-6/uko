"use client"

import React from "react";
import AOS from 'aos';
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        AOS.init({
          duration: 500, // Customize your animation duration or other settings here
        });
      }, []);
  return (
    <div className="relative bg-background  mx-24 px-10 overflow-hidden">
      <img
        src="triangle.png"
        alt=""
        className="w-[150%] absolute left-0 z-10"
      />
      <div className="relative z-20 grid grid-cols-12">
        <div data-aos="fade-right" className="col-span-4 mt-36">
          <p className="text-[14px] font-medium mb-5">
            "Welcome to UKO UNFAMOUS, where style meets comfort. Our mission is
            to provide you with high-quality, fashionable clothing that makes
            you feel confident and at ease, no matter the occasion. Each piece
            is crafted with care, ensuring a perfect blend of the latest trends
            and timeless designs. Join us on a journey of self-expression
            through fashion."
          </p>
          <div className="flex gap-0 justify-end">
            <img src="manf.png" alt="" />
            <img src="manb.png" alt="" />
          </div>
          <div className="flex items-center justify-center gap-4 pb-3">
            <div className="rounded-full border-2 p-1 border-gray-800">
              <img src="arrow left.png" alt="" />
            </div>
            <div className="rounded-full border-2 p-2 border-gray-800">
              <img src="arrow right.png" alt="" />
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="col-span-7 pl-44 pt-5">
            <img src="vector1.png" alt=""/>
            <div className="text-white text-[14px] absolute right-4 w-[260px]">
                <p>
                "Style your life, define your era – where every thread weaves your personal narrative."
                </p>
                <button className="mt-16 bg-background2 text-[20px] font-medium py-3 px-9 rounded-xl">Shop Now <img src="cart.png" alt=""  className="inline"/> </button>
            </div>
        </div>
        
      </div>
      <img data-aos="fade-up" src="mainman.png" alt="" className="absolute bottom-0 left-[33%] z-50 w-[520px]"/>
    </div>
  );
}
