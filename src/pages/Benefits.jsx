import React from 'react'
import Record from "../assets/record.svg"
import Savings from "../assets/savings.svg"
import SOS from "../assets/sos.svg"
import BenefitsCard from '../components/BenefitsCard'


const benefits = [
    {
        id: 1,
        title: "Collective Saving Power",
        icon: Savings,
        message: "MuRound empowers community members to unite their resources for faster financial progress, achieving goals efficiently through collective saving."
    },
    {
        id: 2,
        title: "Seamless Record Management",
        icon: Record,
        message: "MuRound takes the hassle out of financial tracking by effortlessly recording all transactions, providing members with a transparent and organized view of their savings journey."
    },
    {
        id: 3,
        title: "Emergency Fund Support",
        icon: SOS,
        message: "MuRound offers a safety net during financial crises, granting members transparent access to community-approved emergency funds. With group support, members face unexpected expenses with confidence."
    }
]


const Benefits = () => {
  return (
    <section className='h-1/2 mt-24 md:mt-4 bg-accent w-full mx-auto flex flex-col gap-3 text-white'>
        <h1 className='text-2xl font-bold font-nunito mt-9  w-fulltext-white flex justify-center'>Explore the Benefits of MuRound</h1>
        <section className='flex justify-center mb-4'>
            <section className='grid grid-cols-1 md:grid-cols-3'>
                {
                    benefits.map((item)=> <BenefitsCard key={item.id} {...item}/>)
                }
            </section>

        </section>
    </section>
  )
}

export default Benefits