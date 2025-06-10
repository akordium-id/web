import { join } from "$std/path/mod.ts";
import * as yaml from "$std/yaml/mod.ts";

export interface BlogPost {
  slug: string;
  title: string;
  publishedAt: Date;
  snippet: string;
  content: string;
}

function extractFrontMatter(content: string, slug: string): { frontMatter: Record<string, unknown>; content: string } {
  // Normalize line endings
  const normalizedContent = content.replace(/\r\n/g, "\n");

  console.log(`[DEBUG] Processing post: ${slug}`);
  console.log(`[DEBUG] Content starts with: "${normalizedContent.substring(0, 50)}..."`);

  // More flexible regex that handles different line endings
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = normalizedContent.match(frontMatterRegex);

  if (!match) {
    console.log(`[DEBUG] Front matter regex failed to match for ${slug}`);
    throw new Error("Invalid front matter format");
  }

  const [, frontMatterYaml, markdownContent] = match;
  console.log(`[DEBUG] Front matter YAML: "${frontMatterYaml}"`);

  try {
    const frontMatter = yaml.parse(frontMatterYaml) as Record<string, unknown>;
    console.log(`[DEBUG] Parsed front matter:`, frontMatter);

    return {
      frontMatter,
      content: markdownContent,
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`[DEBUG] Error parsing YAML front matter for ${slug}:`, error);
    throw new Error(`Failed to parse front matter: ${errorMessage}`);
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = Deno.readDir("./posts");
  const promises = [];

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md") && !file.name.startsWith("README")) {
      const slug = file.name.replace(".md", "");
      try {
        const post = await getPost(slug);
        promises.push(post);
      } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
      }
    }
  }

  const posts = await Promise.all(promises);

  // Sort by date (newest first)
  return posts.sort((a, b) =>
    b.publishedAt.getTime() - a.publishedAt.getTime()
  );
}

export async function getPost(slug: string): Promise<BlogPost> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const { frontMatter, content } = extractFrontMatter(text, slug);

  if (!frontMatter.title || typeof frontMatter.title !== "string") {
    throw new Error(`Missing or invalid title in post: ${slug}`);
  }

  // Check if published_at exists and is either a string or a Date
  if (!frontMatter.published_at) {
    throw new Error(`Missing published_at in post: ${slug}`);
  }

  // Convert published_at to a Date object if it's not already one
  let publishedAt: Date;
  if (frontMatter.published_at instanceof Date) {
    publishedAt = frontMatter.published_at;
  } else if (typeof frontMatter.published_at === "string") {
    publishedAt = new Date(frontMatter.published_at);
  } else {
    throw new Error(`Invalid published_at format in post: ${slug}`);
  }

  if (!frontMatter.snippet || typeof frontMatter.snippet !== "string") {
    throw new Error(`Missing or invalid snippet in post: ${slug}`);
  }

  return {
    slug,
    title: frontMatter.title as string,
    publishedAt,
    snippet: frontMatter.snippet as string,
    content: content.trim(),
  };
}