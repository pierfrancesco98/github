import React from "react";

function Profile({ data }) {
  return (
    <section className="profile">
      <div className="profile-container">

        <div className="avatar">
          <a href={data?.html_url} target="_blank" rel="noreferrer">
            <img src={data?.avatar_url} alt="avatar" />
          </a>
        </div>

        <div className="stats">
          <div className="card">
            <span>Followers</span>
            <span>{data?.followers}</span>
          </div>

          <div className="card">
            <span>Following</span>
            <span>{data?.following}</span>
          </div>

          <div className="card location">
            <span>Location</span>
            <span>{data?.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;