import { browser, ElementFinder } from "protractor";
import { code as dragAndDrop } from "html-dnd";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const getElemLocation = async elem => {
  await browser
    .actions()
    .mouseMove(elem)
    .mouseUp().perform;
};
export { getElemLocation };

const dragElement = async (
  source: ElementFinder,
  destination: ElementFinder
) => {
  await browser
    .actions()
    .dragAndDrop(source, destination)
    .mouseUp()
    .perform();
  await browser.sleep(5000);
};
export { dragElement };

const dragAndDropElement = async (
  source: ElementFinder,
  destination: ElementFinder
) => {
  await browser.driver.executeScript(
    dragAndDrop,
    source.getWebElement(),
    destination.getWebElement()
  );
  await browser.sleep(5000);
};
export { dragAndDropElement };
