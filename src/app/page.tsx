"use client";
import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import Products from "./components/Products";

function Page() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <main className="flex flex-col h-screen">
      <nav className="py-6 bg-[#eff0fc] px-12 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <img src="https://placeholder.co/100x100" alt="placeholder" />
          </div>

          <div className="flex flex-col">
            <p className="font-bold text-xl">Unilever</p>
            <p>Brand Test</p>
          </div>
        </div>

        <div className="flex gap-5">
          <BiSupport className="text-3xl bg-white rounded-full p-3 h-12 w-12 text-black" />
          <FaBell className="text-3xl bg-white rounded-full p-3 h-12 w-12 text-black" />
        </div>
      </nav>

      <section className="px-12 py-6">
        <div className="my-4 mb-12 flex justify-between">
          <div className="flex gap-5">
            <button
              className={`px-6 py-2 text-xl rounded-3xl  ${
                activeButton === "products"
                  ? "bg-[#7f309b] text-white"
                  : "text-[#7f309b] bg-[#f3ebf5]"
              }`}
              onClick={() => setActiveButton("products")}
            >
              Products - 4
            </button>
            <button
              className={`px-6 py-2 text-xl rounded-3xl  ${
                activeButton === "promotions"
                  ? "bg-[#7f309b] text-white"
                  : " bg-[#f3ebf5] text-[#7f309b]"
              }`}
              onClick={() => setActiveButton("promotions")}
            >
              Promotions - 4
            </button>
            <button
              className={`px-6 py-2 text-xl rounded-3xl text-white ${
                activeButton === "onlinePromotions"
                  ? "bg-[#7f309b] text-white"
                  : "bg-[#f3ebf5] text-[#7f309b]"
              }`}
              onClick={() => setActiveButton("onlinePromotions")}
            >
              Online Promotions - 4
            </button>
          </div>
          <div className="flex gap-4 text-xl">
            <button className="font-bold rounded-xl bg-yellow-300 px-6 py-4">
              New Product +
            </button>
            <button className="font-bold rounded-xl bg-yellow-300 px-6 py-4">
              Create Site +
            </button>
            <button className="font-bold rounded-xl bg-yellow-300 px-6 py-4">
              Bulk Upload +
            </button>
          </div>
        </div>
        <Products />
      </section>
    </main>
  );
}

export default Page;
