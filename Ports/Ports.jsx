import React from 'react';
import './Ports.css';

const Ports = () => {
  return (
    <section className="responsive12">
      <div className="container12">
        <div className="responsive-item112">
          <h3>// Our Projects</h3>
          <h1>Latest Portfolio Layouts</h1>
          <p>
            The Yog contains a piece of the top fold of portfolios that clearly and succinctly conveys who you are and what you do. it will contain single portfolio & portfolio Grid with two columns, three-column much more & masonry.
          </p>
        </div>
        <div className="responsive-item212">
          <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/1-1.jpg" width={300} height={180} alt="Portfolio 1" />
          <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/2-1.jpg" width={200} height={90} alt="Portfolio 2" />
        </div>
      </div>
    </section>
  );
}

export default Ports;
