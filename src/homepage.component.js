import React from "react";

import "./homepage.styles.scss"; // importing the new saas file

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div class="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div class="menu-item">
        <div className="content">
          <h1 className="title">Jackets</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div class="menu-item">
        <div className="content">
          <h1 className="title">SNEAKER</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div class="menu-item">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div class="menu-item">
        <div className="content">
          <h1 className="title">MEN</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
