import Records from "../../sample/src/pages/Records"
import Navbar from "./components/Navbar"
import FormData from "./pages/FormData"
import Login from "./pages/Login"
import {Routes , Route} from "react-router-dom"


function App() {
 return(
  <>
  
   {/* <Navbar/> */}
    <Routes>
      <Route path={"/login"} element = {<Login/>}/>
      <Route path={"/"} element = {<FormData/>}/>
    </Routes>
 
  </>
 )

}

export default App
