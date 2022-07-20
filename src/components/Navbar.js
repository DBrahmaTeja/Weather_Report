import React from 'react'
import '../styles/navbar.css'
export default function Navbar({inputvalue,setinputvalue,search}) {
    console.log(inputvalue);
  
    return (
        <div className='header'>
          
            <span>   My_Weather_App </span>

            <input
            type='text'
            placeholder='Enter a City...'
            className='search-bar'
            onChange={(e)=>{
                setinputvalue(e.target.value);
            }}
            onKeyPress={search}
            >
            </input>
        </div>
    )
}
