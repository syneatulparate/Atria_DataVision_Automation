import { ElementFinder } from "protractor";

const chai = require("chai").use(require("chai-as-promised"));

const clearInputField = async (elem: ElementFinder) => {
  /**
   * The command to perform on the browser object (addValue or setValue)
   * @type {String}
   */

  await elem.clear();
};

export { clearInputField };
