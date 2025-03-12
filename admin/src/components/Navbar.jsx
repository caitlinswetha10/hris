import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div className='navbar'>
        <h1>Admin Panel</h1>
        <button onClick={()=>setToken("")} className='nav-btn'>Log Out</button>
    </div>
  )
}

export default Navbar