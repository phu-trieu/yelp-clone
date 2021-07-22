import React from 'react'

const HeaderForm = () => {
  return (
    <form action="" className="search-results-form">
      <span className="">
        <span className="d-inline-block fw-bold text-black-50">Find</span>
        <input type="text" name="" id="" className="" placeholder="tacos, cheap dinner, Max's" />
      </span>
      <span>
        <span className="d-inline-block fw-bold text-black-50">Near</span>
        <input type="text" name="" id="" defaultValue="Garden Grove, CA" />
      </span>
      <button type="submit">
        <span className="fas fa-search" />
      </button>
    </form>
  )
}

export default HeaderForm
