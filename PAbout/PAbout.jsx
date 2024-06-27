import React, { Fragment } from "react";
import './PAbout.css';

const PAbout = () => {
  return (
    <Fragment>
      <div className="about-container">
        <div className="about-image">
          <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/04/4-4-1.jpg" height={300} width={300} alt="Yoga" />
        </div>
        <div className="about-content">
          <h2>// About us</h2>
          <h1>Outstanding Life About <br />Through Yoga</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>2. Maecenas dapibus velit dignissim finibus mollis.</p>
          <p>3. Praesent vel enim ac turpis condimentum vehicula.</p>
          <p>4. Nam sed sem sit amet velit iaculis ultricies.</p>
          <p>5. Maecenas dapibus velit dignissim finibus mollis.</p>
          <button>Read More</button>
        </div>
      </div>
    </Fragment>
  )
}

export default PAbout;

