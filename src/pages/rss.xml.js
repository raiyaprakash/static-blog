import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postSlug } from '../lib/slug';
import { siteConfig } from '../config/site';
export async function GET(context){const posts=await getCollection('posts');return rss({title:siteConfig.name,description:siteConfig.description,site:context.site,items:posts.sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf()).map(p=>({title:p.data.title,pubDate:p.data.date,description:p.data.description,link:`/posts/${postSlug(p.id,p.data.slug)}/`}))});}
