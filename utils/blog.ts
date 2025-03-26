import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  description: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];

  for await (const entry of Deno.readDir("content/blog")) {
    if (entry.isFile && entry.name.endsWith(".md")) {
      const content = await Deno.readTextFile(
        join("content/blog", entry.name)
      );

      const { attrs, body } = extract(content);
      const slug = entry.name.replace(".md", "");

      posts.push({
        slug,
        title: attrs.title as string,
        date: attrs.date as string,
        content: body,
        description: attrs.description as string,
      });
    }
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const content = await Deno.readTextFile(
      join("content/blog", `${slug}.md`)
    );

    const { attrs, body } = extract(content);

    return {
      slug,
      title: attrs.title as string,
      date: attrs.date as string,
      content: body,
      description: attrs.description as string,
    };
  } catch {
    return null;
  }
}