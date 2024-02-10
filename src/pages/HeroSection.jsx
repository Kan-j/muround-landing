import React from 'react'
import heroImage from "../assets/heroImage.png"

const HeroSection = () => {
  return (
    <section className='min-w-full grid grid-cols-1 md:grid-cols-12 h-svh place-items-center'>
        <section className=' col-span-5 text-center md:text-start self-center px-5 justify-center mx-auto md:ml-12 flex flex-col gap-4 mb-12 md:mb-0'>
            <section className='flex flex-col gap-3 mb-3  mt-20 lg:mt-0'>
                 <h1 className='text-2xl lg:text-3xl font-extrabold font-nunito '>Unlock Financial Freedom with <span className='inline-block'>MuRound</span></h1>
                <p className='text-sm lg:text-base font-medium'>Experience the power of collective savings and pave the way towards a more secure and prosperous future with our dynamic community at MuRound. </p>
            </section>
           

            <div className='gap-3 flex flex-col mx-auto w-3/4 md:flex md:flex-row md:mx-0'>
                <button className="btn btn-outline btn-accent px-6 md:text-base text-lg">Login</button>
                <button className="btn btn-accent px-6 text-lg bg-accent text-white  md:text-base">Sign Up</button>
            </div>
        </section>
        <section className='col-span-7 mt-2'>
            <img src={heroImage} alt="" className='' />
        </section>
    </section>
  )
}

export default HeroSection