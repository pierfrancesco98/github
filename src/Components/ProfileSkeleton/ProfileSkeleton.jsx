import React from "react";
import "./ProfileSkeleton.css";

function ProfileSkeleton() {
  return (
    <section className="profile">
      <div className="profile-container">
        <div className="skeleton-avatar avatar"></div>
        <div className="stats">
            
          <div className="skeleton-card card">
            <div className="skeleton-line medium"></div>
            <div className="skeleton-line short"></div>
          </div>

          <div className="skeleton-card card">
            <div className="skeleton-line medium"></div>
            <div className="skeleton-line short"></div>
          </div>

          <div className="skeleton-card card">
            <div className="skeleton-line medium"></div>
            <div className="skeleton-line short"></div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProfileSkeleton;
