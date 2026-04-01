import React from "react";
import Card from './Card';

function RepoList({ data, repos, visibleRepos, showAll, setShowAll }) {
  return (
    <section className="repos">
      <div className="repos-container">
        <h3>{data?.login}</h3>
        <p>{data?.bio}</p>

        <div className="repo-grid">
          <Card visibleRepos={visibleRepos} />
        </div>

        {repos?.length > 4 && (
          <div className="view-all">
            <button onClick={() => setShowAll(prev => !prev)}>
              {showAll ? "Show Less" : "View all repositories"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RepoList;