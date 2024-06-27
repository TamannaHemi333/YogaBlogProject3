


import React, { useEffect, useState } from 'react';
import "./Inner.css";

const Inner = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch('/api/images')
      .then(response => response.json())
      .then(data => setImageUrls(data))
      .catch(error => console.error('Error fetching image URLs:', error));
  }, []);
  return (
    <section className="features123">
    <div className="text-center123">
      <div>
      <h4 className="custom-heading123">// Awesome Inner Pages</h4>
      <h1 className="bold-text123">Awesome Inner Pages & Layouts</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour </p>
      
      </div>
 <div className="container673">
<div className="row123">
  <div className="item1673">
    <div>
    <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/5.jpg" width={180} height={300}/>
    </div>
  

  </div>
  <div className=" item2123">
    <div>
    <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/3-1.jpg" width={180} height={300}/>
    </div>
   
  </div>
  <div className=" item3123">
      <div>
      <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/1-3.jpg" width={180} height={300}/>
      </div>
      
  </div>
</div>
</div>

    </div>

  </section>
    
  )
}

export default Inner