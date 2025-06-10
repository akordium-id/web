import { render } from "@deno/gfm";
import { BlogPost } from "../../../utils/blog.ts";

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPostPreview({ post }: { post: BlogPost }) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(post.publishedAt);

  return (
    <article class="mb-8">
      <h2 class="text-2xl font-bold">
        <a href={`/blog/${post.slug}`} class="hover:underline">
          {post.title}
        </a>
      </h2>
      <p class="text-gray-500 mt-1">{formattedDate}</p>
      <p class="mt-2">{post.snippet}</p>
      <a
        href={`/blog/${post.slug}`}
        class="mt-2 inline-block text-blue-600 hover:underline"
      >
        Read more →
      </a>
    </article>
  );
}

export function BlogPostFull({ post }: BlogPostProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(post.publishedAt);

  // Apply custom styling to the rendered markdown
  const html = render(post.content, {
    allowIframes: true,
    disableHtmlSanitization: false,
  });

  return (
    <article>
      <h1 class="text-3xl font-bold">{post.title}</h1>
      <p class="text-gray-500 mt-2 mb-6">{formattedDate}</p>
      <div
        class="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-md"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
