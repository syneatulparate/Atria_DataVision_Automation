import { HomeDashboardPage } from "../../Pages/HomeDashboard/HomeDashboardPage";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { element, by } from "protractor";
import { PressKey } from "../../../uiActions/keyboardActions/PressKey";

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let dashboard: HomeDashboardPage = new HomeDashboardPage();

When(/^User is on Dashboard page$/, async () => {
  await staticWait(3000);
  await expect(await dashboard.verifyLink("Dashboard")).to.equal(
    true,
    "Dashboard Link is displayed"
  );
});

Then(
  /^User expects that "([^"]*)?" link is displayed on Dashboard Page$/,
  async LinkName => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(LinkName)).to.equal(
      true,
      LinkName + "Link is displayed"
    );
  }
);

When(
  /^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" panel display on screen$/,
  async panel => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(panel)).to.equal(
      true,
      panel + "Link is displayed"
    );
  }
);

When(
  /^User hovers mouse on "([^"]*)?" icon and verify Resource panel display on screen$/,
  async panel => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(panel)).to.equal(
      true,
      panel + "Link is displayed"
    );
  }
);

When(
  /^User hovers mouse on "([^"]*)?" icon and verify Reporting panel display on screen$/,
  async panel => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(panel)).to.equal(
      true,
      panel + "Link is displayed"
    );
  }
);

When(
  /^User hovers mouse on "([^"]*)?" icon and verify Tools panel display on screen$/,
  async panel => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(panel)).to.equal(
      true,
      panel + "Link is displayed"
    );
  }
);

When(
  /^User hovers mouse on "([^"]*)?" icon and verify Contacts panel display on screen$/,
  async panel => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(panel)).to.equal(
      true,
      panel + "Link is displayed"
    );
  }
);

When(
  /^User hovers mouse on "([^"]*)?" icon and verify Dashboard panel display on screen$/,
  async panel => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(panel)).to.equal(
      true,
      panel + "Link is displayed"
    );
  }
);

Then(
  /^User expects that "([^"]*)?" link is displayed on Reporting panel$/,
  async LinkName => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(LinkName)).to.equal(
      true,
      LinkName + "Link is displayed"
    );
  }
);

Then(
  /^User expects that "([^"]*)?" link is displayed on Resources panel$/,
  async LinkName => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(LinkName)).to.equal(
      true,
      LinkName + "Link is displayed"
    );
  }
);

Then(
  /^User expects that "([^"]*)?" link is displayed on Tools panel$/,
  async LinkName => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(LinkName)).to.equal(
      true,
      LinkName + "Link is displayed"
    );
  }
);

Then(
  /^User expects that "([^"]*)?" link is displayed on Contacts panel$/,
  async LinkName => {
    await staticWait(3000);
    await expect(await dashboard.verifyLink(LinkName)).to.equal(
      true,
      LinkName + "Link is displayed"
    );
  }
);

When(
  /^User click on Add New button and Verify Manage Your Dashboard Tiles page is present$/,
  async () => {
    await staticWait(3000);
    await dashboard.clickAddnewTileLink();
    await staticWait(3000);
    await expect(await dashboard.verifyLink("Manage Tiles")).to.equal(
      true,
      "Manage Tiles is displayed"
    );
  }
);

When(
  /^User click on Manage Tiles button and Verify Manage Your Dashboard Tiles page is present$/,
  async () => {
    await staticWait(3000);
    await dashboard.clickManagetiles();
    await staticWait(3000);
    await expect(await dashboard.verifyLink("Manage Tiles")).to.equal(
      true,
      "Manage Tiles Link is displayed"
    );
  }
);

Then(/^Verify Add New Tiles section count$/, async () => {
  await dashboard.verifyAddtilesCount();
});

When(/^User click on Cancel Button$/, async () => {
  await dashboard.clickOnCancelButton();
});

When(/^User click on Save Button$/, async () => {
  await dashboard.clickOnSaveButton();
});

