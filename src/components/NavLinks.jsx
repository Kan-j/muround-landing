import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
    {id: 1, url: '/', text: 'home'},
    {id: 2, url: '/', text: 'about'},
    {id: 3, url: '/', text: 'features'},
    {id: 4, url: '/', text: 'blog'},
    {id: 5, url: '/', text: 'contact'},
]

const NavLinks = () => {
    const [theme, setTheme] = useState(false)

  return (
    <>
        {links.map(({id,url, text})=>{
            return <li key={id}>
                <Link to={url} className="capitalize ">{text}</Link>
            </li>
        })} 

    </>
  )
}

export default NavLinks