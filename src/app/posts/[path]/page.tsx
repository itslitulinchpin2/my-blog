

import { getAllPosts, getPostMd} from '@/app/services/posts';
import React from 'react'
import Image from 'next/image';
import PostContent from '@/app/components/PostContent';
import AdjacentPostCard from '@/app/components/AdjacentPostCard';
import type {Metadata, ResolvingMetadata} from 'next';

type Props = {
  params: {
    path: string;
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    path: post.path
  }))
}

export async function generateMetadata({params} : {params: {path:string}}): Promise<Metadata>{
  const post = await getPostMd(params.path);
  const {title,description} = post;
 
  return {
    title:title,
    description:description
  }

}

export default async function Page({params} : {params: {path:string}}) {
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
     <section className='flex shadow-md '>
     {prev && <AdjacentPostCard post={prev} type='prev'/>}
     {next && <AdjacentPostCard post={next} type='next'/>}
      
     </section>
     
    </article>
    
  )
}

