---
title: Building with Deno Fresh
published_at: 2023-08-20T14:45:00.000Z
snippet: Learn how to build modern web applications with Deno Fresh framework.
---

# Building with Deno Fresh

[Deno Fresh](https://fresh.deno.dev/) is a next-generation web framework, built for speed, reliability, and simplicity. In this post, we'll explore some of its key features and how to get started.

## Why Fresh?

Fresh provides several advantages:

1. **Zero runtime overhead**: No JavaScript is shipped to the client by default
2. **Island-based client hydration**: JavaScript is only shipped for interactive components
3. **TypeScript support out of the box**: No build step required
4. **File-system routing**: Intuitive project structure
5. **Server-side rendering**: Great for SEO and performance

## Getting Started

To create a new Fresh project, run:

```bash
deno run -A -r https://fresh.deno.dev my-project
cd my-project
deno task start
```

## Creating Routes

Fresh uses file-system based routing. To create a new route, simply add a file to the `routes` directory:

```typescript
// routes/about.tsx
export default function AboutPage() {
	return (
		<div>
			<h1>About</h1>
			<p>This is the about page.</p>
		</div>
	);
}
```

## Working with Islands

Islands are interactive components that get hydrated on the client:

```typescript
// islands/Counter.tsx
import { useState } from "preact/hooks";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}
```

## Conclusion

Fresh is an excellent framework for building modern web applications with Deno. Its focus on performance, simplicity, and developer experience makes it a great choice for your next project.
