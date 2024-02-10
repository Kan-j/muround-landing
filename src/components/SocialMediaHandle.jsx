import React from 'react'
import { FaInstagram, FaLinkedin,FaFacebook, FaTwitter } from "react-icons/fa";

const SocialMediaHandle = () => {
  return (
    <section className='grid mt-7 mb-6 justify-items-center grid-cols-2'>
        <p className='font-medium text-base md:text-xl'>Connect with us</p>
        <article className='flex justify-between w-2/4'>
            <a href="" className='link text-accent'> <FaInstagram fontSize={24}/></a>
            <a href="" className='link text-accent'> <FaTwitter fontSize={24}/></a>
            <a href="" className='link text-accent'> <FaFacebook fontSize={24}/></a>
            <a href="" className='link text-accent'> <FaLinkedin fontSize={24}/></a>
        </article>

    </section>
  )
}

export default SocialMediaHandle