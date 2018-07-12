import { browser, protractor, $, by, ExpectedConditions, ElementFinder } from "protractor";

const waitForObject = async (element) => browser.wait(async () => {
    await browser.sleep(2000);

    return await element.isDisplayed()
        .then(
            function (isDisplayed) {
                console.log("object displayed --> " + isDisplayed + " " + element);


                return isDisplayed;
            },
            function (error) {
                console.log("Object not found --> " + element);
                return false
            });
}, 30 * 1000);  


export { waitForObject }
const staticWait = async (TimeValue: number) => {
    await browser.sleep(TimeValue);
}

export { staticWait }

