import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from "./components/Home/Home";
import Layout from './components/Layout/Layout';
import Hostels from './components/Hostels/Hostels';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/hostels' element={<Hostels/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
