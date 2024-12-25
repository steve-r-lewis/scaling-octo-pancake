// src/utils/generate-uuid.spec.ts
import { generateUUID } from "./src/generate-uuid";

describe("generateVersion4Uuid", () => {
  it("should return a valid UUID in the correct format", () => {
    const uuid = generateUUID();
    expect(uuid).toBeInstanceOf(String);
    expect(uuid.length).toBe(36); // Length of a version 4 UUID
    expect(uuid.slice(0, 8)).not.toEqual("00000000"); // First 8 characters should not be all zeros
  });

  it("should throw an error when required property is missing", () => {
    expect(() => validateInput()).toThrowError("Required property is missing");
  });
});
