
import MarkdownViewer from '@/components/MarkdownViewer';
import { getAllPosts, getPostMd} from '@/services/posts';
import React from 'react'
import Image from 'next/image';
import { SlCalender } from "react-icons/sl";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    path: post.path
  }))
}

export default async function page({params} : {params: {path:string}}) {
  const {title,description,date,path,content} = await getPostMd(params.path)
  
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image 
      className='w-full h-1/5 max-h-[500px]'
      src={`/images/posts/${path}.png`} 
      alt={title} 
      width={760} 
      height={420} />
      <section className='flex flex-col p-4'>
        <div className='flex items-center self-end text-sky-600'>
          <SlCalender/>
          <p className='font-semibold ml-2'>{date.toString()}</p>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='w-44 border-2 border-sky-600 mt-4 mb-8'></div>
        <MarkdownViewer content={content}></MarkdownViewer>
      </section>
     
    </article>
    
  )
}

