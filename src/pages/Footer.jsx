import React from 'react'
import Logo from "../assets/muround-logo-footer.svg"

const Footer = () => {
  return (
    <section>
        <footer className="footer p-10 bg-accent text-base-content">
            <aside>
                <img src={Logo} alt="" className='w-44 text-white' />
                <p className='font-semibold text-base text-white'>Unite, Prosper, Thrive</p>
            </aside> 
            <nav className='text-white'>
                <h6 className="footer-title">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav className='text-white'>
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav className='text-white'>
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </section>
  )
}

export default Footer