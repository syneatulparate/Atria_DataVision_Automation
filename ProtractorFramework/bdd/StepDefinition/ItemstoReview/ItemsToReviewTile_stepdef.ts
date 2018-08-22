import { ItemsToReviewPage } from "../../Pages/ItemstoReview/ItemsToReviewPage";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { HomeDashboardPage } from "../../Pages/HomeDashboard/HomeDashboardPage";

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let itemstoreview: ItemsToReviewPage = new ItemsToReviewPage();
let dashboard: HomeDashboardPage = new HomeDashboardPage();

When(/User contact has a "([^"]*)?" issue triggered$/, async panel => {
  await staticWait(3000);
});

Then(
  /^User verify "([^"]*)?", "([^"]*)?" , "([^"]*)?" and "([^"]*)?" of triggered issue$/,
  async (title, type, contact, uploaddate) => {
    await staticWait(3000);
  }
);

When(/User click on plus icon of "([^"]*)?" issue$/, async panel => {
  await staticWait(3000);
});

Then(
  /^User verify "([^"]*)?" comment section of "([^"]*)?" issue$/,
  async (comment, panel) => {
    await staticWait(3000);
  }
);

Then(/^User navigates to DI-11 QR page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to DI-15 QR page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to TC-11 QR page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to TW-11 QR page$/, async () => {
  await staticWait(3000);
});

When(/User Click on outside of expanded view of tiles$/, async () => {
  await staticWait(3000);
  await clickElement(dashboard.footerele);
});

When(
  /Expanded view of items to Review tile gets close and user navigates to dashboard page$/,
  async () => {
    await staticWait(3000);
  }
);

When(/User clicks on contract button on items to Review tile$/, async () => {
  await staticWait(3000);
});
