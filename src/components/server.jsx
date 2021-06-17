const axios = require("axios");

export async function getUsers() {
    axios.get(`https://jsonplaceholder.typicode.com/users`);
    
  /*   const promise = axios.get(`https://jsonplaceholder.typicode.com/users`);

     const dataPromise = promise.then((response) => response.data);

     return dataPromise;*/
}

 
export const hola2 = async () =>  {

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const apa = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  await delay(5000);
  console.log("Waited 5s");

  await delay(5000);
  console.log("Waited an additional 5s");
  const j = await apa.data

  return j;

  /*   const promise = axios.get(`https://jsonplaceholder.typicode.com/users`);

     const dataPromise = promise.then((response) => response.data);

     return dataPromise;*/

    /* {
       j.map((person, i) => {
           userCollection.push(person)
           
       });
     }


    //console.log(userCollection);
    return userCollection;*/
}
