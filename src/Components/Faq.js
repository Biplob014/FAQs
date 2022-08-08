import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import style from "./faq.module.css";

const Faq = ({ title, desc }) => {
  const [faqtoggle, setFaq] = useState(false);

  const handleClick = () => {
    setFaq(!faqtoggle);
  };

  return (
    <article className={style.faq}>
      <div>
        <h2>{title}</h2>
        <button onClick={handleClick}>
          {faqtoggle ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {faqtoggle && <p>{desc}</p>}
    </article>
  );
};
export default Faq;
