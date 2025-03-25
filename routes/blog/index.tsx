import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getBlogPosts } from "../../utils/blog.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const posts = await getBlogPosts();
    return ctx.render({ posts });
  },
};

export default function BlogIndexPage(
  { data }: PageProps<{ posts: BlogPost[] }>,
) {
  const { posts } = data;

  return (
    <div class="max-w-screen-md mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Blog</h1>
      <div class="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} class="border-b pb-8">
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                class="w-full h-64 object-cover mb-4 rounded"
              />
            )}
            <h2 class="text-2xl font-bold mb-2">
              <a href={`/blog/${post.slug}`} class="hover:text-blue-600">
                {post.title}
              </a>
            </h2>
            <p class="text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p class="mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              class="text-blue-600 hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
