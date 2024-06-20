import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CartEmpty = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <button
          type="button"
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110"
        >
          <ArrowLeftIcon className="w-5 h-5 text-slate-900" />

          <span className="">Back To Store</span>
        </button>

        
      </div>
    </>
  );
};

export default CartEmpty;
