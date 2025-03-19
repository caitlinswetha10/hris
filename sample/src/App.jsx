import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Dashboard from './pages/Dashboard'
import {Routes , Route} from "react-router-dom"
import Records from './pages/Records'

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
     <div className='grid-container'>
      {/* <Header OpenSidebar = {OpenSidebar}/> */}
      <Sidebar openSidebarToggle = {openSidebarToggle} OpenSidebar = {OpenSidebar}/>
      <Routes>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      <Route path= "/records" element= {<Records/>}/>
      </Routes>
     </div>
  )
}

export default App
