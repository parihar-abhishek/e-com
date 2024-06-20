import React, { useState } from "react";
import Cart from "./Cart";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Items = () => {
  const [open, setOpen] = useState(false);

  const toggleCart = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggleCart} type="button" className=" text-white p-2 absolute right-2  z-[50] ">
        {open ? (
          <XMarkIcon className="w-5 h-5 text-white" />
        ) : (
          <span className="text-black">Open Cart</span>
        )}
      </button>
      {open && <Cart />}
    </div>
  );
};

export default Items;
