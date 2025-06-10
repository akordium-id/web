import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getPost } from "../../utils/blog.ts";
import { BlogPostFull } from "../../components/shared/ui/BlogPost.tsx";
import BlogLayout from "../../components/layout/BlogLayout.tsx";

interface BlogPostPageData {
  post: BlogPost | null;
}

export const handler: Handlers<BlogPostPageData> = {
  async GET(req, ctx) {
    const { slug } = ctx.params;
    try {
      const post = await getPost(slug);
      return ctx.render({ post });
    } catch (error) {
      console.error(`Error loading blog post ${slug}:`, error);
      return ctx.render({ post: null });
    }
  },
};

export default function BlogPostPage({ data }: PageProps<BlogPostPageData>) {
  const { post } = data;

  if (!post) {
    return (
      <BlogLayout seo={{ title: "Post Not Found | Akordium Blog" }}>
        <div class="max-w-4xl mx-auto px-4 py-12">
          <div class="mb-12 pb-6 border-b border-base-muted">
            <h1 class="text-4xl font-bold text-primary mb-4">Post not found</h1>
            <p class="text-base-foreground">
              The requested blog post could not be found.
            </p>
          </div>
          <a
            href="/blog"
            class="text-primary hover:text-primary-light transition-colors font-medium mt-4 inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Back to blog
          </a>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout
      seo={{
        title: `${post.title} | Akordium Blog`,
        description: post.snippet,
      }}
    >
      <div class="max-w-4xl mx-auto px-4 py-12">
        <a
          href="/blog"
          class="text-primary hover:text-primary-light transition-colors font-medium mb-8 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Back to blog
        </a>
        <BlogPostFull post={post} />
      </div>
    </BlogLayout>
  );
}
