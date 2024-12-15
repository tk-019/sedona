"use client";
import React from "react";

function ContactButton({ onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#FF6B6B] hover:bg-[#FF8787] text-white font-bold py-2 px-4 rounded-lg inline-block transition-colors duration-200 font-roboto"
    >
      お問い合わせ
    </button>
  );
}

function ContactButtonStory() {
  return (
    <div className="p-4">
      <ContactButton
        onClick={() => alert("お問い合わせがクリックされました")}
      />
    </div>
  );
}

export default ContactButton;