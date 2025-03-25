import { Handlers, PageProps } from "$fresh/server.ts";
import { getBlogPosts, BlogPost } from "../../utils/content.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const posts = await getBlogPosts();
    return ctx.render({ posts });
  },
};

export default function BlogIndexPage({ data }: PageProps<{ posts: BlogPost[] }>) {
  const { posts } = data;
  
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h1 class="text-4xl font-bold mb-8">Blog</h1>
      <div class="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} class="border p-4 rounded-lg">
            <h2 class="text-2xl font-bold">
              <a href={`/blog/${post.slug}`} class="hover:underline">
                {post.title}
              </a>
            </h2>
            <p class="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            {post.thumbnail && (
              <img 
                src={post.thumbnail} 
                alt={post.title} 
                class="mt-4 rounded-lg max-h-48 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}