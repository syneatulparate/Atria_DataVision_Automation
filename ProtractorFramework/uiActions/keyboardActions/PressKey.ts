import { browser, protractor } from "protractor";
import { staticWait } from "../waitActions/waitActions";
const chai = require("chai").use(require("chai-as-promised"));

const PressKey = async key => {
  /**
   * The command to perform on the browser object (addValue or setValue)
   * @type {String}
   */
  await staticWait(3000);
  switch (key) {
    case "escape":
      await browser
        .actions()
        .sendKeys(protractor.Key.ESCAPE)
        .perform();
      break;
    case "down":
      await browser
        .actions()
        .sendKeys(protractor.Key.DOWN)
        .perform();
      break;
    case "up":
      await browser
        .actions()
        .sendKeys(protractor.Key.UP)
        .perform();
      break;
    case "tab":
      await browser
        .actions()
        .sendKeys(protractor.Key.TAB)
        .perform();
      break;
    case "pagedown":
      await browser
        .actions()
        .sendKeys(protractor.Key.PAGE_DOWN)
        .perform();
      break;
    case "pageup":
      await browser
        .actions()
        .sendKeys(protractor.Key.PAGE_UP)
        .perform();
      break;
    case "clear":
      await browser
        .actions()
        .sendKeys(protractor.Key.CLEAR)
        .perform();
      break;
    case "cancel":
      await browser
        .actions()
        .sendKeys(protractor.Key.CANCEL)
        .perform();
      break;
  }
};

export { PressKey };
