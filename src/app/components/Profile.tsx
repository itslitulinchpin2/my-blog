import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
export default function Profile() {
  return (
    <section className="text-center">
      <Image priority className="mx-auto rounded-full m-2" alt="profilePic.." src="/images/myProfile.JPG" width={220} height={290} ></Image>
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Seungmin"}</h2>
      <h3 className='text-xl font-semibold'>Dreaming full-stack engineer</h3>
      <p>This is my blog</p>
      <Link href="/contact">
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4  '>Contact Me!</button>
        </Link>
    </section>
  )
}
