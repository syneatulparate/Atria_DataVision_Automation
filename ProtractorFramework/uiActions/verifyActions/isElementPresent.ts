import { ElementFinder } from "protractor";
const chai = require("chai").use(require("chai-as-promised"));

//clearconst isElementPresent = async (element) => {
//     /**
//      * Visible state of the give element
//      * @type {String}
//      */
//     let isElementPresent = await browser.isElementPresent(element);
//    // let elementPresent = false;
//   //  console.log("from true part!!!!!!!!!!!!!!");
//     if (isElementPresent) {
//         expect(isElementPresent).to.equal(true, `Expected element "${element}" to be visible`);
//         console.log("from true part");
//          isElementPresent=true;
//          console.log(isElementPresent+"=is element present")
//     } else {
//         expect(isElementPresent).to.equal(false, `Expected element "${element}" not to be visible`);
//         console.log("from false part");
//          isElementPresent=false;
//     }
const isElementPresent = async (elem: ElementFinder) => {
  /**
   * Visible state of the give element
   * @type {String}
   */
  return await elem.isDisplayed().then(
    function(isDisplayed) {
      console.log("Elemenet is present on the page");
      return isDisplayed;
    },
    function() {
      console.log("Element not present on the page");
      return false;
    }
  );
};

export { isElementPresent };
