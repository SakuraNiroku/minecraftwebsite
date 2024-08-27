import { createBrowserRouter, NavLink, Route, Routes, RouterProvider } from "react-router-dom"
import ErrorPage from "./ErrorPage"
import NavBar from "./AppBuilder/NavBar"
import About from "./AppBuilder/About"
import Join from './AppBuilder/Join'
import Home from './AppBuilder/Home'

function App() {
    return(<>
        <NavBar></NavBar>
        <img src='background.png' style={{width:'100%',height:'100%',zIndex:-1,position:'fixed',top:0,right:0,filter:'blur(10px)'}}></img>
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/about" element={<About></About>}/>
            <Route path="/join" element={<Join></Join>}/>

            <Route path="*" element={<ErrorPage></ErrorPage>}/>
        </Routes>
    </>)
}

export default App