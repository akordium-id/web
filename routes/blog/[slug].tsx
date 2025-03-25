import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getBlogPost } from "../../utils/blog.ts";
import { render } from "@deno/gfm";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { slug } = ctx.params;
    try {
      const post = await getBlogPost(slug);
      return ctx.render({ post });
    } catch (e) {
      return ctx.renderNotFound();
    }
  },
};

export default function BlogPostPage({ data }: PageProps<{ post: BlogPost }>) {
  const { post } = data;
  const html = render(post.content);

  return (
    <div class="max-w-screen-md mx-auto px-4 py-8">
      <div class="mb-8">
        <a href="/blog" class="text-blue-600 hover:underline">← Back to Blog</a>
      </div>

      <h1 class="text-4xl font-bold mb-4">{post.title}</h1>
      <p class="text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString()}
      </p>

      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          class="w-full h-96 object-cover mb-8 rounded"
        />
      )}

      <div
        class="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {post.tags && post.tags.length > 0 && (
        <div class="mt-8 pt-4 border-t">
          <h3 class="text-lg font-bold mb-2">Tags:</h3>
          <div class="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
