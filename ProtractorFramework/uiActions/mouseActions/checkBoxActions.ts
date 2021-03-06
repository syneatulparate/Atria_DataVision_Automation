import { ElementFinder } from "protractor";
import { clickElement } from "./clickElement";
import { waitForObject } from "../waitActions/waitActions";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const selectCheckBox = async (element: ElementFinder) => {
  await element.isDisplayed().then(
    async isDisplayed => {
      await element.isSelected().then(
        async isSelected => {
          if (isSelected == false) {
            await clickElement(element);
            console.log("Checkbox selected");
          } else {
            console.log("Checkbox is already selected");
          }
        },
        function(error) {
          console.log("Object not found");
        }
      );
    },
    function(error) {
      console.log("Object is not displayed");
    }
  );
};

const deSelectCheckBox = async (element: ElementFinder) => {
  await waitForObject(element);
  await element.isDisplayed().then(
    async isDisplayed => {
      await element.isSelected().then(
        async isSelected => {
          if (isSelected == true) {
            await clickElement(element);
            console.log("Checkbox deselected");
          } else {
            console.log("Checkbox is already deselected");
          }
        },
        function(error) {
          console.log("Object not found");
        }
      );
    },
    function(error) {
      console.log("Object is not displayed");
    }
  );
};

export { selectCheckBox };
export { deSelectCheckBox };
