import React from 'react'
import image2 from '../images/image2.jpg'
import '../styles/background.css'
export default function Background() {
    return (
        <div>
            <img className='background' src= {image2} alt='background'/>
        </div>
    )
}
