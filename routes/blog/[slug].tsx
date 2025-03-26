import { Handlers, PageProps } from "$fresh/server.ts";
import { BlogPost, getBlogPost } from "@/utils/blog.ts";
import { generateMetaTags } from "@/utils/seo.ts";
import Layout from "@/components/Layout.tsx";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

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
    <Layout
      title={post.title}
      description={post.description}
      withHero={false}
    >
      <head>
        {generateMetaTags({
          title: `${post.title} - Akordium Blog`,
          description: post.description,
        }).map((meta, index) => <meta key={index} {...meta} />)}
      </head>

      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Back to Blog Link */}
          <a
            href="/blog"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
          >
            <svg
              class="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </a>

          {/* Article Content */}
          <article class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
            <div
              dangerouslySetInnerHTML={{ __html: md.render(post.content) }}
            />
          </article>

          {/* Share Section */}
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Share this article
            </h3>
            <div class="flex space-x-4">
              <a
                title="Share on Twitter"
                href={`https://twitter.com/intent/tweet?text=${
                  encodeURIComponent(post.title)
                }&url=${
                  encodeURIComponent(
                    `https://akordium.com/blog/${post.slug}`,
                  )
                }`}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-blue-500"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${
                  encodeURIComponent(
                    `https://akordium.com/blog/${post.slug}`,
                  )
                }&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-600 hover:text-blue-700"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
