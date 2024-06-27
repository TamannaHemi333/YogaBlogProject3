import React, { useEffect, useState } from 'react';
import "./Responsive.css";
const Responsive = () => {
  const [responsiveData, setResponsiveData] = useState(null);

  useEffect(() => {
    fetch('/api/responsive')
      .then(response => response.json())
      .then(data => setResponsiveData(data))
      .catch(error => console.error('Error fetching responsiveness data:', error));
  }, []);
  return (
    <section className="responsive">
      <div className="container">
       
       
        
        <div className="responsive-item1">
            <h3>// THEMES RESPONSIVENESS.</h3>
            <h1>Fully Responsive And </h1>
            <h1>Retina Ready.</h1>
            <p>Get an optional viewing experience across all major devices like desktop and mobile. Yog is fully responsive and the images, videos, text will scale down for the smaller devices. </p>
           
          
            
        </div>
        <div className="responsive-item2">
            <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/new-1.png"width={400} height={250}/>
         


        </div>
      </div>
    </section>

   
  )
}

export default Responsive