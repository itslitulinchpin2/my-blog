import { getAllPosts, getNonFeaturedPosts } from '@/app/services/posts'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {

    const data = await getNonFeaturedPosts();


  return (
    <section className='my-4'>
    <h2 className='text-2xl font-bold my-2'>Carousel Posts</h2>
    <MultiCarousel>
    {data.map((item)=> <PostCard key={item.path} posts={item}/>)}
    </MultiCarousel>
    </section>
  )
}
