import ContactForm from '@/app/components/ContactForm'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { Metadata } from 'next'
export const metadata:Metadata = {
  title:'Contact me',
  description:'Send an email to me'
}
export default function page() {

  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me!</h2>
      <p>dlsdk0930@gmail.com</p>
      <div className='flex my-2'>
        <a className= 'text-5xl hover:text-yellow-400' key={'github'} href= "https://github.com/itslitulinchpin2" target='_blank'><AiFillGithub/></a>
      </div>
      <h2 className='text-3xl font-bold my-8'>Or Send me an Email!</h2>
      <ContactForm/>
    </section>
  )
}
