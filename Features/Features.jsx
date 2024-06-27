import React, { useEffect, useState } from 'react';
import "./Features.css";

const Features = () => {
  const [features1, setFeatures] = useState([]);

  useEffect(() => {
    fetch('/api/features')
      .then(response => response.json())
      .then(data => setFeatures(data))
      .catch(error => console.error('Error fetching features:', error));
  }, []);

  return (
    <section className="features1">
      <div className="text-center89">
        <div>
          <h4 className="custom-heading89">// MODERN BUILT-IN HOMEPAGES</h4>
          <h1 className="bold-text89">Awesome Home Pages</h1>
          <h3>Awesome pre-build demos ready to use.</h3>
        </div>
        <div className="container89">
          <div className="row89">
            <div className="item189">
              <div>
                <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/06/home-1.jpg" height={300} width={400} />
              </div>
              <div>
                <h1>Main Home</h1>
              </div>
            </div>
            <div className="item289">
              <div>
                <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/06/home-3.jpg" height={300} width={400} />
              </div>
              <div>
                <h1>Yoga Classes</h1>
              </div>
            </div>
            <div className="item389">
              <div>
                <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/06/home-2.jpg" height={300} width={400} />
              </div>
              <div>
                <h1>Yoga Studio</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

