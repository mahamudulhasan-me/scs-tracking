import React from "react";
import { AiOutlineLogin } from "react-icons/ai";

const BtnSignUp: React.FC = () => {
  return (
    <button className="signupBtn bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg">
      LOGIN
      <span className="arrow">
        <AiOutlineLogin color="#ed502e" size={24} />
      </span>
    </button>
  );
};

export default BtnSignUp;
