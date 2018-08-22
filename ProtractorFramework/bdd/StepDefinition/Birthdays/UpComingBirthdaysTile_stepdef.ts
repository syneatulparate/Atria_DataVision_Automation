import { browser, protractor } from "protractor";
import { UpComingBirthdaysTilePage } from "../../Pages/BirthDays/UpComingBirthdaysTilePage";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let upComingBirthdays: UpComingBirthdaysTilePage = new UpComingBirthdaysTilePage();

When(
  /^User hovers mouse on email Icon for user on upcoming bithdays tile$/,
  async () => {
    await staticWait(5000);
    await upComingBirthdays.moveToMessageIcon();
  }
);

When(
  /^User hovers mouse on phone Icon for user on upcoming bithdays tile$/,
  async () => {
    await upComingBirthdays.moveToPhoneIcon();
  }
);

When(
  /^User hovers mouse on comments Icon for user on upcoming bithdays tile$/,
  async () => {
    await upComingBirthdays.moveToCommentIcon();
  }
);

Then(
  /^User expect that primary email of the user is displayed on upcoming bithdays tile$/,
  async () => {
    expect(await upComingBirthdays.verifyPrimaryEmail()).to.equal(
      true,
      "Primary Email is not displayed"
    );
  }
);

Then(
  /^User expect that contact number of the user is displayed on upcoming bithdays tile$/,
  async () => {
    expect(await upComingBirthdays.verifyPhoneNumber()).to.equal(
      true,
      "Phone number is not displayed"
    );
  }
);

Then(
  /^User expect that number of "([^"]*)?" the user is displayed on upcoming bithdays tile$/,
  async comments => {
    expect(await upComingBirthdays.verifyPhoneNumber()).to.equal(
      true,
      "Phone number is not displayed"
    );
  }
);

When(/^User selects "([^"]*)?" from the dropdown$/, async viewOption => {
  await upComingBirthdays.selectViewBirthdays(viewOption);
});

When(/^User clicks on the expand icon on upcoming bithdays tile$/, async () => {
  await upComingBirthdays.clickOnExpandIconContacts();
});

Then(
  /^User expect that contraction button is displayed on upcoming bithdays tile$/,
  async () => {
    await upComingBirthdays.verifyContractionButton();
  }
);

When(
  /^User clicks on contraction button on upcoming bithdays tile$/,
  async () => {
    await upComingBirthdays.clickOnContractIconContacts();
  }
);

Then(
  /^User expects that tile is closed and dashboard is displayed$/,
  async () => {}
);

When(/^User clicks outside of tile$/, async () => {});

When(/^User taps on Esc button on keyboard$/, async () => {
  await upComingBirthdays.tapEscButton();
});

When(/^User selects My Owned on upcoming bithdays tile$/, async () => {
  await upComingBirthdays.clickOnMyOwned();
});

Then(
  /^User expect that system displays contacts for "([^"]*)?" on upcoming birthday tile$/,
  async viewCategory => {
    await staticWait(3000);
    expect(await upComingBirthdays.verifyContactNames(viewCategory)).to.equal(
      true,
      "User names not displayed"
    );
  }
);

When(/^User selects All Contacts on upcoming bithdays tile$/, async () => {
  await upComingBirthdays.clickOnAllContacts();
});

Then(
  /^User expect that system displays all Public, Protected and Private contacts within the user's workgroup$/,
  async () => {}
);

When(/^User clicks on View birthdays by dropdown$/, async () => {
  await upComingBirthdays.clickOnDropDownIcon();
});

Then(
  /^User expects that Today,Next Week and Next Two Week options are displayed$/,
  async () => {
    await staticWait(3000);
    expect(await upComingBirthdays.verifyDropDownMenu()).to.equal(
      true,
      "Date range Drop down menu is not displayed as expected."
    );
  }
);

Then(
  /^User expects that Expand icon and contact directory link are displayed$/,
  async () => {
    await staticWait(3000);
    expect(await upComingBirthdays.verifyExpandIconAndContactsLink()).to.equal(
      true,
      "Expand icon and go to contacts directory link is not displayed"
    );
  }
);

When(
  /^User selects "([^"]*)?" from the view by dropdown$/,
  async viewOption => {
    await upComingBirthdays.selectViewBirthdays(viewOption);
  }
);

When(
  /^User hovers mouse on history event Icon for user on upcoming birthdays tile$/,
  async () => {}
);

Then(
  /^User expects that history notes popup box is displayed on upcoming birthdays tile$/,
  async () => {}
);
