import { browser, protractor } from "protractor";
import { ContactsTilePage } from "../../Pages/Contacts/ContactsTilePage";
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let contactsTile: ContactsTilePage = new ContactsTilePage();

When(
  /^User hovers mouse on message Icon for "([^"]*)?" on Contacts tile$/,
  async userName => {
    await contactsTile.moveToMessageIcon(userName);
  }
);

When(
  /^User hovers mouse on phone Icon for "([^"]*)?" on Contacts tile$/,
  async userName => {
    await contactsTile.moveToPhoneIcon(userName);
  }
);

When(
  /^User hovers mouse on comments Icon for "([^"]*)?" on Contacts tile$/,
  async userName => {
    await contactsTile.moveToCommentIcon(userName);
  }
);

Then(
  /^User expect that "([^"]*)?" primary email of the user is displayed on Contacts tile$/,
  async email => {
    expect(await contactsTile.verifyPrimaryEmail(email)).to.equal(
      true,
      "Primary Email is not displayed"
    );
  }
);

Then(
  /^User expect that "([^"]*)?" number of the user is displayed on Contacts tile$/,
  async phoneNumber => {
    expect(await contactsTile.verifyPhoneNumber(phoneNumber)).to.equal(
      true,
      "Phone number is not displayed"
    );
  }
);

Then(
  /^User expect that number of "([^"]*)?" the user is displayed on Contacts tile$/,
  async comments => {
    expect(await contactsTile.verifyPhoneNumber(comments)).to.equal(
      true,
      "Phone number is not displayed"
    );
  }
);

When(
  /^User selects "([^"]*)?" from the dropdown on Contacts tile$/,
  async viewOption => {
    await contactsTile.selectViewCategory(viewOption);
  }
);

When(/^User clicks on Go to Contacts link$/, async () => {
  await contactsTile.clickOnGoToContact();
});

Then(
  /^User expect "([^"]*)?" contact screen is displayed on Contacts tile$/,
  async contactScreen => {}
);

When(/^User clicks on the expand icon on Contacts tile$/, async () => {
  await contactsTile.clickOnExpandIconContacts();
});

Then(
  /^User expect that contraction button is displayed on Contacts tile$/,
  async () => {
    await contactsTile.verifyContractionButton();
  }
);

When(/^User clicks on contraction button on Contacts tile$/, async () => {
  await contactsTile.clickOnContractIconContacts();
});

// Then(/^User expects that tile is closed and dashboard is displayed$/, async()=>{

// })

// When(/^User clicks outside of tile$/, async () => {

// })

// When(/^User taps on Esc button on keyboard$/, async () => {
//     await contactsTile.tapEscButton()
// })
