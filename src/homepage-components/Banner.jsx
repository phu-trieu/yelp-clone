import React from 'react';
import '../Homepage.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-info-bar">
        <div className="banner-info-user-actions">
          <ul className="banner-info-nav">
            <li><a href="" className="link-light">Write a Review</a></li>
            <li><a href="" className="link-light">Events</a></li>
            <li><a href="" className="link-light">Talk</a></li>
          </ul>
        </div>
        <div className="banner-info-user-data">
          <a href="" className="link-light">
            <span className="banner-info-icon fas fa-comment-alt"></span>
          </a>
          <a href="" className="link-light">
            <span className="banner-info-icon fas fa-bell"></span>
          </a>
          <a href="">
            <a className="d-flex link-light">
              <span>
                <img src="./img/user_medium_square.png" alt="" />
              </span>
              <span className="banner-sort-down-btn fas fa-sort-down" />
            </a>
          </a>
        </div>
      </div>
      <div className="banner-form-container text-center">
        <h1 className="banner-logo">
          <a href=""></a>
        </h1>
        <form action="" className="banner-form">
          <span className="">
            <span className="d-inline-block">Find</span>
            <input type="text" name="" id="" className="" />
          </span>
          <span>
            <span className="d-inline-block">Near</span>
            <input type="text" name="" id="" />
          </span>
        </form>
      </div>
    </div>
  )
}

export default Banner
