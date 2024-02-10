import React, { useEffect, useState } from 'react'
import {BsCart3, BsMoonFill, BsSunFill} from 'react-icons/bs'
import {FaBarsStaggered} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import Logo from "../assets/muround-logo-app.svg"


const themes = {
    winter: 'bumblebee',
    dracula: 'dracula'
}


const getThemeFromLocalStorage = ()=> {
    return localStorage.getItem('theme') || themes.bumblebee
}

const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());

    const handleTheme = ()=> {
        const {winter, dracula} = themes;
        const newTheme = theme === winter ? dracula: winter;
        setTheme(newTheme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }, [theme]);


      
  return (
    <nav className='bg-base-200'>
        <div className='navbar align-element'>
            <div className='navbar-start'>
                {/* Title */}
                <NavLink to='/' className="hidden lg:flex btn  text-3xl items-center ">
                    <img src={Logo} className='w-36' alt="" />
                </NavLink>
                {/* Dropdown */}
                <div className='dropdown'>
                    <label tabIndex={0} className='btn
                    btn-ghost lg:hidden'>
                        <FaBarsStaggered className='h-6 w-6' />
                    </label>
                    <ul 
                    tabIndex={0}
                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
                        <NavLinks/>
                    </ul>
                </div>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal flex gap-2'>
                    <NavLinks/>
                </ul>
            </div>
            <div className="navbar-center lg:hidden">
                <img src={Logo} className='w-36' alt="" />
            </div>
            <div className='navbar-end flex gap-4'>
                {/* THEME ICONS */}
             <label className='swap swap-rotate '>
                {/* this hidden checkbox controls the state */}
                <input type='checkbox' onChange={handleTheme} />

                {/* sun icon */}
                <BsSunFill className='swap-on h-4 w-4' />

                {/* moon icon */}
                <BsMoonFill className='swap-off h-4 w-4' />
            </label>

            <div className='gap-3 hidden md:flex'>
                <button className="btn btn-outline btn-accent px-6">Login</button>
                <button className="btn btn-accent px-6">Sign Up</button>
            </div>
            

           
        
            
            </div>

        </div>
    </nav>
  )
}

export default Navbar