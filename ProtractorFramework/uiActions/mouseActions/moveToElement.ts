import { browser, ElementFinder } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));

const moveToElement = async (elem: ElementFinder) => {
  await browser
    .actions()
    .mouseMove(elem)
    .perform();
};

export { moveToElement };
