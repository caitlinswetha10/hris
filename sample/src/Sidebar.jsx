import React from 'react'
import { BsListCheck, BsPersonCircle, BsPersonCheckFill, BsGearFill, BsGrid1X2Fill, BsFillArchiveFill } from 'react-icons/bs'
import {Link} from "react-router-dom"
function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsListCheck className='icon_header'/> HRIS
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/dashboard">
                        <BsGrid1X2Fill className='icon'/>DASHBOARD
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/records">
                        <BsFillArchiveFill className='icon'/>RECORDS
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href='http://localhost:5174/' target='_blank_'>
                        <BsPersonCircle className='icon'/>ADMIN LOGIN
                    </a>
                </li>

            </ul>
        </aside>
    )
}

export default Sidebar