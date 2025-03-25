import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";

export interface BlogPost {
  slug: string;
  title: string;
  date: Date;
  content: string;
  excerpt: string;
  thumbnail?: string;
  tags?: string[];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = Deno.readDir("./content/blog");
  const promises = [];

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md")) {
      const slug = file.name.replace(".md", "");
      promises.push(getBlogPost(slug));
    }
  }

  const posts = await Promise.all(promises);
  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const text = await Deno.readTextFile(
    join("./content/blog", `${slug}.md`)
  );

  const { attrs, body } = extract(text);
  const excerpt = body.split("\n").slice(0, 2).join(" ").substring(0, 150) + "...";

  return {
    slug,
    title: attrs.title as string,
    date: new Date(attrs.date as string),
    content: body,
    excerpt,
    thumbnail: attrs.thumbnail as string,
    tags: attrs.tags as string[] || [],
  };
}