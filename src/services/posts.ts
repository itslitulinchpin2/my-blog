import path from 'path';
import {promises as fs } from 'fs';

export type Post = {
    title:string;
    description:string;
    date:Date;
    category:string;
    path:string;
    featured:boolean;
}
export async function getAllPosts(): Promise<Post[]>{
    const filePath = path.join(process.cwd(),'blog-data','blogData','data','posts.json');
    return fs.readFile(filePath,'utf-8')
    .then<Post[]>(data=>JSON.parse(data))
    .then(posts => posts.sort((a,b)=> a.date > b.date ? -1 : 1));
}