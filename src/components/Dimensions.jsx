import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Dimension from './Dimension'

const Dimensions = () => {
    const [location, setLocation] = useState({})
    const [typeId, setTypeId] = useState('')

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/120').then(res => setLocation(res.data))
    }, [])

    //console.log(location)

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${typeId}`).then(res => setLocation(res.data))
    }

    return (
        <div className='general'>
            <p></p>
            <h1>{location.name}</h1>

            <div className='navList'>
                <div className='type'>
                    <h2>Type</h2>
                    <p>{location.type}</p> 
                </div>
                <div className='type'>
                    <h2>Dimension</h2>
                    <p className='dimension'>{location.dimension}</p> 
                </div>
                <div className='type'>
                    <h2>Population</h2>
                    <p className='number'>{location.residents?.length} habitants</p> 
                </div>
            </div>

            <div className='search'>
                <form action='#'>
                    <input className='container' type='number' placeholder='Search by id' value={typeId} onChange={(e) => setTypeId(e.target.value)}/>
                    <button onClick={searchType}><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            

            <div className='people'>
                { location.residents?.map(url => ( <Dimension key={url} url={url}/>)) }
            </div>
            
        </div>
    )
}

export default Dimensions

/**
  <div className='navList'>
                <ul className='theme'>
                    <li>Type</li>
                    <li>Dimension</li>
                    <li>Population</li>
                </ul> 

                <ul className='contentTheme'>
                    <li>{location.type} </li>
                    <li>{location.dimension}</li>
                    <li>{location.residents?.length}</li>
                </ul>

                
            </div>

            <div className='search'>
                <form action='#'>
                    <input type='number' placeholder='search by id' value={typeId} onChange={(e) => setTypeId(e.target.value)}/>
                    <button onClick={searchType}><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
 */