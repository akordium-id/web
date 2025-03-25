import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/mod.ts";

interface BlogPostAttributes {
  title: string;
  date: string;
  thumbnail?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  try {
    const contentDir = join(Deno.cwd(), "content", "blog");

    for await (const entry of Deno.readDir(contentDir)) {
      if (entry.isFile && entry.name.endsWith(".md")) {
        const filePath = join(contentDir, entry.name);
        const fileContent = await Deno.readTextFile(filePath);

        // Type the extracted attributes
        const { attrs, body } = extract(fileContent) as { attrs: BlogPostAttributes; body: string };

        posts.push({
          slug: entry.name.replace(/\.md$/, ""),
          title: attrs.title,
          date: attrs.date,
          thumbnail: attrs.thumbnail,
          content: body
        });
      }
    }

    // Sort by date (newest first)
    return posts.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const contentDir = join(Deno.cwd(), "content", "blog");
    const files = Deno.readDir(contentDir);

    for await (const entry of files) {
      if (entry.isFile && entry.name.includes(slug) && entry.name.endsWith(".md")) {
        const filePath = join(contentDir, entry.name);
        const fileContent = await Deno.readTextFile(filePath);

        // Add type assertion here
        const { attrs, body } = extract(fileContent) as { attrs: BlogPostAttributes; body: string };

        return {
          slug: entry.name.replace(/\.md$/, ""),
          title: attrs.title,
          date: attrs.date,
          thumbnail: attrs.thumbnail,
          content: body
        };
      }
    }

    return null;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}