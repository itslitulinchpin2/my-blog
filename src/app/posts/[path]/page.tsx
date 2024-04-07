
import { getAllPosts, getPostMd} from '@/services/posts';
import React from 'react'



export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    path: post.path
  }))
}

export default async function page({params} : {params: {path:string}}) {
  const post = await getPostMd(params.path)
  
  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    </>
    
  )
}

