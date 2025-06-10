import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getAllPosts } from "../../utils/blog.ts";
import { BlogPostPreview } from "../../components/shared/ui/BlogPost.tsx";
import BlogLayout from "../../components/layout/BlogLayout.tsx";

export const handler: Handlers<BlogPost[]> = {
  async GET(_, ctx) {
    const posts = await getAllPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage({ data: posts }: PageProps<BlogPost[]>) {
  return (
    <BlogLayout seo={{ title: "Blog | Akordium" }}>
      <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-4xl font-bold">Blog</h1>
          <a href="/blog/admin" class="text-sm text-gray-500 hover:underline">
            Admin
          </a>
        </div>
        {posts.length === 0 ? <p>No blog posts found.</p> : (
          <div>
            {posts.map((post) => (
              <BlogPostPreview
                key={post.slug}
                post={post}
              />
            ))}
          </div>
        )}
      </div>
    </BlogLayout>
  );
}
