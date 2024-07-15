import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
//import './App.css';
import { UidContext } from './components/AppContext';
import axios from 'axios';


const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data)
        })
        .catch((err) => console.log("pas de token"))
    };
    fetchToken();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <div className="App">
        <NavBar> </NavBar>

        <Home />
      </div>
    </UidContext.Provider>
  );
};

export default App;

