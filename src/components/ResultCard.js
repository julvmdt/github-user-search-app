import React from "react";
import "./ResultCard.scss";

const ResultCard = () => {
  return (
    <div className="result-card-container">
      <div className="result-card-content-container">
        <div></div>
        <div>
          <div className="result-card-title-container">
            <h1>The Octocat</h1>
            <span className="result-card-date-title">Joined 25 Jan 2011</span>
          </div>
          <h3 className="result-card-text-alignment">@octocat</h3>
          <p className="result-card-text-alignment">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <div className="result-card-github-info-container">
            <div>
              <h4>Repos</h4>
              <h2>8</h2>
            </div>
            <div>
              <h4>Followers</h4>
              <h2>3000</h2>
            </div>
            <div>
              <h4>Following</h4>
              <h2>9</h2>
            </div>
          </div>
          <div className="result-card-user-info">
            <div className="result-card-user-info-column">
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-location.svg`} />
                </div>
                <div>San Francisco</div>
              </div>
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-company.svg`} />
                </div>
                <div>@github</div>
              </div>
            </div>
            <div className="result-card-user-info-column">
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-twitter.svg`} />
                </div>
                <div>Not Available</div>
              </div>
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-website.svg`} />
                </div>
                <div>https://github.blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
