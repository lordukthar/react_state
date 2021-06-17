import React, {useState, useEffect} from 'react'
import { hola2 } from "./server";
 import { useQuery } from "react-query";

const axios = require('axios');

function UsersTwo (){

const [apa, setApa] = useState([]);
    const { isLoading, isError, data, error } = useQuery("users", hola2);

    //const json = data;
   console.log(isLoading);

    //setApa(data.map((it) => it.name));



  return (
    <div className="App">
      Test
      <ul>
        {isLoading ? "yes" : data.map((person, i) => <li key={i}>{person.name}</li>)}
      </ul>
    </div>
  );
}


export default UsersTwo;

