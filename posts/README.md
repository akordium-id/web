# Blog System for Akordium

This directory contains the blog posts for the Akordium website. Each post is a Markdown file with front matter metadata.

## Creating a New Blog Post

1. Create a new `.md` file in this directory with a URL-friendly name (e.g., `my-new-post.md`).
2. Add the required front matter at the top of the file:

```markdown
---
title: Your Post Title
published_at: 2023-09-15T12:00:00.000Z
snippet: A brief summary of your post (appears in the blog listing).
---

Your post content goes here...
```

3. Write your post content using Markdown syntax.

## Front Matter Fields

- `title` (required): The title of your blog post.
- `published_at` (required): The publication date and time in ISO format.
- `snippet` (required): A brief summary of your post (shown in the blog listing).

## Markdown Features

The blog supports standard Markdown features including:

- Headings (# to ######)
- **Bold** and _italic_ text
- Lists (ordered and unordered)
- Links and images
- Code blocks (with syntax highlighting)
- Blockquotes
- Tables
- And more!

## Example Code Block

```typescript
function greet(name: string): string {
	return `Hello, ${name}!`;
}
```

## Images

For images, you can either:

1. Reference external URLs: `![Alt text](https://example.com/image.jpg)`
2. Place images in the `/static/images/blog/` directory and reference them: `![Alt text](/images/blog/image.jpg)`

## Publishing

New blog posts will automatically appear on the blog page after they're added to this directory.
