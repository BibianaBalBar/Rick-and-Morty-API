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
  return (
    <div>
      {isLoading ? <p>Loading</p> :  characters.map((char) => (
        <Character 
          name={char.name}
          image={char.image}
          location={char.location.name}
          key={char.id}
        />
      ))}
    </div>
  )
}

export default Home