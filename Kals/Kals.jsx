
import React, { useEffect, useState } from 'react';

import "./Kals.css";

const Kals = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch('/api/images')
      .then(response => response.json())
      .then(data => setImageUrls(data))
      .catch(error => console.error('Error fetching image URLs:', error));
  }, []);
  return (
    <section className="kals">
      <div className="container">
       
       
        
        <div className="kals-item1">

            <img src="https://images.ctfassets.net/3g7s03pwyjhz/2IzXOYWCE0GGMMMcGaQGUa/417075681409c9f43a359a999498c71b/bigcartel_headerx2.png?q=75&w=998&fm=webp" width={100} height={50}/>
         </div>
        <div className="kals-item2">
            <img src="https://pbs.twimg.com/profile_images/1007257285188603904/qNeazoN9_400x400.jpg" width={100} height={50}/> 
        </div>
        <div className="kals-item3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlIOVJ5BC_iPvD4ab7jHfG0rEk_nySPjXejKTxvjvfA&s" width={100} height={50}/>
        </div>
        <div className="kals-item4">
            <img src="https://elementor.com/wp-content/uploads/2021/10/logo-type-red.svg" width={100} height={50}/>
            <div/>
        </div>
        
        <section/>
  
</div>
    </section>
    
  )
}

export default Kals