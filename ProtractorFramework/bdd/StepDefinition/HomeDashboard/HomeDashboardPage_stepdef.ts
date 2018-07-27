import { browser, protractor } from "protractor";
import { HomeDashboardPage } from "../../Pages/HomeDashboard/HomeDashboardPage";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { checkTitleContains } from "../../../uiActions/verifyActions/checkTitleContains";
const { Given } = require("cucumber");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let dashboard: HomeDashboardPage = new HomeDashboardPage();
When(/^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" panel display on screen$/, async(panel) => {
    await clickElement(panel)
    await staticWait(3000)
    await expect(await dashboard.verifyLink(panel)).to.equal(true, panel + 'Link is displayed');
});

Then(/^User expects that "([^"]*)?" link is displayed on Reporting panel$/, async (LinkName) => {
    await staticWait(3000)
    await expect(await dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
});

Then(/^User expects that "([^"]*)?" link is displayed on Resources panel$/, async (LinkName) => {
    await staticWait(3000)
    await expect(await dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
   
});

Then(/^User expects that "([^"]*)?" link is displayed on Tools panel$/, async (LinkName) => {
    await staticWait(3000)
    await expect(await dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
   
});

Then(/^User expects that "([^"]*)?" link is displayed on Contacts panel$/, async (LinkName) => {
    await staticWait(3000)
    await expect(await dashboard.verifyLink(LinkName)).to.equal(true, LinkName + 'Link is displayed');
   
});

When(/^User click on "([^"]*)?" button and Verify Manage Your Dashboard Tiles page is present$/, async (managetiles) => {
    await dashboard.clickManagetiles()
    await checkTitleContains(managetiles);
   // await dashboard.verifyLink("test")
});
Then(/^Verify Add New Tiles section count$/, async () => {
    await dashboard.verifyAddtilesCount()
});
When(/^User click on Cancel Button$/, async () => {
    await clickElement(this.cancelbutton)
    
});
When(/^User click on Save Button$/, async () => {
    await clickElement(this.savebutton)
    
});
When(/^User click on Close icon$/, async () => {
    await clickElement(this.Closeicon)
    
});
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is not added to dashboard$/, async (Tilename) => {
    await staticWait(3000)
    await expect(await dashboard.verifyLink(Tilename)).to.equal(false, Tilename + 'Link is displayed');
    await dashboard.verifyLink(Tilename)
});
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is added to dashboard$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
});
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is not removed from dashboard$/, async (Tilename) => {
    await staticWait(3000)
    await expect(await dashboard.verifyLink(Tilename)).to.equal(true, Tilename + 'Link is displayed');
});
Then(/^User Naviagets to Dashboard page and Verify "([^"]*)?" is removed from dashboard$/, async (Tilename) => {
    await staticWait(3000)
    await expect(await dashboard.verifyLink(Tilename)).to.equal(false, Tilename + 'Link is displayed');
});

Then(/^User can drag and drop "([^"]*)?" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
});
Then(/^User can drag and drop "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
});
When(/^User can drag and drop "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
});
When(/^User click on remove link of "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
});
When(/^User Click on contract icon$/, async () => {
    await dashboard.clickOnContractIcon()
    
});
When(/^User enters escape key$/, async () => {
    await dashboard.PressEscape()
    
});
When(/^User click on expand icon on a "([^"]*)?" tile$/, async (Tilename) => {
    await moveToElement(Tilename)
    await dashboard.clickOnExpandIcon()
    
});  
Then(/^Verify "([^"]*)?" tile close the expanded  view and expand icon is displayed on screen$/, async (Tilename) => {
    await clickElement(this.expandicon)
    
});
Then(/^Verify "([^"]*)?" tile get expanded and contract icon is displayed on screen$/, async (Tilename) => {
    await clickElement(this.expandicon)
    
});
When(/^User click on RightCarrot icon$/, async () => {
    await clickElement(this.RightCarroticon)
    
});
Then(/^User should displayed new tiles and leftCarrot icon displayed on screen$/, async (Tilename) => {
    await clickElement(this.LeftCarroticon)
    
}); 
Then(/^verify RightCarrot icon displayed on Manage Your Dashboard Tiles panel$/, async (Tilename) => {
    await clickElement(this.RightCarroticon)
    
});
Then(/^Verify Add New Tiles section count greater than 4 tiles$/, async (Tilename) => {
    await dashboard.verifyAddtilesCount()
    
});
When(/^User click on Close icon and user Naviagets to Dashboard page$/, async (Tilename) => {
    await dashboard.verifyAddtilesCount()
    
});
When(/^User click on Cancel Button and user Naviagets to Dashboard page$/, async (Tilename) => {
    await dashboard.verifyAddtilesCount()
    
});
When(/^User click on Save Button and user Naviagets to Dashboard page$/, async (Tilename) => {
    await dashboard.verifyAddtilesCount()
    
});
Then(/^USer click on ResetAll button and Verify change in Dashboard section on manage Tiles$/, async (Tilename) => {
    await dashboard.verifyAddtilesCount()
    
});
When(/^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" page display on screen$/, async (Tilename) => {
    await dashboard.verifyAddtilesCount()
    
});
Then(/^User expects that Items to Review tiles is displayed on Dashboard panel$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
    
});
Then(/^User expects that Announcements & Events tiles is displayed on Dashboard panel$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
    
});
Then(/^User expects that Contacts tiles is displayed on Dashboard panel$/, async (Tilename) => {
    await dashboard.verifyLink(Tilename)
    
});
Then(/^User move to "([^"]*)?" tile and	mouse hovers on information icon$/, async (Tilename) => {
    await moveToElement(Tilename)
    await moveToElement(this.informationicon)
    
});
When(/^Verify "([^"]*)?"$/, async (Tilename) => {
    
    await dashboard.VerifyInformaion(Tilename)
    
});
