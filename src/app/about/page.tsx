import React from 'react'
import Profile from '@/app/components/Profile'
import { Metadata } from 'next'
import WeatherCard from '../components/WeatherCard'
export const metadata:Metadata = {
  title:'About me',
  description:'Let me introduce myself'
}


export default function page() {

  

  return (
    <>
    <Profile></Profile>
    <section className='bg-gray-100 shadow-lg m-8 p-8 text-center '>
      <h2 className='text-2xl font-bold text-gray-800 my-2'>Who Am I?</h2>
      <p>from South Korea <br/>
      interested in WEB development</p>

      <h2 className='text-2xl font-bold text-gray-800 my-2'>Skills</h2>
      <p>Node,React, Next, Git, MySQL, MongoDB </p>

    </section>
    <WeatherCard/>
    </>
  )
}
