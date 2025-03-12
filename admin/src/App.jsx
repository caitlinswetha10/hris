import { useEffect, useState } from "react"
import Records from "../../sample/src/pages/Records"
import Navbar from "./components/Navbar"
import FormData from "./pages/FormData"
import Login from "./pages/Login"
import {Routes , Route} from "react-router-dom"


export const backendUrl = import.meta.env.VITE_BACKEND_URL



function App() {
  const [token , setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")

  useEffect(()=>{
    localStorage.setItem("token" , token)
  } , [token])
 return(
  <>
  
    {token === "" ?
    <Login setToken= {setToken}/>:
   <>
   <Navbar setToken={setToken}/>
    <Routes>
      
      <Route path={"/"} element = {<FormData/>}/>
    </Routes>
    </>
    }
 
  </>
 )

}

export default App
