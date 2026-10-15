import { describe, it, expect } from "vitest";
import { showcaseShots } from "./showcase";

describe("Data Layer: More Works Showcase Shots", () => {
  it("contains the 7 secondary showcase screenshots with unique images", () => {
    expect(showcaseShots.length).toBe(7);

    const ids = showcaseShots.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);

    const images = showcaseShots.map((s) => s.image);
    expect(new Set(images).size).toBe(images.length);

    for (const shot of showcaseShots) {
      expect(shot.label).toBeTruthy();
      expect(shot.labelId).toBeTruthy();
      expect(shot.image).toMatch(/^\/images\/.+\.(png|jpg)$/);
      expect(["Klien", "Karya Mandiri", "In-House"]).toContain(shot.category);
    }
  });

  it("marks JIJP as an independent work, distinct from client engagement", () => {
    const jijp = showcaseShots.find((s) => s.id === "jijp");
    expect(jijp).toBeDefined();
    expect(jijp?.category).toBe("Karya Mandiri");
    expect(jijp?.note).toBeTruthy();
    expect(showcaseShots.some((s) => s.id === "jita")).toBe(false);
  });
});
