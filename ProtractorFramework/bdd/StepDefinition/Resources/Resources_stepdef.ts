import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { ResourcesPage } from "../../Pages/Resources/ResourcesPage";
import { ToolsPage } from "../../Pages/Tools/ToolsPage";
import { HomeDashboardPage } from "../../Pages/HomeDashboard/HomeDashboardPage";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let dashboard: HomeDashboardPage = new HomeDashboardPage();
let resources: ResourcesPage = new ResourcesPage();
let tools: ToolsPage = new ToolsPage();
When(/^User click on "([^"]*)?" link$/, async linkname => {
  await staticWait(3000);
  await resources.clickOnLink(linkname);
});

Then(/^User navigates to Department & Staff Directory page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Updates page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to DOL Corner page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Product Marketing page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Program Development Center page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Market Commentary page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Training Center page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Compliance page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Operations page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Bonds page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to FINRA Registration & Licensing page$/, async () => {
  await staticWait(3000);
});

Then(/^User navigates to Reference page$/, async () => {
  await staticWait(3000);
});

Then(
  /^User hovers mouse on Resource icon and verify Resource panel display on screen$/,
  async () => {
    await staticWait(3000);
    await moveToElement(resources.resourcesicon);
    await staticWait(3000);
    await expect(await dashboard.verifyLink("Resources")).to.equal(
      true,
      "Resources Link is displayed"
    );
  }
);
