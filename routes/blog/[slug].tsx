import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getBlogPost } from "../../utils/content.ts";
import { render } from "@deno/gfm";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { slug } = ctx.params;
    const post = await getBlogPost(slug);

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    return ctx.render({ post });
  },
};

export default function BlogPostPage({ data }: PageProps<{ post: BlogPost }>) {
  const { post } = data;

  // Render markdown to HTML
  const contentHtml = render(post.content);

  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h1 class="text-4xl font-bold mb-2">{post.title}</h1>
      <p class="text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString()}
      </p>

      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={post.title}
          class="w-full rounded-lg mb-8 max-h-96 object-cover"
        />
      )}

      <div
        class="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <div class="mt-8">
        <a href="/blog" class="text-blue-500 hover:underline">
          ← Back to all posts
        </a>
      </div>
    </div>
  );
}
