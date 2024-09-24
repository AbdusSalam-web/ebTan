import "./Banner.css";
import Button from "../button/button";
import { FaStar } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="bannerImage">
            <img src="/images/bannner_img.png" alt="banner" />
          </div>
          <div className="bannerText">
            <p className="tagLine">Normal to oily skin</p>
            <h1 className="bannerHeading">Men’s Sunscreen hand & body</h1>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div>
              <Button />
            </div>
            <div className="rating">
              <div>
                <FaStar />
                <div>
                  <p> 4.6</p>
                  <p>Rating</p>
                </div>
              </div>
              <div>
                <FaShoppingBag />
                <div>
                  <p> 200+</p>
                  <p>Product solds</p>
                </div>
              </div>
              <div>
                <HiEmojiHappy />
                <div>
                  <p>99+</p>
                  <p>Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
