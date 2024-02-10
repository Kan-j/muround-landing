import React from 'react'
import { FaInstagram, FaLinkedin,FaFacebook, FaTwitter } from "react-icons/fa";

const SocialMediaHandle = () => {
  return (
    <section className='grid mt-7 mb-6 justify-items-center grid-cols-2'>
        <p className='font-medium text-xl'>Connect with us</p>
        <article className='flex justify-between w-2/4'>
            <a href="" className='link text-accent'> <FaInstagram fontSize={30}/></a>
            <a href="" className='link text-accent'> <FaTwitter fontSize={30}/></a>
            <a href="" className='link text-accent'> <FaFacebook fontSize={30}/></a>
            <a href="" className='link text-accent'> <FaLinkedin fontSize={30}/></a>
        </article>

    </section>
  )
}

export default SocialMediaHandle