import { useState } from 'react';

import Header from './components/Header/Header.jsx';
// import TabButton from './TabButton.jsx';
// import Coreconcept from './components/CoreConcept.jsx';
import im1 from './assets/components.png'
// import {CORE_CONCEPTS } from './data.js'
// import { EXAMPLES  } from './data.js'
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Header/Examples.jsx';



function App() {
  
  return (
    <>
        <Header></Header>
      <main>

        
      <CoreConcepts/>
      <Examples/>
      

    
      </main>


      </>
  );
}



export default App;