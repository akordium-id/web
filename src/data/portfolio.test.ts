import { describe, it, expect } from "vitest";
import { portfolioItems } from "./portfolio";
import { corePractices } from "./services";

describe("Data Layer: Boutique Showcase & Core Practices", () => {
  it("contains the 3 canonical showcase items (MIS-APAR, Orin GPS, Katauser)", () => {
    const ids = portfolioItems.map((p) => p.id);
    expect(ids).toContain("mis-apar");
    expect(ids).toContain("orin-gps");
    expect(ids).toContain("katauser");
    expect(portfolioItems.length).toBe(3);

    for (const item of portfolioItems) {
      expect(item.titleId).toBeDefined();
      expect(item.descriptionId).toBeDefined();
      expect(item.techStack.length).toBeGreaterThan(0);
      expect(item.metrics.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("exports corePractices with the 3 boutique engineering disciplines", () => {
    expect(corePractices).toBeDefined();
    expect(corePractices.length).toBe(3);

    const practiceIds = corePractices.map((p) => p.id);
    expect(practiceIds).toEqual([
      "product-engineering",
      "system-modernization",
      "dedicated-tools",
    ]);

    for (const practice of corePractices) {
      expect(practice.title).toBeTruthy();
      expect(practice.description).toBeTruthy();
      expect(practice.deliverables.length).toBeGreaterThanOrEqual(3);
      expect(practice.techStack.length).toBeGreaterThanOrEqual(3);
    }
  });
});
