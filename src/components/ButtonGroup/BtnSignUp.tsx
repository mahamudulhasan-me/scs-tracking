import React from "react";
import { AiOutlineLogin } from "react-icons/ai";

const BtnSignUp: React.FC = () => {
  return (
    <button className="signupBtn bg-primary-dark">
      LOGIN
      <span className="arrow">
        <AiOutlineLogin color="#ed502e" size={24} />
      </span>
    </button>
  );
};

export default BtnSignUp;
