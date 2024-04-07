import path from 'path';
import fs, { readFile } from 'fs'

export type Post = {
    title:string;
    description:string;
    date:Date;
    category:string;
    path:string;
    featured:boolean;
}
type PostData = Post & {content : string}

export async function getAllPosts(): Promise<Post[]>{
    const filePath = path.join(process.cwd(),'blog-data','blogData','data','posts.json');
    return fs.promises.readFile(filePath,'utf-8')
    .then<Post[]>(data=>JSON.parse(data))
    .then(posts => posts.sort((a,b)=> a.date > b.date ? -1 : 1));
}

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
   const metadata = await getAllPosts()
    .then((posts)=>posts.find((post)=>post.path===name));

    if(!metadata){
        throw new Error(`${name}을 찾을 수 없음!`)
    }

    const content = await fs.promises.readFile(filepath,'utf-8');
    return {...metadata,content}

}