When(/^User click on Close icon$/, async () => {
  await dashboard.clickOnCloseIcon();
});

Then(
  /^User Naviagets to Dashboard page and Verify "([^"]*)?" is not added to dashboard$/,
  async Tilename => {
    await staticWait(3000);
    await dashboard.pagedown();
    await expect(await dashboard.verifyDashboardTiles(Tilename)).to.equal(
      false,
      Tilename + "Link is displayed"
    );
  }
);

Then(
  /^User Naviagets to Dashboard page and Verify "([^"]*)?" is added to dashboard$/,
  async Tilename => {
    await staticWait(5000);
    await expect(await dashboard.verifyDashboardTiles(Tilename)).to.equal(
      true,
      Tilename + "Link is displayed"
    );
  }
);

Then(
  /^User Naviagets to Dashboard page and Verify "([^"]*)?" is not removed from dashboard$/,
  async Tilename => {
    await staticWait(3000);
    await expect(await dashboard.verifyDashboardTiles(Tilename)).to.equal(
      true,
      Tilename + "Link is displayed"
    );
  }
);

Then(
  /^User Naviagets to Dashboard page and Verify "([^"]*)?" is removed from dashboard$/,
  async Tilename => {
    await staticWait(3000);
    await expect(await dashboard.verifyDashboardTiles(Tilename)).to.equal(
      false,
      Tilename + "Link is displayed"
    );
  }
);

Then(
  /^User can drag and drop "([^"]*)?" tiles from the Add New Tiles section into the Dashboard section and Verify Add New Tiles section count$/,
  async Tilename => {
    await staticWait(3000);
    await dashboard.selectElement(Tilename);
  }
);

Then(
  /^User can drag and drop "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/,
  async Tilename => {
    await staticWait(3000);
    await dashboard.dashboardToAddNewTiles(Tilename);
  }
);

When(
  /^User click on remove link of "([^"]*)?" tiles from the Dashboard section into the Add New Tiles section and Verify Add New Tiles section count$/,
  async Tilename => {
    await staticWait(3000);
    await dashboard.Removetile(Tilename);
  }
);

When(/^User Click on contract icon$/, async () => {
  await dashboard.clickOnContractIcon();
});

When(/^User enters "([^"]*)?" key$/, async key => {
  await clickElement(
    element(by.xpath("/html/body/table/thead/tr[2]/td/button"))
  );
  await PressKey(key);
});

When(/^User click on expand icon on a "([^"]*)?" tile$/, async Tilename => {
  await moveToElement(Tilename);
  await dashboard.clickOnExpandIcon();
});

Then(
  /^Verify "([^"]*)?" tile close the expanded  view and expand icon is displayed on screen$/,
  async () => {
    await clickElement(this.expandicon);
  }
);

Then(
  /^Verify "([^"]*)?" tile get expanded and contract icon is displayed on screen$/,
  async () => {
    await clickElement(this.expandicon);
  }
);

When(/^User click on RightCarrot icon$/, async () => {
  await clickElement(this.RightCarroticon);
});

Then(
  /^User should displayed new tiles and leftCarrot icon displayed on screen$/,
  async () => {
    await clickElement(this.LeftCarroticon);
  }
);

Then(
  /^verify RightCarrot icon displayed on Manage Your Dashboard Tiles panel$/,
  async () => {
    await clickElement(this.RightCarroticon);
  }
);

Then(/^Verify Add New Tiles section count greater than 4 tiles$/, async () => {
  await dashboard.verifyAddtilesCount();
});

