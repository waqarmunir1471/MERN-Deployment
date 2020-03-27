import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Router} from '@reach/router';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import DetailPet from './components/DetailPet';
import UpdatePet from './components/UpdatePet';


function App() {
  const [state,setState] = useState()
  return (
    <div className="App">
      <Router>
        <AllPets path="/"/>
        <NewPet path="/pet/new"/>
        <DetailPet path="/details/:id"/>
        <UpdatePet state={state} setState={setState} path="/update/:id"/>
      </Router>
    </div>
  );
}

export default App;
