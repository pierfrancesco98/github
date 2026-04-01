import React from 'react'
import nesting from '../resources/Nesting.svg';
import star from '../resources/Star.svg';
import useTimeAgo  from '../Hooks/useTimeAgo';

function Card({visibleRepos}) {

 const { timeAgo } = useTimeAgo();


  return (
    <>
   {
    visibleRepos.map(repo => (
    <a href={repo.clone_url} target='_blank' rel="noreferrer">
<div className="repo-card" key={repo.id}>
    <h3>{repo.full_name}</h3>
    <p>{repo.description}</p>

    <div className="repo-info">
      <span><img src={nesting} alt="..." /> {repo.forks}</span>
      <span><img src={star} alt="..." /> {repo.stargazers_count}</span>
      <span>{timeAgo(repo.updated_at)}</span>
    </div>
  </div>
    </a>
))

   }
    </>
  )
}

export default Card
