import React, { Fragment } from 'react';
import './C1AC.css'; // Import the CSS file

const C1AC = () => {
  return (
    <Fragment>
      <div className="c1ac-container">
        <div><h1>All Courses</h1></div>
        <div className="courses-container">
          <div className="course-item">
            <img src="https://t3.ftcdn.net/jpg/05/06/89/50/360_F_506895038_Fl7OM9CqS76lbSN7zTyla9hBb1GV1gXY.jpg" alt="Bikram Yoga" height={200} width={200}/>
            <h3>Bikram Yoga</h3>
            <h1>Art Of Living</h1>
            <p>$59.00 $29.00</p>
          </div>
          <div className="course-item">
            <img src="https://cdn.prod.website-files.com/6103d7500a0d507d3f6f48a7/62df7bc1bfd2931beb7038f2_CorePower%20Yoga%20Case%20Study%20Thumbnail.png" alt="CorePower Yoga" height={200} width={200}/>
            <h3>CorePower Yoga</h3>
            <h1>CorePower Yoga</h1>
            <p>$69.00 $59.00</p>
          </div>
          <div className="course-item">
            <img src="https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1630925412/BW%20BLOG/pranayama-benefits.png" alt="Pranayama" height={200} width={200}/>
            <h3>Pranayama</h3>
            <h1>Yoga Rock Studios</h1>
            <p>$78.00 $58.00</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default C1AC;
