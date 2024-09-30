import React from "react";
import "./WhyUs.css";
import Icon from "../Common/Icon/Icon";
import { FaStar, FaSyringe } from "react-icons/fa6";
import { SiTicktick  } from "react-icons/si";
const WhyUs = () => {
  return (
    <>
      <section className="whyUs">
        <div className="container">
          <div className="text">
            <h2>
              Why <span>choose</span> us
            </h2>
            <p>
              SLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
          <div className="cardArea">
            <div className="card">
              <div>
                <div className="icon">
                  <Icon icon={<FaStar />} />
                </div>
                <div className="text">
                  <h3>Dermatologist Tested</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
              <div>
                <div className="icon">
                  <Icon icon={<FaSyringe />} />
                </div>
                <div className="text">
                  <h3>Allergy tested</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
              <div>
                <div className="icon">
                  <Icon icon={<SiTicktick />} />
                </div>
                <div className="text">
                  <h3>Non-comedogenic</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
