
import PagesFilter from '@/components/PagesFilter';
import { getAllPosts } from '@/services/posts'
import React from 'react'
import { Post } from '@/services/posts';

export default async function page() {
  const posts : Post[] = await getAllPosts();
  const categories = [...new Set(posts.map((post)=>post.category))]
  
  return (
    <>
      <PagesFilter data={posts} categories={categories}/>
    </>
  )
}
