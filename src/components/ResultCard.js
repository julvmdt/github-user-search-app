import moment from "moment";
import React from "react";
import "./ResultCard.scss";
import UserInfo from "./UserInfo";
import UserInfoGithub from "./UserInfoGithub";

const ResultCard = ({ userInfo }) => {
  if (!userInfo) {
    return null;
  }

  const formatDate = (value) => {
    return moment(value).format("DD MMMM YYYY");
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
          <UserInfoGithub userInfo={userInfo} />
          <UserInfo userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
