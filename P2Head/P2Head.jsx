import React, { Fragment } from "react";
import './P2Head.css';

const P2Head = () => {
  return (
    <Fragment>
      <div className="portfolio-section">
        <div><h1>All</h1></div>
        <div className="portfolio-row">
          <div className="portfolio-item">
            <img src="https://img.freepik.com/free-photo/young-woman-doing-yoga-exercise-outdoors_1098-1446.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711929600&semt=ais" className="P1" height={200} width={200} />
            <h1>Yoga Inspiration</h1>
          </div>
          <div className="portfolio-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Q4uWePVQtxN7lZiCuBeTitmFUPMhyQhrbQ&s" className="P2" height={200} width={200} />
            <h1>Yoga Meditation</h1>
          </div>
          <div className="portfolio-item">
            <img src="https://www.shutterstock.com/image-photo/young-athletic-woman-sportswear-training-260nw-1820434583.jpg" className="P3" height={200} width={200} />
            <h1>Work Harder</h1>
          </div>
        </div>
        <div className="portfolio-row">
          <div className="portfolio-item">
            <img src="https://thumbs.dreamstime.com/b/healthy-woman-lifestyle-balanced-practicing-meditate-zen-energy-yoga-bridge-morning-mountain-nature-life-concept-130165739.jpg" className="P4" height={200} width={200} />
            <h1>Extra Energy</h1>
          </div>
          <div className="portfolio-item">
            <img src="https://www.shutterstock.com/image-photo/eyes-closed-young-brunette-hispanic-260nw-2275213807.jpg" className="P5" height={200} width={200} />
            <h1>Yoga Positionen</h1>
          </div>
          <div className="portfolio-item">
            <img src="https://t3.ftcdn.net/jpg/05/33/33/96/360_F_533339673_VShNm4XYElYhoeQaw3R0XMcw39F93BGD.jpg" className="P6" height={200} width={200} />
            <h1>Yoga Flow</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default P2Head;
