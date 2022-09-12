import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Character = ({url}) => {
    const [character, setCharacter] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    let random = 1
    const colors = ['#E53F31', '#819830', '#292A2B']

    useEffect(() => {
        axios.get(url).then(res => setCharacter(res.data)).finally(() => setIsLoading(false))
    }, [])

    console.log(character)
    character.status === 'Dead' ? random = 0 : character.status === 'unknown' ? random = 2 : random = 1
    

    return (
        <div className ='person' style={{border: `solid 2px ${colors[random]}`}}> 
          { isLoading ? (
              <div className='loader-container'>
                <div className='spinner'></div>
              </div>
          ) : (
          <>
            <div className ="cardContainer">
                <div className ="info-container"> 
                  <img src={character.image} alt="photo of character" />
                </div>
            </div>
            <div className="text-container">
              <h3>{character.name} <span style={{color: 'white'}}> | {character.species}</span></h3>
              <div>
                  <p style={{color: colors[random]}}> <span style={{color: 'white'}}>Status Current:</span> {character.status}</p>
                  <p className='origen'>Origen: {character.origin?.name}</p>
                  <p>Episodes: {character.episode?.length}</p>
              </div>
            </div>
          </>
          )}
      </div>
    )
}

export default Character

/*

<div className='person'>
            <ul>
                <li>Name: {character.name}</li>
                <img src={character.image} alt="photo of character" />
                <li>Status: {character.status}</li>
                <li>Origen: {character.origin?.name}</li>
                <li>Episodes: {character.episode?.length}</li>
            </ul>
        </div>
*/