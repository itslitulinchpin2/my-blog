import React from 'react'
import { Post } from '@/services/posts'
export default function PostsGrid({posts} : {posts: Post[]}) {
  return (
    <ul>
        {posts.map((post)=> <li key={post.path}>{post.title}</li>)}
    </ul>
  )
}
