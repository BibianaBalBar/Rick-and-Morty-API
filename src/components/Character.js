import React from 'react'

const Character = ({name, image, location, origin, species, status}) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name}/>
      <h3>Location: {location}</h3>
      <h3>Origin: {origin}</h3>
      <h3>Species: {species}</h3>
      <h3>Status: {status}</h3>
    </div>
  )
}

export default Character
