import React from 'react'

const Location = () => {
  return (
    <div>
      <h5 className="fw-bold">Location & Hours</h5>
      <div className="location-hours-container">
        <div className="location-map-width">
          <img src={`${process.env.PUBLIC_URL}/img/google-location.png`} alt="" />
          <div className="mt-3 address-grid">
            <address>
              <a href="" className="text-decoration-none fw-bold">14241 Euclid St</a>
              <p className="fw-bold mb-0">Ste C115</p>
              <p>Garden Grove, CA 92843</p>
            </address>
            <button className="not-write-review-btn"><b>Get Directions</b></button>
          </div>
        </div>
        <div>
          <table className="hours-table mb-3">
            <tbody>
              <tr>
                <th>
                  <b>Mon</b>
                </th>
                <td>
                  <p className="mb-0">12:00 PM - 11:00 PM</p>
                </td>
                <td>
                  <b className="text-success">Open Now</b>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="mb-0">Tue</p>
                </th>
                <td>
                  <p className="mb-0">12:00 PM - 11:00 PM</p>
                </td>
                <td>

                </td>
              </tr>
              <tr>
                <th>
                  <p className="mb-0">Wed</p>
                </th>
                <td>
                  <p className="mb-0">12:00 PM - 11:00 PM</p>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="mb-0">Thu</p>
                </th>
                <td>
                  <p className="mb-0">12:00 PM - 11:00 PM</p>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="mb-0">Fri</p>
                </th>
                <td>
                  <p className="mb-0">12:00 PM - 11:00 PM</p>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="mb-0">Sat</p>
                </th>
                <td>
                  <p className="mb-0">12:00 PM - 11:00 PM</p>
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="mb-0">Sun</p>
                </th>
                <td>
                  <p className="mb-0">12:00 PM - 11:00 PM</p>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <a href="" className="text-decoration-none">
              <span className="fas fa-pencil-alt me-2" />
              <b>Edit business info</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
