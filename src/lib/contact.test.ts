import { describe, expect, it } from "bun:test";
import { createContactEmailUrl } from "./contact";

describe("createContactEmailUrl", () => {
  it("opens a ready-to-send message addressed to the contact email", () => {
    const url = new URL(createContactEmailUrl("Book launch", "Hello Emmanuel"));

    expect(url.protocol).toBe("mailto:");
    expect(url.pathname).toBe("emmanuel@hq360.space");
    expect(url.searchParams.get("subject")).toBe("Book launch");
    expect(url.searchParams.get("body")).toBe("Hello Emmanuel");
  });
});