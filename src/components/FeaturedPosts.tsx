import React from 'react'
import PostsGrid from './PostsGrid'
import { getAllPosts } from '@/services/posts'

export default async function FeaturedPosts() {

    const posts = await getAllPosts();

  return (
    <section>
        <p>Featured Posts</p>
        <PostsGrid posts={posts}/>
    </section>
  )
}
