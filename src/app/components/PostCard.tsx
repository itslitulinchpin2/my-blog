import { Post } from '@/app/services/posts'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {posts:Post}
export default function PostCard({
    posts : { title, description, date, category, path, featured}
}:Props) {
  return (
   <Link href={`/posts/${path}`}>
    <article className='rounded-md overflow-hidden shadow-md hover:shadow-xl'>
       <Image className='w-full' src={`/images/posts/${path}.png`} alt = {title} width={300} height={200}/>
       <div className='flex flex-col items-center p-4'>
        <time className='self-end text-gray-700'>{date.toString()}</time>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='w-full truncate text-center'>{description}</p>
        <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>{category}</span>
       </div>
       </article>
   </Link> 

  )
}
