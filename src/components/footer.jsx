"use client";
import React from "react";

function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow"></div>
      <footer className="bg-[#f8f9fa] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-roboto text-xl font-bold mb-4">会社情報</h3>
              <p className="font-roboto">株式会社サンプル</p>
              <p className="font-roboto">〒100-0001</p>
              <p className="font-roboto">東京都千代田区1-1-1</p>
              <p className="font-roboto">TEL: 03-1234-5678</p>
            </div>
            <div>
              <h3 className="font-roboto text-xl font-bold mb-4">営業時間</h3>
              <p className="font-roboto">平日: 9:00 - 18:00</p>
              <p className="font-roboto">土日祝: 休業</p>
            </div>
            <div>
              <h3 className="font-roboto text-xl font-bold mb-4">
                フォローする
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-[#1DA1F2]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-2xl text-[#4267B2]">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-2xl text-[#E4405F]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-2xl text-[#0A66C2]">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-4 border-t border-gray-200">
            <p className="font-roboto text-sm text-gray-600">
              © 2024 株式会社サンプル All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterStory() {
  return (
    <div>
      <Footer />
    </div>
  );
}

export default Footer;