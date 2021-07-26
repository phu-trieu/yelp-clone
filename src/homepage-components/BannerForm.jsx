import React from 'react';

const BannerForm = ({setView}) => {
  const handleClick = e => {
    e.preventDefault();
    setView(prevView => ({
      ...prevView,
      page: 'SR'
    }));
  }

  return (
    <form action="" className="banner-form">
      <span className="">
        <span className="d-inline-block fw-bold text-black-50">Find</span>
        <input type="text" name="" className="" placeholder="plumbers, delivery, takeout..." />
      </span>
      <span>
        <span className="d-inline-block fw-bold text-black-50">Near</span>
        <input type="text" name="" defaultValue="Garden Grove, CA" />
      </span>
      <button type="submit" onClick={handleClick}>
        <span className="fas fa-search" />
      </button>
    </form>
  )
}

export default BannerForm
