import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from '../components/Character'

const Home = () => {
  const [ info, setInfo ] = useState({});
  const [ characters, setCharacters ] = useState({});
  const [ isLoading, setIsLoading] = useState(true);

  useEffect( () =>  {
    const fetchResults = async () => {
      const results = await axios.get('https://rickandmortyapi.com/api/character'); 
      setInfo(results.data.info);
      setCharacters(results.data.results);
      setIsLoading(false);
    } 
    fetchResults();
  }, [])
  console.log(info)
  console.log(characters)  
    
  const onClickNext = async () => {       
    const results = await axios.get(info.next); 
    setInfo(results.data.info);
    setCharacters(results.data.results);
    setIsLoading(false); 
  };

  const onClickPrevious = async () => {       
    const results = await axios.get(info.prev); 
    setInfo(results.data.info);
    setCharacters(results.data.results);
    setIsLoading(false); 
  };
  
  
  return (
    <div className="title">
      <h1>Rick and Morty</h1>
      <div className="cards">        
        {isLoading ? <p>Loading</p> :  characters.map((char) => (
          <Character 
            name={char.name}
            image={char.image}
            location={char.location.name}
            origin={char.origin.name}
            species={char.species}
            status={char.status}
            key={char.id}
          />
        ))}        
      </div>
      <div className="pagesButtons">
          { info.prev !== null ? <button onClick={onClickPrevious}>Previous Page</button> : '' }
          { info.next !== null ? <button onClick={onClickNext}>Next Page</button> : '' }
        </div> 
    </div>
  )
}

export default Home
