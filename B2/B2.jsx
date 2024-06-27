import React, { Fragment, useState } from "react";
import './B2.css';

const B2 = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <Fragment>
      <div className="container56">
        <div className="header">
          <div className="image-and-text">
            <img src="https://adwaityoga.com/wp-content/uploads/2022/08/WYMGGR4.jpg" className="b1" height={300} width={350} alt="Yoga" />
            <div>
              <h1>How to Build Strength with Your Yoga</h1>
              <p>It is a long established fact that a reader will be distracted by the content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        
        <div className="recent-posts">
          <h1>Recent Posts</h1>
          <p>1. How to Build Strength with Your Yoga</p>
          <p>2. Easy full-body yoga workout for men</p>
          <p>3. Condition For All Around Fitness Goal</p>
          <p>4. Best way to stop eating sugar and carbs</p>
          <p>5. Terrific Benefits of a Morning Meditation</p>
        </div>
      </div>
    </Fragment>
  );
}

export default B2;

