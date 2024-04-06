import FeaturedPosts from '@/components/FeaturedPosts';

import Profile from '@/components/Profile';
import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  
  

  return (
    <section className="bg-gray-500">
      <Profile/>
      <FeaturedPosts/>
    </section>
  );
 
}
