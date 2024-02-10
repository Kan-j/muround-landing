import React from 'react'
import Features from './Features'
import ClubCreated from "../assets/clubcreated.png"
import Votings from "../assets/voting.png"
import Share from "../assets/share.png"



const features = [
    {
        id: 1,
        title: "Start Your Savings Community Today!",
        image: ClubCreated,
        reversed: true,
        message: <p>Create your MuRound savings club and embark on a journey towards financial empowerment. <span className='text-accent'> Join now and take control of your financial future!</span></p>
    },
    {
        id: 2,
        title: "Share the Savings Journey with Loved Ones!",
        image: Share,
        message: <p>Invite your friends and family to join your MuRound savings community and multiply your financial strength together.<span className='block text-accent'>Start inviting now!</span></p>
    },
    {
        id: 3,
        title: <h1> Empower Your Voice: <span className='block text-accent'>Vote!</span></h1>,
        image: Votings,
        reversed: true,
        message: <p>Shape the future of your savings community by participating in important decisions. Your vote matters – <span className='inline-block text-accent'>make it count with MuRound!</span></p> 
    }
]


const FeaturesList = () => {
  return (
    <section>
        {features.map((feature)=> <Features key={feature.id} {...feature} />)}
    </section>
  )
}

export default FeaturesList