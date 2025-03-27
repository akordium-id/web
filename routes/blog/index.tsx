import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getBlogPosts } from "@/utils/blog.ts";
import { generateMetaTags } from "@/utils/seo.ts";
import Layout from "@/components/Layout.tsx";

export const handler: Handlers<BlogPost[]> = {
  async GET(_, ctx) {
    const posts = await getBlogPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage({ data: posts }: PageProps<BlogPost[]>) {
  return (
    <>
      <Layout
        title="Insights & Articles"
        description="Discover the latest trends, tips, and strategies in digital transformation and business innovation."
        withHero={true}
      >
        <head>
          {generateMetaTags({
            title: "Blog - Akordium",
            description:
              "Explore insights and articles about digital transformation, web development, and business innovation",
          }).map((meta, index) => <meta key={index} {...meta} />)}
        </head>

        <main class="min-h-screen bg-gradient-to-b from-base to-gray-100">
          {/* Blog Posts Grid */}
          <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} class="group">
                  <a href={`/blog/${post.slug}`} class="block">
                    <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 h-full border border-secondary/20">
                      <div class="flex flex-col h-full">
                        <span class="text-tertiary text-sm font-medium mb-2">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <h2 class="text-xl font-semibold text-primary group-hover:text-secondary transition-colors mb-3">
                          {post.title}
                        </h2>
                        <p class="text-primary/80 flex-grow mb-4">
                          {post.description}
                        </p>
                        <div class="flex items-center text-tertiary">
                          <span class="font-medium">Read more</span>
                          <svg
                            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
