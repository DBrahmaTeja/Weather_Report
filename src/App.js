import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Navbar,Background,Report} from "./components"
import axios from 'axios';
function App() {
  const [inputvalue, setinputvalue] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState(null);
  const API_BASE_URL="https://api.openweathermap.org/data/2.5/weather?q="
  const APPID="&appid=416566bd01371ea788ab7923c2d01e4c"

  let response;
  const fetchurl = async () => {
    //https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=416566bd01371ea788ab7923c2d01e4c
     response= await axios.get(API_BASE_URL+inputvalue+APPID);
     return response;
  }
  
  const search = async (e) => {
    if(e.code==='Enter')
    {
      setisLoading(true);
      console.log(isLoading+'after setting true in search')
     let response1=await fetchurl();
     console.log(response1.data);
     setdata(response1.data);
     setisLoading(false);
     console.log(isLoading+'after setting false in search')
    }
    
  }
 
  
  return (
    <div className="App">
       <Background/>
      <Navbar  search={search} setinputvalue={setinputvalue} inputvalue={inputvalue}/>
      <Report isLoading={isLoading} data={data}/>  
        </div>
  );
}

export default App;
