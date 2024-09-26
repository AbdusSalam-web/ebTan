import React from "react";
import "./WhyUs.css";
import { card } from "../../data/Data";
const WhyUs = () => {
  return (
    <>
      <section className="whyUs">
        <div className="text">
          <h2>Why choose us</h2>
          <p>
            SLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className="cardArea">
          <div className="card">
            {card.map((item, i) => (
              <div key={i}>
                <div className="icon">{item.icon}</div>
                <div className="text">
                  <h3>{item.paraHead}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
