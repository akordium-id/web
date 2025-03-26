import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getBlogPost } from "@/utils/blog.ts";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export const handler: Handlers<BlogPost | null> = {
  async GET(_, ctx) {
    const post = await getBlogPost(ctx.params.slug);
    if (!post) {
      return ctx.renderNotFound();
    }
    return ctx.render(post);
  },
};

export default function BlogPostPage({ data: post }: PageProps<BlogPost>) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div class="p-4 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold">{post.title}</h1>
      <p class="text-gray-600 mt-2">{post.date}</p>
      <div
        class="mt-8 prose"
        dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
      />
    </div>
  );
}
