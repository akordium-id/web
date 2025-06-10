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
        <div class="max-w-4xl mx-auto px-4 py-8">
          <h1 class="text-4xl font-bold mb-8">Post not found</h1>
          <p>The requested blog post could not be found.</p>
          <a
            href="/blog"
            class="text-blue-600 hover:underline mt-4 inline-block"
          >
            ← Back to blog
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
      <div class="max-w-4xl mx-auto px-4 py-8">
        <a href="/blog" class="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to blog
        </a>
        <BlogPostFull post={post} />
      </div>
    </BlogLayout>
  );
}
