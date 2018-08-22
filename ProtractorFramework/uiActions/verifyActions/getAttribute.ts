import { ElementFinder } from "protractor";

const getAttribute = async (elem: ElementFinder, attributeName) => {
  return await elem.getAttribute(attributeName).then(function(attributeValue) {
    return attributeValue;
  });
};

export { getAttribute };
