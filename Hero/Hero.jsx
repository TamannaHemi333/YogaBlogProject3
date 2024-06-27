import "./Hero.css";





const Hero = () => {
  return (
    <section className="hero">
      
      <div className="hero-content">
        <h1>Welcome to Our Yoga<br/> Studio & Ayurveda</h1>
        <p>Transform your mind, body, and spirit with our yoga classes.</p>
        <button className="cta-btn">Get Started</button><br/><br/><br/>
        
        
        <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/06/Untitled-4.png" className="hero-image2" height={40} width={200}/>
       
      </div>
      <br/>
      <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/2-1.png" alt="Hero Image" className="hero-image" height={250} width={250}/>
      <img src="https://preview.gentechtreedesign.com/yog/wp-content/uploads/2021/05/4-1.png"className="hero-image1" height={190} width={190} />
     
    </section>
  );
};

export default Hero;

