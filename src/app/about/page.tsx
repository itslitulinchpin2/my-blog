import React from 'react'
import Profile from '@/components/Profile'
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
    </>
  )
}
