import React from 'react'
import './App.css'
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
function App() {

  // const [count, setCount] = useState ()

  return (
    <div className='flex justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;



