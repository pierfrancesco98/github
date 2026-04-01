import React, { useState } from 'react';
import RepoCardSkeleton from './RepoCardSkeleton/RepoCardSkeleton';
import ProfileSkeleton from './ProfileSkeleton/ProfileSkeleton';
import ErrorState from './ErroState/ErrorState';
import Profile from './Profile';
import RepoList from './RepoList';

function Content({ data, repos, isLoading, isError }) {
  const [showAll, setShowAll] = useState(false);

  const visibleRepos = showAll ? repos : (repos || []).slice(0, 4);
  
  if (isLoading) {
    return (
      <>
        <ProfileSkeleton />
       <RepoCardSkeleton count={4} />
      </>
    );
  }

  if (isError) return <ErrorState />;

  return (
      <>
      <Profile data={data} />
      <RepoList
        data={data}
        repos={repos}
        visibleRepos={visibleRepos}
        showAll={showAll}
        setShowAll={setShowAll}
      />
    </>
  );
}

export default Content;
