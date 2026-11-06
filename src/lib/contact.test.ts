import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createContactEmailUrl } from "./contact";

describe("createContactEmailUrl", () => {
  it("opens a ready-to-send message addressed to the contact email", () => {
    const url = new URL(createContactEmailUrl("Book launch", "Hello Emmanuel"));

    assert.equal(url.protocol, "mailto:");
    assert.equal(url.pathname, "emmanuel@hq360.space");
    assert.equal(url.searchParams.get("subject"), "Book launch");
    assert.equal(url.searchParams.get("body"), "Hello Emmanuel");
  });
});