import React from "react";
import "./UserInfo.scss";

const checkIfAvailable = (info) => {
  return info ? info : "Not Available";
};

const UserInfo = ({ userInfo }) => {
  return (
    <div className="user-info-container">
      <div className="user-info-column">
        <div className="user-info-icon-text-container">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/icon-location.svg`}
              alt={"location"}
            />
          </div>
          <span data-testid="location">
            {checkIfAvailable(userInfo.location)}
          </span>
        </div>
        <div className="user-info-icon-text-container">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/icon-company.svg`}
              alt={"company"}
            />
          </div>
          <span data-testid="company">
            {checkIfAvailable(userInfo.company)}
          </span>
        </div>
      </div>
      <div className="user-info-column">
        <div className="user-info-icon-text-container">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/icon-twitter.svg`}
              alt={"twitter"}
            />
          </div>
          <span data-testid="twitter-username">
            {checkIfAvailable(userInfo.twitter_username)}
          </span>
        </div>
        <div className="user-info-icon-text-container">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/icon-website.svg`}
              alt={"website"}
            />
          </div>
          <span data-testid="blog">{checkIfAvailable(userInfo.blog)}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
