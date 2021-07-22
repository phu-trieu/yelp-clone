import React from 'react';
import SearchFilters from './SearchFilters';
import MoreNearby from './MoreNearby';

const SearchResults = () => {
  return (
    <div>
      <SearchFilters />
      <h6 className="px-5 my-4 fw-bold">All Results</h6>
      <div className="search-results-card ms-5 mb-5">
        <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-wrap="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./img/sabroso1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/sabroso2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/sabroso3.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/sabroso4.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="ms-3">
          <h5 className="fw-bold">1. Sabroso! Mexican Grill</h5>
          <div className="d-inline-block">
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <p className="d-inline-block ms-3">3183</p>
          </div>
          <p className="text-black-50">$$ • Mexican, Breakfast&Brunch, Seafood</p>
          <p className="text-black-50">
            “This place was so good . I had the carne asada plate : the cArne asada had so much flavor juicy with the right ingredients. The owner son was so helpful and…” <a href="">more</a>
          </p>
        </div>
      </div>
      <div className="search-results-card ms-5 mb-5">
        <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-wrap="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./img/mrg1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/mrg2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/mrg3.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/mrg4.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="ms-3">
          <h5 className="fw-bold">2. Mo Ran Gak Restaurant</h5>
          <div className="d-inline-block">
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <p className="d-inline-block ms-3">1667</p>
          </div>
          <p className="text-black-50">$$ • Korean, Barbeque, Soup</p>
          <p className="text-black-50">
            “best korean cold noodle please in southern california too bad they are little far away from our house but when ever we are in anaheim area we stop by for…” <a href="">more</a>
          </p>
        </div>
      </div>
      <div className="search-results-card ms-5 mb-5">
        <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-wrap="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./img/hug1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/hug2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/hug3.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./img/hug4.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="ms-3">
          <h5 className="fw-bold">3. Hug Life Ice Cream</h5>
          <div className="d-inline-block">
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <span className="fas fa-star"></span>
            <p className="d-inline-block ms-3">1179</p>
          </div>
          <p className="text-black-50">$$ • Ice Cream & Frozen Yogurt, Desserts, Bakeries</p>
          <p className="text-black-50">
            “My bestie and I went there Saturday night and it wasn't busy. The girl that helped us out was soo sweet! So helpful. It was our first time There and she…” <a href="">more</a>
          </p>
        </div>
      </div>
      <MoreNearby />
    </div>

  )
}

export default SearchResults
