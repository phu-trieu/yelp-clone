import React from 'react';
import SearchFilters from './SearchFilters';
import MoreNearby from './MoreNearby';
import Footer from './Footer';

const SearchResults = ({setView, paddingTop}) => {
  const handleClick = e => {
    const tag = e.currentTarget.dataset.tag
    setView({
      page: 'SD',
      details: tag
    })
  }

  return (
    <section>
      <SearchFilters />
      <h6 className="px-5 py-4 fw-bold">All Results</h6>
      <div className="search-results-card">
        <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-wrap="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/img/sabroso1.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/sabroso2.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/sabroso3.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/sabroso4.jpg`} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="ms-3" onClick={handleClick} data-tag="sabroso">
          <h5 className="fw-bold">1. Sabroso! Mexican Grill</h5>
          <div className="d-inline-block">
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <p className="d-inline-block ms-3 text-black-50">3183</p>
          </div>
          <p className="text-black-50">$$ • Mexican, Breakfast&Brunch, Seafood</p>
          <p className="text-black-50">
            “This place was so good . I had the carne asada plate : the cArne asada had so much flavor juicy with the right ingredients. The owner son was so helpful and…” <a href="">more</a>
          </p>
        </div>
      </div>
      <div className="search-results-card" >
        <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-wrap="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/img/mrg1.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/mrg2.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/mrg3.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/mrg4.jpg`} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="ms-3" onClick={handleClick} data-tag="mrg">
          <h5 className="fw-bold">2. Mo Ran Gak Restaurant</h5>
          <div className="d-inline-block">
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <p className="d-inline-block ms-3 text-black-50">1667</p>
          </div>
          <p className="text-black-50">$$ • Korean, Barbeque, Soup</p>
          <p className="text-black-50">
            “best korean cold noodle please in southern california too bad they are little far away from our house but when ever we are in anaheim area we stop by for…” <a href="">more</a>
          </p>
        </div>
      </div>
      <div className="search-results-card" >
        <div id="carouselExampleControls3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-wrap="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/img/hug1.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/hug2.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/hug3.jpg`} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/img/hug4.jpg`} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="ms-3" onClick={handleClick} data-tag="hug">
          <h5 className="fw-bold">3. Hug Life Ice Cream</h5>
          <div className="d-inline-block">
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <p className="d-inline-block ms-3 text-black-50">1179</p>
          </div>
          <p className="text-black-50">$$ • Ice Cream & Frozen Yogurt, Desserts, Bakeries</p>
          <p className="text-black-50">
            “My bestie and I went there Saturday night and it wasn't busy. The girl that helped us out was soo sweet! So helpful. It was our first time There and she…” <a href="">more</a>
          </p>
        </div>
      </div>
      <MoreNearby />
      <Footer />
    </section>

  )
}

export default SearchResults
