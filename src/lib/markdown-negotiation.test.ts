import { describe, it, expect } from "vitest";
import {
	acceptsMarkdown,
	isHtmlContentType,
	estimateTokens,
} from "./markdown-negotiation";
import {
	headingLevel,
	formatLink,
	formatImage,
	listItemBullet,
} from "./html-to-markdown";

describe("negotiation", () => {
	it("detects markdown in Accept header", () => {
		expect(acceptsMarkdown("text/markdown")).toBe(true);
		expect(acceptsMarkdown("text/markdown, text/html;q=0.9")).toBe(true);
		expect(acceptsMarkdown("text/html")).toBe(false);
		expect(acceptsMarkdown(null)).toBe(false);
		expect(acceptsMarkdown(undefined)).toBe(false);
	});

	it("detects html content type ignoring charset", () => {
		expect(isHtmlContentType("text/html; charset=utf-8")).toBe(true);
		expect(isHtmlContentType("text/html")).toBe(true);
		expect(isHtmlContentType("application/json")).toBe(false);
		expect(isHtmlContentType(null)).toBe(false);
	});

	it("estimates tokens at ~4 chars each, min 1", () => {
		expect(estimateTokens("")).toBe(1);
		expect(estimateTokens("abcd")).toBe(1);
		expect(estimateTokens("abcde")).toBe(2);
		expect(estimateTokens("abcdefgh")).toBe(2);
	});
});

describe("markdown formatting", () => {
	it("parses heading level from tagName", () => {
		expect(headingLevel("H1")).toBe(1);
		expect(headingLevel("h3")).toBe(3);
		expect(headingLevel("H6")).toBe(6);
		expect(headingLevel("div")).toBe(1);
	});

	it("formats links, dropping empty href", () => {
		expect(formatLink("world", "/about")).toBe("[world](/about)");
		expect(formatLink("world", null)).toBe("world");
		expect(formatLink("  world ", " /x ")).toBe("[world](/x)");
	});

	it("formats images, empty when no src", () => {
		expect(formatImage("logo", "/img.png")).toBe("![logo](/img.png)");
		expect(formatImage(null, "")).toBe("");
		expect(formatImage("alt", null)).toBe("");
	});

	it("builds list item bullets ordered vs unordered", () => {
		expect(listItemBullet(false, 0)).toBe("-");
		expect(listItemBullet(true, 0)).toBe("1.");
		expect(listItemBullet(true, 2)).toBe("3.");
	});
});
