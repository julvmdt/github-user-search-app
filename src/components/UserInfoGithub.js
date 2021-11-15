import React from "react";
import "./UserInfoGithub.scss";

const UserInfoGithub = ({ userInfo }) => {
  return (
    <div className="user-info-github-container">
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
  );
};

export default UserInfoGithub;
