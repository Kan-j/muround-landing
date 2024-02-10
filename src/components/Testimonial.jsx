import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className='text-2xl mt-10 flex flex-col justify-center items-center'>
        <h1 className='text-center px-2 font-semibold md:text-start mb-4'>Still on the fence, here's what <span className='text-accent inline-block'>our users</span> are saying</h1>

        <div className="carousel carousel-center md:carousel-end space-x-4 w-5/6 rounded-box ">
            <div className="carousel-item border px-3 py-4 w-5/6 md:w-1/3 rounded-box flex flex-col justify-between h-fit">
                <section>
                     <p className='text-accent text-xl flex justify-start mb-2'><FaQuoteLeft fontSize={15}/></p>
                    <p className='text-sm '>
                    MuRound is a really good app and it has made my life easier. I can now order as many things as I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.
                    </p>
                    <p className='text-accent text-xl flex justify-end'><FaQuoteRight fontSize={15}/></p>
                </section>
               


                <section className='flex gap-3 border-t-2 pt-7 mt-7'>
                <div className="avatar">
                    <div className="w-14 h-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <h1 className='text-base font-semibold'>Laurra Koffi</h1>
                    <p className='text-sm font-medium'>Enterpreneur</p>
                </div>
                </section>

            </div> 



            <div className="carousel-item border px-3 py-4 w-5/6 md:w-1/3 rounded-box flex flex-col justify-between h-fit">
                <section>
                     <p className='text-accent text-xl flex justify-start mb-2'><FaQuoteLeft fontSize={15}/></p>
                    <p className='text-sm '>
                    MuRound is a really good app and it has made my life easier. I can now order as many things as I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.
                    </p>
                    <p className='text-accent text-xl flex justify-end'><FaQuoteRight fontSize={15}/></p>
                </section>
               


                <section className='flex gap-3 border-t-2 pt-7 mt-7'>
                <div className="avatar">
                    <div className="w-14 h-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <h1 className='text-base font-semibold'>Laurra Koffi</h1>
                    <p className='text-sm font-medium'>Enterpreneur</p>
                </div>
                </section>

            </div> 

            <div className="carousel-item border px-3 py-4 w-5/6 md:w-1/3 rounded-box flex flex-col justify-between h-fit">
                <section>
                     <p className='text-accent text-xl flex justify-start mb-2'><FaQuoteLeft fontSize={15}/></p>
                    <p className='text-sm '>
                    MuRound is a really good app and it has made my life easier. I can now order as many things as I want to from Ghana and have them delivered to my doorstep. It's safe, easy and secure.
                    </p>
                    <p className='text-accent text-xl flex justify-end'><FaQuoteRight fontSize={15}/></p>
                </section>
               


                <section className='flex gap-3 border-t-2 pt-7 mt-7'>
                <div className="avatar">
                    <div className="w-14 h-14 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div>
                    <h1 className='text-base font-semibold'>Laurra Koffi</h1>
                    <p className='text-sm font-medium'>Enterpreneur</p>
                </div>
                </section>

            </div> 
           
        </div>
    </section>
  )
}

export default Testimonial