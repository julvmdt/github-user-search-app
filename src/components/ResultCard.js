import moment from "moment";
import React from "react";
import "./ResultCard.scss";

const ResultCard = ({ userInfo }) => {
  if (!userInfo) {
    return null;
  }

  const formatDate = (value) => {
    return moment(value).format("DD MMMM YYYY");
  };

  const checkIfAvailable = (info) => {
    return info ? info : "Not Available";
  };

  return (
    <div className="result-card-container">
      <div className="result-card-content-container">
        <div className="result-card-avatar">
          <img src={userInfo.avatar_url} />
        </div>
        <div className="result-card-title-header">
          <div className="result-card-title-container">
            <h1 className="result-card-title-h1">
              {userInfo.name ?? userInfo.login}
            </h1>
            <h3 className="primary result-card-text-alignment">
              @{userInfo.login}
            </h3>
          </div>
          <span className="result-card-date-title">
            Joined {formatDate(userInfo.created_at)}
          </span>
        </div>
        <div className="result-card-content">
          <p className="tertiary-dark-mode result-card-text-alignment">
            {userInfo.bio ?? "This profile has no bio"}
          </p>
          <div className="result-card-github-info-container">
            <div>
              <h4>Repos</h4>
              <h2>{userInfo.public_repos}</h2>
            </div>
            <div>
              <h4>Followers</h4>
              <h2>{userInfo.followers}</h2>
            </div>
            <div>
              <h4>Following</h4>
              <h2>{userInfo.following}</h2>
            </div>
          </div>
          <div className="result-card-user-info">
            <div className="result-card-user-info-column">
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-location.svg`} />
                </div>
                <div>{checkIfAvailable(userInfo.location)}</div>
              </div>
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-company.svg`} />
                </div>
                <div>{checkIfAvailable(userInfo.company)}</div>
              </div>
            </div>
            <div className="result-card-user-info-column">
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-twitter.svg`} />
                </div>
                <div>{checkIfAvailable(userInfo.twitter_username)}</div>
              </div>
              <div className="icon-text-container">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/icon-website.svg`} />
                </div>
                <div>{checkIfAvailable(userInfo.blog)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
