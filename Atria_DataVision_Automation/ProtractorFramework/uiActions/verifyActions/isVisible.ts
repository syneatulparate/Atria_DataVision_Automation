const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


const isVisible = async(element, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isVisible = await (element).isDisplayed();

    

    if (falseCase) {
        expect(isVisible).to.not
            .equal(true, `Expected element "${element}" not to be visible`);
    } else {
        expect(isVisible).to
            .equal(true, `Expected element "${element}" to be visible`);
    }
};

export {isVisible}