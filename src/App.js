import FullName from "./Profile/FullName";
import Addr from "./Profile/Address";
import ProfilPhoto from './Profile/ProfilPhoto';
import React from 'react';
import './Profile.css'

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <div className="Data">
        <FullName/>
        <Addr/>
      </div>
    </div>
  );
}

export default App;
