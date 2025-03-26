import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getBlogPosts } from "@/utils/blog.ts";

export const handler: Handlers<BlogPost[]> = {
  async GET(_, ctx) {
    const posts = await getBlogPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage({ data: posts }: PageProps<BlogPost[]>) {
  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold">Blog Posts</h1>
      <div class="mt-8">
        {posts.map((post) => (
          <div key={post.slug} class="mb-8">
            <a
              href={`/blog/${post.slug}`}
              class="text-xl font-semibold hover:text-blue-600"
            >
              {post.title}
            </a>
            <p class="text-gray-600 text-sm">{post.date}</p>
            <p class="mt-2">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
