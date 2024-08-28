import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const pagesize= 9;
const keys = process.env.REACT_APP_NEWS_API
const router = createBrowserRouter([
  
  {
    path: "/",
    element:  <div>
           
    <Navbar/>
    <div className='container'>
    <div><News key={"Home"} api={keys} pageSize = {pagesize} country = {"in"} category ={"general"} /></div>,
    </div>
  </div>
  },
  {
    path: "/entertainment",
    element: <div>
    <Navbar/>
    <div className='container'>
    <div><News key={"entertainment"} api={keys} pageSize = {pagesize} country = {"in"} category ={"entertainment"} /></div>,
    </div>
  </div>
  },
  {
    path: "/health",
    element:  <div>
           
    <Navbar/>
    <div className='container'>
    <div><News  key={"health"}api={keys} pageSize = {pagesize} country = {"in"} category ={"health"} /></div>,
    </div>
  </div>
  },
  {
    path: "/science",
    element: <div>
    <Navbar/>
    <div className='container'>
    <div><News  key={"science"}api={keys} pageSize = {pagesize} country = {"in"} category ={"science"} /></div>,
    </div>
  </div> 
  },
  {
    path: "/sports",
    element:  <div>
          
    <Navbar/>
    <div className='container'>
    <div><News key={"sports"}api={keys} pageSize = {pagesize} country = {"in"} category ={"sports"} /></div>,
    </div>
  </div>
  },
  {
    path: "/technology",
    element:  <div>
    <Navbar/>
    <div className='container'>
    <div><News  key={"technology"}api={keys} pageSize = {pagesize} country = {"in"} category ={"technology"} /></div>,
    </div>
  </div>
  },
  {
    path: "/business",
    element:  <div>
    <Navbar/>
    <div className='container'>
    <div><News  key={"business"}api={keys} pageSize = {pagesize} country = {"in"} category ={"business"} /></div>,
    </div>
  </div>
  },
]);
const App = ()=> {
 
  
    return (
        <RouterProvider router={router}  />
    )
}
export default App;