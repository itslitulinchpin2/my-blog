import CarouselPosts from '@/app/components/CarouselPosts';
import FeaturedPosts from '@/app/components/FeaturedPosts';

import Profile from '@/app/components/Profile';
import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  
  

  return (
    <section className="bg-gray-500">
      <Profile/>
      <FeaturedPosts/>
      <CarouselPosts/>
    </section>
  );
 
}
