import React from 'react'
import '../styles/report.css'
export default function report({isLoading,data}) {
    if(isLoading)
    {   return(
        <p>Weather Report Is Loading!!</p>
      )
    } 
    
    else if(data)
    return (
        <div className='body'>
            <p className='city'>{data.name}</p>
        
       <p className='Temp'> {Math.floor(`${data.main.temp}`-273)}°C</p>
      <p className='Min_Temp'> Min_Temp: {Math.floor(`${data.main.temp_min}`-273)}°C</p>
      <p className='Max_Temp'> Max_Temp: {Math.floor(`${data.main.temp_max}`-273)}°C</p>
      
        </div>
    )
    else
    return null;
}
