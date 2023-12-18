import { getAllPosts } from '../../lib'
import Blog from './blog'

export default function Page () {
  const posts = getAllPosts(['slug', 'title', 'description', 'date'])
  return (
    <Blog posts={posts} />
  )
}
