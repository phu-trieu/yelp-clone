import React from 'react';
import HeaderForm from './HeaderForm';
import '../SearchResults.css';


const Header = ({ setView }) => {
  const handleClick = () => {
    setView('HP');
  }

  return (
    <div>
      <div className="header-grid mt-4">
        <h1 className="search-results-logo text-start" onClick={handleClick}><a href=""></a></h1>
        <HeaderForm />
        <div className="header-businesses-grid">
          <a href="" className="text-decoration-none text-dark fw-bold">For Businesses</a>
          <a href="" className="text-decoration-none text-dark fw-bold">Write a Review</a>
          <span className="banner-info-icon fas fa-comment-alt"></span>
          <span className="banner-info-icon fas fa-bell"></span>
          <span className="banner-info-icon fas fa-user"></span>
        </div>
        <span />
        <ul className="search-results-header-services">
          <li className="d-inline-block">
            <div className=" dropdown d-inline-block">
              <a href="#" className="dropdown-toggle text-decoration-none text-dark" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">Restaurants</a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a className="dropdown-item" href="#">Delivery</a></li>
                <li><a className="dropdown-item" href="#">Reservations</a></li>
                <li><a className="dropdown-item" href="#">Burgers</a></li>
                <li><a className="dropdown-item" href="#">Japanese</a></li>
                <li><a className="dropdown-item" href="#">Chinese</a></li>
                <li><a className="dropdown-item" href="#">Mexican</a></li>
                <li><a className="dropdown-item" href="#">Italian</a></li>
                <li><a className="dropdown-item" href="#">Thai</a></li>
              </ul>
            </div>
          </li>
          <li className="d-inline-block">
            <div className=" dropdown d-inline-block">
              <a href="#" className="dropdown-toggle text-decoration-none text-dark" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">Home Services</a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a className="dropdown-item" href="#">Air Conditioning & Heating</a></li>
                <li><a className="dropdown-item" href="#">Contractors</a></li>
                <li><a className="dropdown-item" href="#">Electricians</a></li>
                <li><a className="dropdown-item" href="#">Home Cleaners</a></li>
                <li><a className="dropdown-item" href="#">Landscapers</a></li>
                <li><a className="dropdown-item" href="#">Locksmiths</a></li>
                <li><a className="dropdown-item" href="#">Movers</a></li>
                <li><a className="dropdown-item" href="#">Painters</a></li>
                <li><a className="dropdown-item" href="#">Plumbers</a></li>
              </ul>
            </div>
          </li>
          <li className="d-inline-block">
            <div className=" dropdown d-inline-block">
              <a href="#" className="dropdown-toggle text-decoration-none text-dark" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">Auto Services</a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a className="dropdown-item" href="#">Air Conditioning & Heating</a></li>
                <li><a className="dropdown-item" href="#">Contractors</a></li>
                <li><a className="dropdown-item" href="#">Electricians</a></li>
                <li><a className="dropdown-item" href="#">Home Cleaners</a></li>
                <li><a className="dropdown-item" href="#">Landscapers</a></li>
                <li><a className="dropdown-item" href="#">Locksmiths</a></li>
                <li><a className="dropdown-item" href="#">Movers</a></li>
                <li><a className="dropdown-item" href="#">Painters</a></li>
                <li><a className="dropdown-item" href="#">Plumbers</a></li>
              </ul>
            </div>
          </li>
          <li className="d-inline-block">
            <div className=" dropdown d-inline-block">
              <a href="#" className="dropdown-toggle text-decoration-none text-dark" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">More</a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a className="dropdown-item" href="#">Air Conditioning & Heating</a></li>
                <li><a className="dropdown-item" href="#">Contractors</a></li>
                <li><a className="dropdown-item" href="#">Electricians</a></li>
                <li><a className="dropdown-item" href="#">Home Cleaners</a></li>
                <li><a className="dropdown-item" href="#">Landscapers</a></li>
                <li><a className="dropdown-item" href="#">Locksmiths</a></li>
                <li><a className="dropdown-item" href="#">Movers</a></li>
                <li><a className="dropdown-item" href="#">Painters</a></li>
                <li><a className="dropdown-item" href="#">Plumbers</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
