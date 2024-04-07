'use client'
import React from 'react'
import { useState } from 'react';
import { getAllPosts } from '@/services/posts';
import PostCard from './PostCard';
import { Post } from '@/services/posts';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
    data: Post[],
    categories: string[]
}

export default function PagesFilter({data, categories}:Props) {
   


const [selected,setSelected]=useState('All posts');

const filterd = selected === 'All posts' 
    ? data
    : data.filter((post)=>post.category===selected)



  return (
    <section className='flex m-4'>
      <PostsGrid posts={filterd}/>
      <Categories categories={[...categories, 'All posts']} selected={selected} onClick={(selected)=>setSelected(selected)}/>
    </section>
  )
}
