import { describe, it, expect } from "vitest";
import { calculateUrgency } from "./assessment";

describe("calculateUrgency", () => {
	it("should calculate minimum urgency tier when all scores are 1", () => {
		const result = calculateUrgency("Warung Barokah", {
			salesChannel: 1,
			operationalFriction: 1,
			credibilityDemand: 1,
			searchIntent: 1,
			platformRisk: 1,
		});

		expect(result.totalScore).toBe(5);
		expect(result.urgencyPercentage).toBe(0);
		expect(result.urgencyTier).toBe("low");
		expect(result.summaryText).toContain("Warung Barokah");
		expect(result.recList.length).toBeGreaterThan(0);
	});

	it("should calculate maximum urgency tier when all scores are 4", () => {
		const result = calculateUrgency("Toko Sukses", {
			salesChannel: 4,
			operationalFriction: 4,
			credibilityDemand: 4,
			searchIntent: 4,
			platformRisk: 4,
		});

		expect(result.totalScore).toBe(20);
		expect(result.urgencyPercentage).toBe(100);
		expect(result.urgencyTier).toBe("critical");
		expect(result.urgencyBadgeClass).toContain("bg-rose-600");
	});

	it("should calculate moderate urgency tier accurately for mid-range answers", () => {
		const result = calculateUrgency("Agensi Kreatif", {
			salesChannel: 3,
			operationalFriction: 2,
			credibilityDemand: 3,
			searchIntent: 3,
			platformRisk: 2,
		});

		// Total score = 3 + 2 + 3 + 3 + 2 = 13
		// (13 - 5) / 15 = 8 / 15 ≈ 53.33% -> round 53%
		expect(result.totalScore).toBe(13);
		expect(result.urgencyPercentage).toBe(53);
		expect(result.urgencyTier).toBe("moderate");
		expect(result.urgencyBadgeClass).toContain("bg-amber-500");
	});

	it("should clamp edge cases properly", () => {
		const underResult = calculateUrgency("Test Shop", {
			salesChannel: 0,
			operationalFriction: 0,
			credibilityDemand: 0,
			searchIntent: 0,
			platformRisk: 0,
		});
		expect(underResult.urgencyPercentage).toBe(0);

		const overResult = calculateUrgency("Test Shop", {
			salesChannel: 10,
			operationalFriction: 10,
			credibilityDemand: 10,
			searchIntent: 10,
			platformRisk: 10,
		});
		expect(overResult.urgencyPercentage).toBe(100);
	});
});