When(
  /^User click on Close icon and user Naviagets to Dashboard page$/,
  async () => {
    await dashboard.clickOnCloseIcon();
    await staticWait(3000);
    await expect(await dashboard.verifyDashboardTiles("CONTACTS")).to.equal(
      true,
      "CONTACTS tile is displayed"
    );
    await staticWait(3000);
    await expect(
      await dashboard.verifyDashboardTiles("UPCOMING BIRTHDAY")
    ).to.equal(true, "UPCOMING BIRTHDAYS tile is displayed");
  }
);
Then(
  /^User click on Cancel Button and user Naviagets to Dashboard page$/,
  async () => {
    await dashboard.clickOnCancelButton();
    await staticWait(3000);
    await expect(await dashboard.verifyDashboardTiles("CONTACTS")).to.equal(
      true,
      "CONTACTS tile is displayed"
    );
    await staticWait(3000);
    await expect(
      await dashboard.verifyDashboardTiles("UPCOMING BIRTHDAY")
    ).to.equal(true, "UPCOMING BIRTHDAYS tile is displayed");
  }
);

When(
  /^User click on Save Button and user Naviagets to Dashboard page$/,
  async () => {
    await dashboard.clickOnSaveButton();
    await staticWait(3000);
    await expect(await dashboard.verifyDashboardTiles("CONTACTS")).to.equal(
      true,
      "CONTACTS tile is displayed"
    );
    await staticWait(3000);
    await expect(
      await dashboard.verifyDashboardTiles("UPCOMING BIRTHDAY")
    ).to.equal(true, "UPCOMING BIRTHDAYS tile is displayed");
    await staticWait(3000);
    await expect(
      await dashboard.verifyDashboardTiles("CONTACTS TO REVIEW")
    ).to.equal(true, "CONTACTS TO REVIEW tile is displayed");
  }
);

Then(
  /^User click on ResetAll button and Verify change in Dashboard section on manage Tiles$/,
  async () => {
    await dashboard.clickOnResetAllButton();
    await staticWait(3000);
  }
);

When(
  /^User hovers mouse on "([^"]*)?" icon and verify "([^"]*)?" page display on screen$/,
  async () => {
    await dashboard.verifyAddtilesCount();
  }
);

Then(
  /^User expects that Items to Review tiles is displayed on Dashboard panel$/,
  async Tilename => {
    await dashboard.verifyLink(Tilename);
  }
);

Then(
  /^User expects that Announcements & Events tiles is displayed on Dashboard panel$/,
  async Tilename => {
    await dashboard.verifyLink(Tilename);
  }
);

Then(
  /^User expects that Contacts tiles is displayed on Dashboard panel$/,
  async Tilename => {
    await dashboard.verifyLink(Tilename);
  }
);

Then(
  /^User move to "([^"]*)?" tile, hovers on information icon and verify "([^"]*)?"$/,
  async (Tilename, information) => {
    await dashboard.MovetoTileElement(Tilename, information);
    // await expect(await dashboard.verifyElement(Tilename)).to.equal(true, Tilename + 'Link is displayed')
  }
);

Then(
  /^User change "([^"]*)?" tile width and verify width of tile size "([^"]*)?" column$/,
  async (Tilename, information) => {
    await dashboard.ClickChangeColumnwidth(Tilename, information);
    await dashboard.clickOnSaveButton();
    await dashboard.VerifyChangeColumnwidth(Tilename, information);
    // await expect(
    //   await dashboard.VerifyChangeColumnwidth(Tilename, information)
    // ).to.equal(true, "passed");
    // await expect(await dashboard.VerifyChangeColumnwidth(Tilename, information)).to.equal(true, Tilename + 'Link is displayed')
  }
);
When(
  /^User verify "([^"]*)?" , "([^"]*)?" and "([^"]*)?" Dashboard page is present$/,
  async (firstname, lastname, designation) => {
    await staticWait(3000);
    await expect(await dashboard.verifyDashboardTiles("profileimage")).to.equal(
      true,
      "profile image is displayed"
    );
    await dashboard.verifyDetails(dashboard.designationele, designation);
  }
);

Then(/^User verify "([^"]*)?"$/, async welcomemsg => {
  await staticWait(3000);
  await dashboard.verifyDetails(dashboard.welcomemsg, welcomemsg);
});
