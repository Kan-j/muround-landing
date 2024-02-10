import React from 'react'


const BenefitsCard = ({title, icon,message}) => {
  return (
    <article className='w-full flex flex-col px-10 py-5 gap-3'>
      <article className='flex justify-center md:justify-start'>
        <img src={icon} className='w-11 ' alt="" />
      </article>
        <h1 className='font-nunito md:text-xl text-lg font-bold text-center md:text-start'>{title}</h1>
        <p className='text-sm lg:text-base text-center md:text-start'>{message}</p>
    </article>
  )
}

export default BenefitsCard