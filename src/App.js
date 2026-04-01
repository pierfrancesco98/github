import React,{useState} from "react";
import useFetch from './Hooks/useFetch';
import Hero from './Components/Hero';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  const [searchUrl, setSearchUrl] = useState(null);
  const [userUrl, setUserUrl] = useState(`https://api.github.com/users/g`);
  const [reposUrl, setReposUrl] = useState(`https://api.github.com/users/g/repos`);


const { data: searchData } = useFetch(searchUrl);
const { data: userData } = useFetch(userUrl);
const { data: reposData, isLoading, isError } = useFetch(reposUrl);


console.log(userData);
console.log(searchData);
  console.log(reposData)
  return (
    <>
     <Hero 
      data={searchData} 
      setSearchUrl={setSearchUrl} 
      setUserUrl={setUserUrl}
      setReposUrl={setReposUrl}
     />
      <Content 
        data={userData} 
        repos={reposData} 
        isLoading={isLoading}
        isError={isError}
      />
     <Footer />
    </>
  );
}

export default App;
