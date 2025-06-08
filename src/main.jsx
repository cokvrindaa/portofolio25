import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from '../src/Components/Pages/MainPage.jsx'

import NavBar from '../src/Components/Fragment/NavBar.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar></NavBar>
    <MainPage ></MainPage>
  </StrictMode>
)
