import "./Banner.css";
import Button from "../Common/button/Button";
import { FaStar } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";
import CountUp from "react-countup";
import Tagline from "../Common/tag/Tagline";
const Banner = () => {
  const productSold = (
    <CountUp start={0} end={200} duration={2.75} suffix="+"></CountUp>
  );
  const rating = (
    <CountUp
      start={0.0}
      end={4.6}
      decimals={1}
      duration={2.75}
      separator=", "
    ></CountUp>
  );
  const reviews = (
    <CountUp start={0.0} end={99} duration={2.75} suffix="+"></CountUp>
  );
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="bannerImage">
            <img src="/images/bannner_img.png" alt="banner" />
          </div>
          <div className="bannerText">
            <Tagline />
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
                  <p> {rating}</p>
                  <p>Rating</p>
                </div>
              </div>
              <div>
                <FaShoppingBag />
                <div>
                  <p>{productSold} </p>
                  <p>Product solds</p>
                </div>
              </div>
              <div>
                <HiEmojiHappy />
                <div>
                  <p>{reviews} </p>
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
