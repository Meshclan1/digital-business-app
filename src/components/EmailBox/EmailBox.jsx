import React from "react";
import "./EmailBox.css";
import { LuMail } from "react-icons/lu";

const EmailBox = () => {
  return (
    <div className="emailBox">
      <div>
        <LuMail size={30} color="grey" />
      </div>
      <input type="email" placeholder="Enter Email" />
      <div className="getFunded">Get Funded</div>
    </div>
  );
};

export default EmailBox;
