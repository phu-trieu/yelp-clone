import React from 'react'

const SearchFilters = () => {
  return (
    <div className="px-5">
      <div>
        <div className="search-filters-browsing-grid">
          <h4 className="fw-bold">
            Browsing Garden Grove, CA businesses
          </h4>
          <div>
            <span>Sort: </span>
            <div className=" dropdown d-inline-block">
              <a href="#" className="dropdown-toggle text-decoration-none text-dark fw-bold" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                Recommended
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><a className="dropdown-item text-info" href="#">Recommended</a></li>
                <li><a className="dropdown-item" href="#">Highest Rated</a></li>
                <li><a className="dropdown-item" href="#">Most Reviewed</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search-filters-grid">
          <div>
            <p>All</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Open Now</p>
          </div>
          <div>
            <p>Yelp Delivery</p>
          </div>
          <div>
            <p>Yelp Takeout</p>
          </div>
          <div>
            <p>Waitlist</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFilters
