import React from 'react'

const Character = ({name, image, location}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name}/>
      <p>{location}</p>
    </div>
  )
}

export default Character
