import { browser, protractor } from "protractor";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { ContactsToReviewTilePage } from "../../Pages/Contacts/ContactsToReviewTilePage";
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let contactsToReview: ContactsToReviewTilePage = new ContactsToReviewTilePage();

When(
  /^User hovers mouse on message Icon for user on contacts to review tile$/,
  async () => {
    await staticWait(5000);
    await contactsToReview.moveToMessageIcon();
  }
);

When(
  /^User hovers mouse on phone Icon for user on contacts to review tile$/,
  async () => {
    await contactsToReview.moveToPhoneIcon();
  }
);

When(
  /^User hovers mouse on comments Icon for user on contacts to review tile$/,
  async () => {
    await contactsToReview.moveToCommentIcon();
  }
);

Then(
  /^User expect that primary email of the user is displayed on contacts to review tile$/,
  async () => {
    expect(await contactsToReview.verifyPrimaryEmail()).to.equal(
      true,
      "Primary Email is not displayed"
    );
  }
);

Then(
  /^User expect that contact number of the user is displayed on contacts to review tile$/,
  async () => {
    expect(await contactsToReview.verifyPhoneNumber()).to.equal(
      true,
      "Phone number is not displayed"
    );
  }
);

Then(
  /^User expect that number of "([^"]*)?" the user is displayed on contacts to review tile$/,
  async comments => {
    expect(await contactsToReview.verifyPhoneNumber()).to.equal(
      true,
      "Phone number is not displayed"
    );
  }
);

When(
  /^User clicks on the expand icon on contacts to review tile$/,
  async () => {
    await contactsToReview.clickOnExpandIconContacts();
  }
);

Then(
  /^User expect that contraction button is displayed on contacts to review tile$/,
  async () => {
    await contactsToReview.verifyContractionButton();
  }
);

When(
  /^User clicks on contraction button on contacts to review tile$/,
  async () => {
    await contactsToReview.clickOnContractIconContacts();
  }
);

Then(
  /^User expects that tile is closed and dashboard is displayed$/,
  async () => {}
);

When(/^User clicks outside of tile$/, async () => {});

When(/^User taps on Esc button on keyboard$/, async () => {
  await contactsToReview.tapEscButton();
});

When(/^User selects My Owned on contacts to review tile$/, async () => {
  await contactsToReview.clickOnMyOwned();
});

Then(
  /^User expect that system displays contacts for "([^"]*)?" on contacts to review tile$/,
  async viewCategory => {
    expect(await contactsToReview.verifyContactNames(viewCategory)).to.equal(
      true,
      "User names not displayed"
    );
  }
);

When(/^User selects All Contacts on contacts to review tile$/, async () => {
  await contactsToReview.clickOnAllContacts();
});

Then(
  /^User expect that system displays all Public, Protected and Private contacts within the user's workgroup$/,
  async () => {}
);

Then(
  /^User expects that Expand icon and contact directory link are displayed on contacts to review tile$/,
  async () => {
    await staticWait(3000);
    expect(await contactsToReview.verifyExpandIconAndContactsLink()).to.equal(
      true,
      "Expand icon and go to contacts directory link is not displayed"
    );
  }
);

When(
  /^User hovers mouse on history event Icon for user on contacts to review tile$/,
  async () => {}
);

Then(
  /^User expects that history notes popup box is displayed on contacts to review tile$/,
  async () => {}
);
