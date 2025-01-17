import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import Routers from './Router.jsx';

document.title = 'DemystData | Code-Kata';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
)
