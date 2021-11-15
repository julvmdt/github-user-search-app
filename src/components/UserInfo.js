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
            <img src={`${process.env.PUBLIC_URL}/icon-location.svg`} />
          </div>
          <span>{checkIfAvailable(userInfo.location)}</span>
        </div>
        <div className="user-info-icon-text-container">
          <div>
            <img src={`${process.env.PUBLIC_URL}/icon-company.svg`} />
          </div>
          <span>{checkIfAvailable(userInfo.company)}</span>
        </div>
      </div>
      <div className="user-info-column">
        <div className="user-info-icon-text-container">
          <div>
            <img src={`${process.env.PUBLIC_URL}/icon-twitter.svg`} />
          </div>
          <span>{checkIfAvailable(userInfo.twitter_username)}</span>
        </div>
        <div className="user-info-icon-text-container">
          <div>
            <img src={`${process.env.PUBLIC_URL}/icon-website.svg`} />
          </div>
          <span>{checkIfAvailable(userInfo.blog)}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
