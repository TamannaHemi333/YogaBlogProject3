import React, { Fragment } from "react";
import './B3.css';

const B3 = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="image-container">
          <img 
            src="https://st3.depositphotos.com/10439530/13566/i/450/depositphotos_135665730-stock-photo-woman-standing-in-yoga-position.jpg" 
            className="b3" 
            alt="Yoga" 
          />
          <div className="text-overlay">
            <h1>Easy full-body yoga workout for men</h1>
            <p>It is a long established fact that a reader will be distracted by the content of a page when looking at its layout.</p>
          </div>
        </div>

        <div className="image-container">
          <img 
            src="https://media.istockphoto.com/id/1470783559/photo/young-latin-female-practicing-dove-pose-vajra-kapotasana-during-group-class-of-yoga-in-gym.jpg?s=612x612&w=0&k=20&c=UVMN0NaAchrbkgDApsfMImisKpJ92ypBlLGmX28qXXI=" 
            className="b4" 
            alt="Yoga Pose" 
          />
          <div className="text-overlay">
            <h1>Condition For All Around Fitness Goal</h1>
            <p>It is a long established fact that a reader will be distracted by the content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default B3;

