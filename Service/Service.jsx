import React, { useEffect, useState } from 'react';

import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <section className="service">
      <div className="container">
        <div>
            <img src="https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635935_IweuYhCqZRtHp3SLguQL8svOVroVXvvZ.jpg" height={50} width={50}/>

        <h1>Customer Support</h1>
        
        <p>Our five star Customer support</p>
        <p>help you solve problems.</p>
        </div>
       
        <div className="service-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRM46hSGYfjCo-BbaqSAu2zHLPJ5vmeD8HLH1kmKR4gWseqkOy__dtR4VCzfn7EPcUze0&usqp=CAU" height={50} width={50}/>
          <h1>One Click Import</h1>
          <p>You can install your demo content</p>
          <p>with one click.</p>
        </div>
        <div className="service-item">
          <img src="https://www.shutterstock.com/image-vector/contract-papers-document-folder-stamp-260nw-1409636174.jpg" height={50} width={50}/>
            

          <h1>Well Documented</h1>
          <p>We created for you useful</p>
          <p>documentation for easy work.</p>
        </div>
        <div className="service-item">
          <img src="https://static.vecteezy.com/system/resources/previews/017/523/330/large_2x/panel-knob-or-lever-controlling-and-turning-on-vector.jpg" height={50} width={50}/>
           
           
          <h1>The Perfect Theme</h1>
          <p>Clean Layouts wih Standard valid</p>
          <p>code and control panel.</p>

        </div>
      </div>
    </section>
  );
};

export default Service;
