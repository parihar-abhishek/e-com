import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    PhoneNumber: "",
    Address: "",
  });

  const handleChange = (e) => {
    setUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form className="flex flex-col gap-y-2">
        <input
          type="text"
          name="firstName"
          placeholder="enter name"
          className="px-4 py-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="enter lastname"
          className="px-4 py-2"
          onChange={handleChange}
        />
        <input
          type="number"
          name="PhoneNumber"
          placeholder="enter number"
          className="px-4 py-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="Address"
          placeholder="enter address"
          className="px-4 py-2"
          onChange={handleChange}
        />
      </form>
      <Link to="/">
        <button type="button" className="bg-black text-white m-8">
          Go Back
        </button>
      </Link>
      <Link to="/payment">
        <button type="button" className="bg-black text-white">
        payment
        </button>
      </Link>
    </>
  );
};

export default Checkout;
