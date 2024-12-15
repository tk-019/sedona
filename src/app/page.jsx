"use client";
import React, { useState } from "react";
import Header from "../components/header";
import ScrollToTopButton from "../components/scrollToTopButton";


function MainComponent() {
  const [testimonials] = useState([
    {
      name: "田中 美咲",
      text: "長年の肩こりが劇的に改善しました。先生の丁寧な施術と的確なアドバイスに感謝しています。",
      rating: 5,
    },
    {
      name: "山本 健一",
      text: "腰痛で動けない状態から、徐々に日常生活が送れるようになりました。本当にありがとうございます。",
      rating: 5,
    },
    {
      name: "鈴木 さくら",
      text: "アットホームな雰囲気で、いつも安心して通えます。施術後は体が軽くなります。",
      rating: 5,
    },
  ]);

  return (
    <div className="w-full min-h-screen bg-white font-noto-sans">
      <Header />
      <ScrollToTopButton />
      <section className="relative h-[600px] bg-gradient-to-r from-[#FFF5F7] to-[#FED7E2]">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#D53F8C] mb-6">
              心安らぐ空間で
              <br />
              健やかな毎日をサポートします
            </h1>
            <p className="text-lg md:text-xl text-[#702459] mb-8">
              あなたの心と体に寄り添い、心地よいケアをお届けします。
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-[#FED7E2] rounded-tl-full"></div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF5F7]" id="treatment-menu">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#D53F8C] mb-12">
          施術メニュー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#D53F8C] mb-4">
                <i className="fas fa-spa text-3xl mr-2"></i>
                脊椎セラピー
              </h3>
              <p className="text-[#4A5568] mb-4">
              温熱指圧で体の歪みを優しく整え、快適な毎日をサポートします。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#D53F8C] mb-4">
                <i className="fas fa-hand-sparkles text-3xl mr-2"></i>
                マッサージ・もみほぐし
              </h3>
              <p className="text-[#4A5568]">
                超短波と低周波で凝りや痛みにダブルのアプローチ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"  id="equipment-introduction">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A365D] mb-12">
          プロ仕様のケアを体感してみませんか？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#F8FAFC] rounded-lg">
              <i className="fas fa-bed text-4xl text-[#3182CE] mb-4"></i>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
              セラゼムマスターV3
              </h3>
              <p className="text-[#4A5568] mb-4">
                国際特許取得の自動スキャニングシステムで、あなたの体に合わせた心地よいケアを提供します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5568]">
                  <i className="fas fa-check text-[#D53F8C] mr-2"></i>
                  快適な自動スキャニング
                </li>
                <li className="flex items-center text-[#4A5568]">
                  <i className="fas fa-check text-[#D53F8C] mr-2"></i>
                  最適な指圧プログラム
                </li>
                <li className="flex items-center text-[#4A5568]">
                  <i className="fas fa-check text-[#D53F8C] mr-2"></i>
                  心地よい温熱ケア
                </li>
              </ul>
              <p className="text-[#4A5568] my-4 text-[#D53F8C]">
                初回お試し（30分） 500円<br />
                回数券 8回分（1回30分） 4,000円
              </p>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-lg">
              <i className="fas fa-sun text-4xl text-[#3182CE] mb-4"></i>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
              ひまわりSun Plus
              </h3>
              <p className="text-[#4A5568] mb-4">
                超短波と低周波で、凝りや痛みに合わせたアプローチを提供します。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5568]">
                  <i className="fas fa-check text-[#D53F8C] mr-2"></i>
                  体内深部から温める超短波治療
                </li>
                <li className="flex items-center text-[#4A5568]">
                  <i className="fas fa-check text-[#D53F8C] mr-2"></i>
                  手足の神経や筋肉に働きかける低周波治療
                </li>
                <li className="flex items-center text-[#4A5568]">
                  <i className="fas fa-check text-[#D53F8C] mr-2"></i>
                  身体をしっかり温め、心と体のバランスケア
                </li>
              </ul>
              <p className="text-[#4A5568] my-4 text-[#D53F8C]">
                初回お試し（30分） 500円<br />
                回数券 8回分（1回30分） 4,000円
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]" id="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A365D] mb-12">
            お客様の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-[#FFB400]"></i>
                  ))}
                </div>
                <p className="text-[#4A5568] mb-4">{testimonial.text}</p>
                <p className="font-bold text-[#1A365D]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF5F7]" id="effect-of-treatment">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#D53F8C] mb-12">
            施術の効果
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <i className="fas fa-heart text-4xl text-[#D53F8C] mb-4"></i>
              <h3 className="text-xl font-bold text-[#D53F8C] mb-2">
                血行促進
              </h3>
              <p className="text-[#4A5568]">
                全身の血行を改善し、新鮮な酸素を届けます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <i className="fas fa-bed text-4xl text-[#D53F8C] mb-4"></i>
              <h3 className="text-xl font-bold text-[#D53F8C] mb-2">
                疲労回復
              </h3>
              <p className="text-[#4A5568]">
                質の良い睡眠をとれるようになります。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <i className="fas fa-walking text-4xl text-[#D53F8C] mb-4"></i>
              <h3 className="text-xl font-bold text-[#D53F8C] mb-2">
                姿勢改善
              </h3>
              <p className="text-[#4A5568]">正しい姿勢をキープできるように。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <i className="fas fa-smile-beam text-4xl text-[#D53F8C] mb-4"></i>
              <h3 className="text-xl font-bold text-[#D53F8C] mb-2">
                ストレス軽減
              </h3>
              <p className="text-[#4A5568]">心身ともにリラックスした状態に。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <i className="fas fa-hand-holding-medical text-4xl text-[#D53F8C] mb-4"></i>
              <h3 className="text-xl font-bold text-[#D53F8C] mb-2">
                神経痛、筋肉痛の緩解
              </h3>
              <p className="text-[#4A5568]">全身をリフレッシュし、元気な体へ。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <i className="fas fa-apple-alt text-4xl text-[#D53F8C] mb-4"></i>
              <h3 className="text-xl font-bold text-[#D53F8C] mb-2">
                胃腸の働きを活発にする
              </h3>
              <p className="text-[#4A5568]">消化をサポートし、体の内側から元気を引き出します。</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1A365D] mb-12">
            アクセスとご案内
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F8FAFC] rounded-lg">
              <i className="fas fa-store text-4xl text-[#3182CE] mb-4"></i>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">店舗情報</h3>
              <p className="text-[#4A5568] mb-4">
              健康の店 セドナ<br />
              AM10:00 - PM04:00<br />
              定休日：土日祝日
              </p>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-lg">
              <i className="fas fa-map-marker-alt text-4xl text-[#3182CE] mb-4"></i>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">所在地</h3>
              <p className="text-[#4A5568] mb-4">
              〒723-0017<br />
              広島県三原市港町1-19-13
              </p>
            </div>

            <div className="p-6 bg-[#F8FAFC] rounded-lg">
              <i className="fas fa-phone-alt text-4xl text-[#3182CE] mb-4"></i>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">電話番号</h3>
              <p className="text-[#4A5568] mb-4">
                0848-63-1483
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;