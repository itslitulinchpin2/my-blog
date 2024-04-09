import path from 'path';
import fs, { readFile } from 'fs'
import { cache } from 'react';
export type Post = {
    title:string;
    description:string;
    date:Date;
    category:string;
    path:string;
    featured:boolean;
}
export type PostData = Post & {content : string; next:Post | null; prev:Post|null;}

export const getAllPosts = cache(async ()=>{
    const filePath = path.join(process.cwd(),'blog-data','blogData','data','posts.json');
    return fs.promises.readFile(filePath,'utf-8')
    .then<Post[]>(data=>JSON.parse(data))
    .then(posts => posts.sort((a,b)=> a.date > b.date ? -1 : 1));
}
)

export async function getFeaturedPosts():Promise<Post[]>{
    const posts = await getAllPosts();
    return posts.filter(post=>post.featured===true);
}

export async function getNonFeaturedPosts():Promise<Post[]>{
    const posts = await getAllPosts();
    return posts.filter(post=>post.featured===false);
}


export async function getPostMd(name:string):Promise<PostData>{
   const filepath = path.join(process.cwd(), 'blog-data', 'blogData', 'data','posts', `${name}.md`);
   const posts = await getAllPosts()
    const post = posts.find((post)=>post.path===name)

    if(!post){
        throw new Error(`${name}을 찾을 수 없음!`)
    }
    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index-1] : null;
    const prev = index < posts.length-1 ? posts[index+1] : null;
    const content = await fs.promises.readFile(filepath,'utf-8');
    return {...post,content,next,prev}

}