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
          <div className="dropdown">
            <a className="btn d-flex link-light dropdown-toggle" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <span>
                <img src="./img/user_medium_square.png" alt="" />
              </span>
              {/* <span className="banner-sort-down-btn fas fa-sort-down" /> */}
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><button class="dropdown-item" type="button">Action</button></li>
              <li><button class="dropdown-item" type="button">Another action</button></li>
              <li><button class="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </div>
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
          <button type="submit">
            <span className="fas fa-search"/>
          </button>
        </form>
        <ul className="banner-services">
          <li>
            <span className="fas fa-faucet" />
            <a href="#">Plumbers</a>
          </li>
          <li>
            <span className="fas fa-utensils" />
            <a href="#">Restaurants</a>
          </li>
          <li className="d-inline-block">
            <span className="fas fa-home" />
            <div className="banner-services-dropdown dropdown d-inline-block">
              <a href="#" className="dropdown-toggle" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">Home Services</a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a class="dropdown-item" href="#">Air Conditioning & Heating</a></li>
                <li><a class="dropdown-item" href="#">Contractors</a></li>
                <li><a class="dropdown-item" href="#">Electricians</a></li>
                <li><a class="dropdown-item" href="#">Home Cleaners</a></li>
                <li><a class="dropdown-item" href="#">Landscapers</a></li>
                <li><a class="dropdown-item" href="#">Locksmiths</a></li>
                <li><a class="dropdown-item" href="#">Movers</a></li>
                <li><a class="dropdown-item" href="#">Painters</a></li>
                <li><a class="dropdown-item" href="#">Plumbers</a></li>
              </ul>
            </div>
          </li>
          <li>
            <span className="fas fa-motorcycle" />
            <a href="">Delivery</a>
          </li>
          <li>
            <span className="fas fa-building" />
            <div className="banner-services-dropdown dropdown d-inline-block">
              <a href="#" className="dropdown-toggle" role="button" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false">Black Owned</a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                <li><a class="dropdown-item" href="#">Restaurants</a></li>
                <li><a class="dropdown-item" href="#">Hair Salons</a></li>
                <li><a class="dropdown-item" href="#">Nail Salons</a></li>
                <li><a class="dropdown-item" href="#">Barbershops</a></li>
                <li><a class="dropdown-item" href="#">Businesses</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Banner
