import Navbar from './components/Navbar/Navbar';
import {GlobalStyles} from './GlobalStyles';
import { Home } from './pages/Home/Home';
import {createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'

function App() {
  

  return (
    <>
    <GlobalStyles/>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
