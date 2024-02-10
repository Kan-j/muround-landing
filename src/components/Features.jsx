import React from 'react'

const Features = ({image, title, message, reversed}) => {
  return (
    <section className='min-w-full grid grid-cols-1 md:grid-cols-12 h-4/6 place-items-center'>
    {/* Default order for mobile screens */}
    <section className={`col-span-5 text-center md:text-start self-center px-5 justify-center mx-auto md:ml-12 flex flex-col gap-4 mb-12 md:mb-0 h-4/5 ${reversed ? 'md:order-last' : ''}`}>
      <section className='flex flex-col gap-3 mb-3 mt-20 lg:mt-0'>
        <h1 className='text-2xl lg:text-3xl font-semibold ' >{title} </h1>
        <p className='text-sm lg:text-base font-medium'>{message}</p>
      </section>
      
      <div className='gap-3 flex flex-col mx-auto w-3/4 md:flex md:flex-row md:mx-0 '>
        <button className="btn btn-accent bg-accent text-white px-6 text-lg md:text-base">Try it out &#8594;</button>
      </div>
    </section>
    <section className={`col-span-7 mt-2 h-full flex items-center ${reversed ? 'md:order-first' : ''}`}>
      <img src={image} alt="" className='h-4/5' />
    </section>
  </section>
  )
}

export default Features