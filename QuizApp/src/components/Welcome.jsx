import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate("/");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-opacity-75">
      <div className="bg-white p-16 rounded-xl shadow-2xl max-w-2xl w-full mx-4 border-2 border-gray-300 hover:border-gray-500 transition">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Test Kuralları
        </h2>
        <ul className="list-disc list-inside mb-10 text-gray-700 space-y-4">
          <li>Bu test toplam 10 sorudan oluşmaktadır.</li>
          <li>Her soru için 30 saniye süreniz vardır.</li>
          <li>İlk 10 saniye işaretleme yapılamaz.</li>
          <li>
            Soru cevaplanmazsa 30 saniye sonunda ototomatik olarak sonraki
            soruya gecer.
          </li>
          <li>
            Cevaplarınız ileri butonuna tıklamasanız bile süre sonunda otomatik
            kaydedilecektir.
          </li>
        </ul>
        <button
          onClick={() => navigate("/quiz")}
          className="w-full py-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition transform hover:scale-105"
        >
          Teste Başla
        </button>
      </div>
    </div>
  );
};

export default Welcome;
