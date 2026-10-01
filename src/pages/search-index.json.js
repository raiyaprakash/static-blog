import { getCollection } from 'astro:content';
import { postSlug } from '../lib/slug';
export async function GET() {
  const posts = await getCollection('posts');
  const data = posts.sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf()).map(p=>({title:p.data.title,description:p.data.description,category:p.data.category,tags:p.data.tags,countries:p.data.countries||[],content:(p.body||'').replace(/[#*_`>\[\]()]/g,' '),date:p.data.date.toISOString().slice(0,10),url:`/posts/${postSlug(p.id,p.data.slug)}/`}));
  return new Response(JSON.stringify(data),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=3600'}});
}
