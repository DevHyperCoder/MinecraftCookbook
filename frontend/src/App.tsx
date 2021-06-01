import React, {useEffect, useState} from 'react';
import {getMainData} from './api/main';

function App() {
    const [apiResponse,setApiResponse] = useState("");

    useEffect(()=>{
         (async () =>{
             setApiResponse((await getMainData()).msg)
        })()

    },[]);


  return (
      <main>
          <p>{apiResponse}</p>
      </main>
  );
}

export default App;
