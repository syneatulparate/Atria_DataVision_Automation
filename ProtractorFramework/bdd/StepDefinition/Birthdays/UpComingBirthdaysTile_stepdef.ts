import { browser, protractor } from "protractor"
import { UpComingBirthdaysTilePage } from "../../Pages/BirthDays/UpComingBirthdaysTilePage"
const { Given } = require("cucumber")
const { When, Then } = require("cucumber")
const chai = require("chai").use(require("chai-as-promised"))
const expect = chai.expect
let upComingBirthdays: UpComingBirthdaysTilePage = new UpComingBirthdaysTilePage()

When(/^User hovers mouse on message Icon for "([^"]*)?" on upcoming bithdays tile$/, async (userName) => {
    await upComingBirthdays.moveToMessageIcon(userName)
})

When(/^User hovers mouse on phone Icon for "([^"]*)?" on upcoming bithdays tile$/, async (userName) => {
    await upComingBirthdays.moveToPhoneIcon(userName)
})

When(/^User hovers mouse on comments Icon for "([^"]*)?" on upcoming bithdays tile$/, async (userName) => {
    await upComingBirthdays.moveToCommentIcon(userName)
})

Then(/^User expect that "([^"]*)?" primary email of the user is displayed on upcoming bithdays tile$/, async (email) => {
    expect(await upComingBirthdays.verifyPrimaryEmail(email)).to.equal(true, 'Primary Email is not displayed')
})

Then(/^User expect that "([^"]*)?" number of the user is displayed on upcoming bithdays tile$/, async (phoneNumber) => {
    expect(await upComingBirthdays.verifyPhoneNumber(phoneNumber)).to.equal(true, 'Phone number is not displayed')
})

Then(/^User expect that number of "([^"]*)?" the user is displayed on upcoming bithdays tile$/, async (comments) => {
    expect(await upComingBirthdays.verifyPhoneNumber(comments)).to.equal(true, 'Phone number is not displayed')
})

When(/^User selects "([^"]*)?" from the dropdown$/, async (viewOption) => {
    await upComingBirthdays.selectViewBirthdays(viewOption)
})

When(/^User clicks on Go to Contact Directory link$/, async () => {
    await upComingBirthdays.clickOnGoToContactDirectory()
})

When(/^User clicks on the expand icon on upcoming bithdays tile$/, async () => {
    await upComingBirthdays.clickOnExpandIconContacts()
})

Then(/^User expect that contraction button is displayed on upcoming bithdays tile$/, async () => {
    await upComingBirthdays.verifyContractionButton()
})

When(/^User clicks on contraction button on upcoming bithdays tile$/, async () => {
    await upComingBirthdays.clickOnContractIconContacts()
})

Then(/^User expects that tile is closed and dashboard is displayed$/, async () => {

})

When(/^User clicks outside of tile$/, async () => {

})

When(/^User taps on Esc button on keyboard$/, async () => {
    await upComingBirthdays.tapEscButton()
})

When(/^User clicks on the My Owned on upcoming bithdays tile$/, async () => {

})

Then(/^User expect that system displays his own contacts, and contacts of people he assists on upcoming birthdays tile$/, async () => {

})

When(/^User clicks on the All Contacts on upcoming bithdays tile$/, async () => {

})

Then(/^User expect that system displays all Public, Protected and Private contacts within the user's workgroup$/, async () => {

})

When(/^User clicks on View birthdays by dropdown$/, async () => {

})

Then(/^User expects that Today,Next Week and Next Two Week options are displayed$/, async () => {

})













