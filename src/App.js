
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Column from './BootStrap/Demo/Card';
import Image from './BootStrap/Demo/images';



function App() {
  
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/demo1' Component={Column}></Route>   
          <Route path='/slider' Component={Image}></Route>
          
        </Routes>
      </BrowserRouter>
      {/* <Props2  name="Anjali main"></Props2> */}
    </div>
  );
}

export default App;
