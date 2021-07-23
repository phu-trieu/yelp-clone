import React, { useEffect } from 'react';
import HeaderForm from './HeaderForm';


const Header = ({ setView, setPaddingTop }) => {
  const handleClick = () => {
    setView(prevView => ({
      ...prevView,
      page: 'HP'
    }));
  }

  const resizeHeader = () => {
    const header = document.getElementsByTagName('header')[0];
    const height = header.clientHeight;
    setPaddingTop(height)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHeader);

    return () => window.removeEventListener('resize', resizeHeader);
  });

  return (
    <header>
      <div className="header-grid pt-4 px-5">
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
                <li><a className="dropdown-item" href="#">Auto Repair</a></li>
                <li><a className="dropdown-item" href="#">Car Dealers</a></li>
                <li><a className="dropdown-item" href="#">Auto Detailing</a></li>
                <li><a className="dropdown-item" href="#">Oil Change</a></li>
                <li><a className="dropdown-item" href="#">Body Shops</a></li>
                <li><a className="dropdown-item" href="#">Parking</a></li>
                <li><a className="dropdown-item" href="#">Car Wash</a></li>
                <li><a className="dropdown-item" href="#">Towing</a></li>
              </ul>
            </div>
          </li>
          <li className="d-inline-block">
            <div className=" dropdown d-inline-block">
              <a href="#" className="dropdown-toggle text-decoration-none text-dark" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">More</a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a className="dropdown-item" href="#">Dry Cleaning</a></li>
                <li><a className="dropdown-item" href="#">Hair Salons</a></li>
                <li><a className="dropdown-item" href="#">Phone Repair</a></li>
                <li><a className="dropdown-item" href="#">Gyms</a></li>
                <li><a className="dropdown-item" href="#">Bars</a></li>
                <li><a className="dropdown-item" href="#">Massage</a></li>
                <li><a className="dropdown-item" href="#">Nightlife</a></li>
                <li><a className="dropdown-item" href="#">Shopping</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
