interface ImportMetaEnv {
	readonly PUBLIC_WEB3FORMS_ACCESS_KEY: string;
}

// Cloudflare Workers runtime globals used by the Markdown-for-Agents function.
// Declared ambient (not via @cloudflare/workers-types) to avoid DOM-lib conflicts.
type HTMLRewriterElementHandler = {
	element?(
		element: {
			tagName: string;
			getAttribute(name: string): string | null;
			remove(): void;
			onEndTag(handler: () => void): void;
		},
	): void;
	text?(text: { text: string; lastInTextNode: boolean }): void;
};

declare class HTMLRewriter {
	on(selector: string, handlers: HTMLRewriterElementHandler): this;
	transform(response: Response): Response;
}

type PagesFunction<Env = unknown> = (context: {
	request: Request;
	env: Env;
	next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
	waitUntil(promise: Promise<unknown>): void;
}) => Response | Promise<Response>;