
import PagesFilter from '@/app/components/PagesFilter';
import { getAllPosts } from '@/app/services/posts'
import React from 'react'
import { Post } from '@/app/services/posts';

export default async function page() {
  const posts : Post[] = await getAllPosts();
  const categories = [...new Set(posts.map((post)=>post.category))]
  
  return (
    <>
      <PagesFilter data={posts} categories={categories}/>
    </>
  )
}
