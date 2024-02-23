import { expect } from "chai";
import { planYourTrip } from "../03.Test/planYourTrip.js";

describe("Test Suite", () => {
    describe("choosingDestination", () => {
        it("should return the correct message for a valid destination", () => {
            let res = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
            expect(res).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should return the correct message for a valid non-Winter destination in 2024", () => {
            let res = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024);
            expect(res).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

        it("should throw an error for an invalid year", () => {
            expect(() => planYourTrip.choosingDestination("City", "Spring", 2023)).to.throw("Invalid Year!");
        });

        it("should throw an error for an invalid destination", () => {
            expect(() => planYourTrip.choosingDestination("Mountain", "Fall", 2024)).to.throw("This destination is not what you are looking for.");
        });
    });

    describe("exploreOptions", () => {
        it("should remove and return the changed array of our activities as a string", () => {
            let activities = ["Skiing", "Snowboarding", "Winter Hiking", "Ice Skating"];
            let res = planYourTrip.exploreOptions(activities, 2);
            expect(res).to.equal("Skiing, Snowboarding, Ice Skating");
        });

        it("should throw an error for invalid parameters", () => {
            expect(() => planYourTrip.exploreOptions("Invalid", 3)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(3, "Invalid")).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "Invalid")).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 7)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 3.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], -10)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(7,["Skiing", "Snowboarding"])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(3.5, ["Skiing", "Snowboarding"])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(-10, ["Skiing", "Snowboarding"])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions([], -1.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions([], 5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(-1.5, [])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(0, [])).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(5, [])).to.throw("Invalid Information!");
        });
    });

    describe("estimateExpenses", () => {
        it("should return the correct message", () => {
            let result = planYourTrip.estimateExpenses(200, 2.5);
            expect(result).to.equal("The trip is budget-friendly, estimated cost is $500.00.");
        });

        it("should return the correct message", () => {
            let result = planYourTrip.estimateExpenses(500, 3.0);
            expect(result).to.equal("The estimated cost for the trip is $1500.00, plan accordingly.");
        });

        it("should throw an error for invalid input", () => {
            expect(() => planYourTrip.estimateExpenses("Invalid", 500)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(500, "Invalid")).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(50, -50)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(-50, 50)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 50)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(50, 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 2.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(2.5, 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(-50, 2.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(2.5, -50)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses("pesho", 2.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(2.5, "pesho")).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(undefined, "pesho")).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses("pesho", undefined)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(2.5, undefined)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(undefined, 2.5)).to.throw("Invalid Information!");
        });
    });
});