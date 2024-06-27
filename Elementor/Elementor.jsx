import React, { useEffect, useState } from 'react';
import './Elementor.css'; // Make sure to import the CSS file

const Elementor = () => {
  const [elementorData, setElementorData] = useState(null);

  useEffect(() => {
    fetch('/api/elementor01')
      .then(response => response.json())
      .then(data => setElementorData(data))
      .catch(error => console.error('Error fetching Elementor data:', error));
  }, []);

  return (
    <section className="elementor01">
      <div className="container01">
        <div className="service-item01">
          <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/06/1-1.png" alt="Elementor Page Builder" height={250} width={400} />
        </div>
        <div className="service-item01">
          <h3>// ELEMENTOR PAGE BUILDER</h3>
          <h1>Drag And Drop Elementor</h1>
          <h1>Page Builder</h1>
          <p>Elementor offers intuitive interface and flexibility. It is one of the most user-friendly page builders for WordPress. Customize your Yog template with ease using a set of additional elements.</p>
          <div><a href="#" className="watch-video-button">Watch Video</a></div>
        </div>
      </div>
    </section>
  );
};

export default Elementor;
