import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context){const posts=await getCollection('posts');return rss({title:'AstroJyotish',description:'राशिफल और ज्योतिष',site:context.site,items:posts.map(p=>({title:p.data.title,pubDate:p.data.date,description:p.data.description,link:`/posts/${p.id}/`}))});}
