import { getPostBySlug, getAllPosts, markdownToHtml } from '../../../lib'
import Post from './post'

export async function generateStaticParams () {
  const posts = getAllPosts(['slug'])
  return posts.map(post => ({ slug: post.slug }))
}

// Code adapted from Next.js blog starter
async function getPostContent (params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'description',
    'date',
    'slug',
    // 'author',
    'content'
    // 'ogImage',
    // 'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    ...post,
    content
  }
}

export default async function Page ({ params }) {
  const post = await getPostContent(params)
  return (
    <Post post={post} />
  )
}
