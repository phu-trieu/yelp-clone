import React from 'react'

const Footer = () => {
  return (
    <footer className="px-5 py-3 mt-5">
      <div className="footer-top">
        <div className="about">
          <h5 className="fw-bold">About</h5>
          <ul>
            <li><a href="">About Yelp</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Investor Relations</a></li>
            <li><a href="">Content Guidelines</a></li>
            <li><a href="">Accessibility Statement</a></li>
            <li><a href="">Terms of Service</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Ad Choices</a></li>
          </ul>
        </div>
        <div className="discover">
          <h5 className="fw-bold">Discover</h5>
          <ul>
            <li><a href="">Yelp Project Cost Guides</a></li>
            <li><a href="">Collections</a></li>
            <li><a href="">Talk</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">The Local Yelp</a></li>
            <li><a href="">Yelp Blog</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Yelp Mobile</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">RSS</a></li>
          </ul>
        </div>
        <div className="yelp-for-business">
          <h5 className="fw-bold">Yelp For Business</h5>
          <ul>
            <li><a href="">Claim your Business Page</a></li>
            <li><a href="">Advertise on Yelp</a></li>
            <li><a href="">Yelp for Restaurant Owners</a></li>
            <li><a href="">Table Management</a></li>
            <li><a href="">Business Success Stories</a></li>
            <li><a href="">Business Support</a></li>
            <li><a href="">Yelp Blog for Business</a></li>
          </ul>
        </div>
        <div className="languages">
          <h5 className="fw-bold">Languages</h5>
          <div class="dropdown">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              English
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Spanish</a></li>
              <li><a class="dropdown-item" href="#">French</a></li>
              <li><a class="dropdown-item" href="#">Vietnamese</a></li>
            </ul>
          </div>
        </div>
        <div className="countries">
          <h5 className="fw-bold">Countries</h5>
          <div class="dropdown">
            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              United States
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Spain</a></li>
              <li><a class="dropdown-item" href="#">France</a></li>
              <li><a class="dropdown-item" href="#">Vietnam</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
