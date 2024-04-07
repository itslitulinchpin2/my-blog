

import { getAllPosts, getPostMd} from '@/services/posts';
import React from 'react'
import Image from 'next/image';
import PostContent from '@/components/PostContent';


export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    path: post.path
  }))
}

export default async function page({params} : {params: {path:string}}) {
  const post = await getPostMd(params.path)
  const {title,path, next, prev} = post;
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image 
      className='w-full h-1/5 max-h-[500px]'
      src={`/images/posts/${path}.png`} 
      alt={title} 
      width={760} 
      height={420} />
      <PostContent post={post} />
     <section>
      {next && next.title}
      {prev && prev.title}
     </section>
     
    </article>
    
  )
}

