import React from 'react';

export default function Newsletter () {
  return (
    <div className="newsletter-container">
      <div className="newsletter-text">

        <h2>Subscribe to our newsletter</h2>
        <h4>
          A short sentence describing what someone will receive by subscribing
        </h4>
      </div>

      <div>
        <form>
          <input
            type="text"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button className="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
