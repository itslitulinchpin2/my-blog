import React from 'react'
import { Post } from '@/app/services/posts'
import PostCard from './PostCard'
export default function PostsGrid({posts} : {posts: Post[]}) {
  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {posts.map((post)=> <li key={post.path}><PostCard posts={post}/></li>)}
    </ul>
  )
}
