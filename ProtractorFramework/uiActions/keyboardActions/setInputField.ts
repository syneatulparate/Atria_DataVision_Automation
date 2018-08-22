import { browser } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));

const enterText = async (element, value) => {
  /**
   * The command to perform on the browser object (addValue or setValue)
   * @type {String}
   */

  await browser
    .manage()
    .timeouts()
    .implicitlyWait(0);
  await browser.wait(function() {
    browser.sleep(2000);
    return element.isDisplayed().then(
      function(isDisplayed) {
        console.log("object displayed --> " + element);

        return isDisplayed;
      },
      function() {
        console.log("Object not found --> " + element);

        return false;
      }
    );
  }, 40 * 1000);

  await element.sendKeys(value);
};

export { enterText };
