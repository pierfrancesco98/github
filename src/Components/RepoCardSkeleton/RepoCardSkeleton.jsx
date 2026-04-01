import React from "react";
import "./RepoCardSkeleton.css";

function RepoCardSkeleton({ count = 4 }) {
  return (
    <>
        <section className="repos">
      <div className="repos-container">

        <div className="repo-grid">
          {Array.from({ length: count }).map((_, index) => (
            <div className="repo-card repo-skeleton-card" key={index}>
              <div className="skeleton-line title"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
              <div className="repo-info">
                <div className="skeleton-line small"></div>
                <div className="skeleton-line small"></div>
                <div className="skeleton-line small"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}

export default RepoCardSkeleton;
