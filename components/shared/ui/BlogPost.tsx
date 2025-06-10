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
    <article class="py-8 first:pt-0 group">
      <div class="flex flex-col">
        <div class="mb-3">
          <span class="text-sm text-gray-600">{formattedDate}</span>
        </div>
        <h2 class="text-2xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
          <a
            href={`/blog/${post.slug}`}
            class="outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded"
          >
            {post.title}
          </a>
        </h2>
        <p class="text-base-foreground mb-4 line-clamp-3">{post.snippet}</p>
        <div>
          <a
            href={`/blog/${post.slug}`}
            class="inline-flex items-center text-primary hover:text-primary-light transition-colors font-medium group-hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
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
      <header class="mb-8 pb-6 border-b border-base-muted">
        <h1 class="text-4xl font-bold text-primary mb-2">{post.title}</h1>
        <p class="text-gray-600 text-sm">{formattedDate}</p>
      </header>
      <div
        class="prose prose-lg max-w-none 
          prose-headings:text-primary 
          prose-headings:font-bold 
          prose-h1:text-3xl 
          prose-h2:text-2xl 
          prose-h3:text-xl 
          prose-h4:text-lg 
          prose-p:text-base-foreground 
          prose-a:text-primary 
          prose-a:no-underline 
          hover:prose-a:text-primary-light 
          hover:prose-a:underline 
          prose-blockquote:border-secondary 
          prose-blockquote:text-secondary-dark
          prose-img:rounded-lg 
          prose-img:shadow-md 
          prose-pre:bg-base-subtle 
          prose-pre:border 
          prose-pre:border-base-muted 
          prose-pre:rounded-md"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
