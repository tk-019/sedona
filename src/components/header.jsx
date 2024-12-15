"use client";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FFF0F5] shadow-md relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <i className="fas fa-wind absolute top-4 left-4 text-white opacity-10 text-6xl transform -rotate-45"></i>
        <i className="fas fa-fan absolute top-8 right-8 text-white opacity-10 text-5xl animate-spin"></i>
        <i className="fas fa-spa absolute bottom-4 left-1/4 text-white opacity-10 text-7xl"></i>
        <i className="fas fa-flower absolute top-1/2 right-1/4 text-white opacity-10 text-6xl"></i>
        <i className="fas fa-wind absolute bottom-6 right-6 text-white opacity-10 text-5xl transform rotate-45"></i>
      </div>

      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <div className="text-[#FF69B4] font-crimson-text text-2xl font-bold flex items-center">
            <i className="fas fa-leaf text-[#FF69B4] mr-2"></i>
            健康の店 セドナ
          </div>

          <div className="hidden lg:flex space-x-8 font-crimson-text">
            <a
              href="#treatment-menu"
              className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
            >
              施術メニュー
            </a>
            <a
              href="#equipment-introduction"
              className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
            >
              使用機器のご紹介
            </a>
            <a
              href="#testimonials"
              className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
            >
              お客様の声
            </a>
            <a
              href="#effect-of-treatment"
              className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
            >
              施術の効果
            </a>
            <a
              href="#about"
              className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
            >
              アクセスとご案内
            </a>
          </div>

          <button
            className="lg:hidden text-[#FF69B4]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i
              className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 font-crimson-text bg-[#FFF0F5]">
            <div className="flex flex-col space-y-4">
              <a
                href="#treatment-menu"
                className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
              >
                施術メニュー
              </a>
              <a
                href="#equipment-introduction"
                className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
              >
                使用機器のご紹介
              </a>
              <a
                href="#testimonials"
                className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
              >
                お客様の声
              </a>
              <a
                href="#effect-of-treatment"
                className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
              >
                施術の効果
              </a>
              <a
                href="#about"
                className="text-[#FF69B4] hover:text-[#FF1493] transition duration-300"
              >
                アクセスとご案内
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function HeaderStory() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default Header;