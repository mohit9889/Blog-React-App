import React from "react";

const Newsletter = () => {
  return (
    <div className="news-letter">
      <p>NEWSLETTER</p>
      <h3>
        Subscribe to our weekly
        <br />
        newsletter
      </h3>
      <div className="input">
        <input type="text" placeholder="EMAIL ADDRESS" />
        <button>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
