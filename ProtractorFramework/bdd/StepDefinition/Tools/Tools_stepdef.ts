import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { ToolsPage } from "../../Pages/Tools/ToolsPage";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
import { HomeDashboardPage } from "../../Pages/HomeDashboard/HomeDashboardPage";

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let dashboard: HomeDashboardPage = new HomeDashboardPage();
let tools: ToolsPage = new ToolsPage();

When(/^User click on "([^"]*)?" link$/, async welcomemsg => {
  await staticWait(3000);
  await tools.clickOnLink(welcomemsg);
});

Then(/^User navigates to SendMyDocs page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifySendmyDoc();
});

Then(/^User navigates to MPV App Usage page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyMPVAppUsage();
});

Then(/^User navigates to Albridge Wealth Reporting page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyAlbridgeWealthReporting();
});

Then(/^User navigates to VA Search Engine Tool page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyVASearchEngineTool();
});

Then(/^User navigates to Pershing Dashboard page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyPershingDashboard();
});

Then(/^User navigates to fundVISION page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyfundVISION();
});

Then(/^User navigates to MuniCenter page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyMuniCenter();
});

Then(/^User navigates to Cam Portal page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyCamPortal();
});

Then(/^User navigates to Administration page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyAdministration();
});

Then(
  /^User navigates to Active BuildMyProfile™ Forms page$/,
  async welcomemsg => {
    await staticWait(3000);
    await tools.verifyActiveBuildMyProfile();
  }
);

Then(/^User navigates to Blotter page$/, async welcomemsg => {
  await staticWait(3000);
  await tools.verifyBlotter();
});

Then(
  /^User hovers mouse on Tools icon and verify Tools panel display on screen$/,
  async welcomemsg => {
    await staticWait(3000);
    await moveToElement(tools.toolsicon);
    await staticWait(3000);
    await expect(await dashboard.verifyLink("Tools")).to.equal(
      true,
      "Resources Link is displayed"
    );
  }
);
