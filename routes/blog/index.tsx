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
      <div class="max-w-4xl mx-auto px-4 py-12">
        <header class="mb-12 pb-6 border-b border-base-muted">
          <h1 class="text-4xl font-bold text-primary">Blog</h1>
          <p class="mt-2 text-base-foreground">
            Stay up-to-date with our latest articles and insights
          </p>
        </header>

        {posts.length === 0
          ? (
            <div class="py-12 text-center">
              <p class="text-lg text-base-foreground">No blog posts found.</p>
              <p class="mt-2 text-gray-600">Check back soon for new content!</p>
            </div>
          )
          : (
            <div class="divide-y divide-base-muted">
              {posts.map((post) => (
                <BlogPostPreview
                  key={post.slug}
                  post={post}
                />
              ))}
            </div>
          )}

        <div class="mt-12 pt-6 border-t border-base-muted text-center">
          <p class="text-sm text-gray-600">
            Looking for something specific? Browse our categories or use the
            search.
          </p>
          <div class="mt-4 flex justify-center space-x-4">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 border border-primary/20 rounded-md bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              Search
            </a>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
