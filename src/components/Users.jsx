import React, {useState, useEffect} from 'react'
import { getUsers, getApa, hola2 } from "./server";

const axios = require('axios');

const Users = () => {
const [isLoading, setLoading] = useState(true);
const [pokemon, setPokemon] = useState();

const [apa, setApa] = useState([]);

  useEffect(() => {
    
     async function fetchData() {
        try {
          
            const response = hola2()
            const json = await response;
            setApa(json.map((it) => it.name));

        } catch (e) {
            console.error(e);
        }
    };

    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      setPokemon(response.data);
   
      setLoading(false);
    });

    fetchData()
  }, []);


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }


  return (
    <div className="App">
      <ul>
        {pokemon.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>

      <ul>
        {apa.map((person, i) => (
          <li key={i}>{person}</li>
        ))}
      </ul>
    </div>
  );
}


export default Users;

