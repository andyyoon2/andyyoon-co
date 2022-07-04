import { useRouter } from 'next/router';

/** Returns true if we are in a blog post page */
export function useBlogPost() {
  const router = useRouter();
  return router.pathname.includes('/blog/');
}
