import { expect } from "chai";
import * as marky from "marky";
import measure from "../src";

const identifier = "custom_identifier";

class C {
  @measure()
  public testFn() {
    for (let i = 0; i < 2000000; i++) {
      // do something
    }
    return this.helperFn();
  }

  @measure(identifier)
  public customFn() {
    return 1;
  }

  private helperFn() {
    return true;
  }
}

describe("@measure()", () => {
  const c = new C();

  function testMarkyEntry(id: string, amount?: number) {
    const entries = marky.getEntries();
    if (amount) {
      expect(entries).to.have.lengthOf(amount);
    }
    expect(entries.some((entry) => entry.name === id)).to.eq(true);
  }

  it("calls the original method an measures its performance", () => {
    expect(c.testFn()).to.eq(true);
    testMarkyEntry("testFn");
  });

  it("assigns a custom measurement identifier", () => {
    expect(c.customFn()).to.eq(1);
    testMarkyEntry(identifier, 2);
  });
});
