import React, { useState } from 'react';
import icon from '../resources/Search.svg';

function Hero({data, setSearchUrl,  setUserUrl, setReposUrl }) {
const [query, setQuery] = useState('');
const showDropdown = query.length > 0 && data?.items?.length > 0;


const handleSearch = (e) => {
 e.preventDefault();
console.log(query);
setSearchUrl(`https://api.github.com/search/users?q=${query}`);
};

const handleChangeUrl = (e) => {
  const username = e.currentTarget.dataset.target;
  console.log(username);
  setUserUrl(`https://api.github.com/users/${username}`);
  setReposUrl(`https://api.github.com/users/${username}/repos`);
  setQuery('');
};



  return (
    <header>
        <div className="dropdown-form">
 <form onSubmit={handleSearch}>
        <i><img src={icon} alt="icon-search" /></i>
        <input type="text" placeholder='username'  onChange={(e) => setQuery(e.target.value)}/>
      </form>
       <div className={`content-form ${showDropdown ? 'active' : ''}`}>
        {
    data?.items?.map(user => (
    <div className="flex" key={user.id} data-target={user.login} onClick={handleChangeUrl}>
    <img src={user.avatar_url} alt={user.login} />
    <div className="form-user-details">
    <h3>{user.login}</h3>
    </div>
    </div>
))
        }
        </div>
        </div>
    </header>
  )
};

export default Hero;
