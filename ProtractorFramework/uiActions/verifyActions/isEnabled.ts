import { $ } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const isEnabled = async (element, falseCase) => {
  /**
   * Visible state of the give element
   * @type {String}
   */
  const isEnabled = await $(element).isEnabled();

  if (falseCase) {
    expect(isEnabled).to.not.equal(
      true,
      `Expected element "${element}" not to be Enabled`
    );
  } else {
    expect(isEnabled).to.equal(
      true,
      `Expected element "${element}" to be Enabled`
    );
  }
};

export { isEnabled };
