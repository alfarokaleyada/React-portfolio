import React from 'react';
import { Route } from 'react-router-dom';


import './App.css';
import Sitebar from './Components/UI/Sitebar';
import Footer from './Components/UI/Footer';
import Contact from "./Components/Pages/Contact"


function App() {
  return (
    <div>
     <Sitebar>
     <Route path='/Contact' component={Contact} exact/>
     </Sitebar>
     <Footer />
    </div>
  );
}

export default App;

