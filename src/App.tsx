import Navbar from './components/Navbar/Navbar';
import {GlobalStyles} from './GlobalStyles';
import { Home } from './pages/Home/Home';
import About from './pages/About/About';
import Root from './pages/Root';
import Plan from './pages/Plan/Plan';
import {createBrowserRouter, Route, createRoutesFromElements,RouterProvider} from 'react-router-dom'



function App() {
  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/createplan' element={<Plan/>}/>
      </Route>
    )
  )

  return (
    <>
    <GlobalStyles/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
