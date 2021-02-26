import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from '../components/Character';
import Modal from '../components/Modal';
import Search from '../components/Search';

const Home = () => {
  const [ info, setInfo ] = useState({});
  const [ characters, setCharacters ] = useState({});
  const [ isLoading, setIsLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  const [query, setQuery] = useState("");

  

  useEffect( () =>  {
    const fetchResults = async () => {
      const results = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`); 
      setInfo(results.data.info);
      setCharacters(results.data.results);
      setIsLoading(false);
    } 
    fetchResults();
  }, [query])
  console.log(info)
  console.log(characters)  
    
  const nextPageHandler = async () => {       
    const results = await axios.get(info.next); 
    setInfo(results.data.info);
    setCharacters(results.data.results);
    setIsLoading(false); 
  };

  const previousPageHandler = async () => {       
    const results = await axios.get(info.prev); 
    setInfo(results.data.info);
    setCharacters(results.data.results);
    setIsLoading(false); 
  };
  
  
  return (
    <div className="title">
      <h1>Rick and Morty</h1>
      
      <Search getQuery={(q) => setQuery(q)}/>
      
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
            setSelectedImg={setSelectedImg}
          />
        ))}  
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
        )}      
      </div>
      <div className="pagesButtons">
          { info.prev !== null ? <button onClick={previousPageHandler}>Previous Page</button> : '' }
          { info.next !== null ? <button onClick={nextPageHandler}>Next Page</button> : '' }
        </div> 
    </div>
  )
}

export default Home
