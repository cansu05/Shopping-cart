import React from "react";
import "./Content.scss";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="content-item">
          <img
            className="img"
            src="https://images.pexels.com/photos/4021623/pexels-photo-4021623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blueberries"
          />
          <div className="product-info">
            <h2>Yaban Mersini</h2> <br />
            <h4>2Kg</h4> <br />
            <h3>45TL</h3>
          </div>
          <div className="product-count">
            <button className="delete-button">Sil</button>
          </div>
        </div>

        <div className="border-bottom"></div>

        <div className="content-item">
          <img
            className="img"
            src="https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blueberries"
          />
          <div className="product-info">
            <h2>Karpuz</h2> <br />
            <h4>1Kg</h4> <br />
            <h3>69TL</h3>
          </div>
          <div className="product-count">
            <button className="delete-button">Sil</button>
          </div>
        </div>

        <div className="border-bottom"></div>

        <div className="content-item">
          <img
            className="img"
            src="https://images.pexels.com/photos/186841/pexels-photo-186841.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="blueberries"
          />
          <div className="product-info">
            <h2>Misket Limon</h2> <br />
            <h4>1Kg</h4> <br />
            <h3>15TL</h3>
          </div>
          <div className="product-count">
            <button className="delete-button">Sil</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
