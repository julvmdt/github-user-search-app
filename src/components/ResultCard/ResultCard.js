import moment from "moment";
import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import UserInfoGithub from "./UserInfoGithub/UserInfoGithub";
import "./ResultCard.scss";

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
          <img src={userInfo.avatar_url} data-testid="avatar" />
        </div>
        <div className="result-card-title-header">
          <div className="result-card-title-container">
            <h1 className="result-card-title-h1" data-testid="name">
              {userInfo.name ?? userInfo.login}
            </h1>
            <h3
              className="primary result-card-text-alignment"
              data-testid="login"
            >
              @{userInfo.login}
            </h3>
          </div>
          <span className="result-card-date-title" data-testid="created">
            Joined {formatDate(userInfo.created_at)}
          </span>
        </div>
        <div className="result-card-content">
          <p
            className="tertiary-dark-mode result-card-text-alignment"
            data-testid="bio"
          >
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
