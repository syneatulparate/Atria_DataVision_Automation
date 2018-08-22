import {
  element,
  by,
  ElementFinder,
  $,
  browser,
  ExpectedConditions,
  ElementArrayFinder,
  protractor
} from "protractor";
import { enterText } from "../../../uiActions/keyboardActions/setInputField";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText";
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent";
import {
  alertAccept,
  alertDismiss
} from "../../../uiActions/alertActions/alertAction";
import {
  waitForObject,
  staticWait
} from "../../../uiActions/waitActions/waitActions";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
import {
  selectCheckBox,
  deSelectCheckBox
} from "../../../uiActions/mouseActions/checkBoxActions";
import { checkTitleContains } from "../../../uiActions/verifyActions/checkTitleContains";
import { Key } from "selenium-webdriver";
import { EntitlementPage } from "../Roles&Permissions/EntitlementPage";
import { dragAndDropElement } from "../../../uiActions/mouseActions/dragElement";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class HomeDashboardPage {
  public footerele: ElementFinder;
  public resourcesicon: ElementFinder;
  public contacticon: ElementFinder;
  public toolsicon: ElementFinder;
  public reporticon: ElementFinder;
  public logoicon: ElementFinder;
  public dashboardicon: ElementFinder;
  public informationicon: ElementFinder;
  public ReportingElem: ElementFinder;
  public ScheduledElem: ElementFinder;
  public DirectoryElem: ElementFinder;
  public RepositoryElem: ElementFinder;
  public ActivereportsElem: ElementFinder;
  public QuickAccessElem: ElementFinder;
  public ResourcesElem: ElementFinder;
  public DepartmentStaffDirectoryElem: ElementFinder;
  public SendMyScansElem: ElementFinder;
  public UpdatesElem: ElementFinder;
  public DOLCornerElem: ElementFinder;
  public ProductMarketingElem: ElementFinder;
  public MarketCommentaryElem: ElementFinder;
  public ProductDevelopmentCenterElem: ElementFinder;
  public TrainingCenterElem: ElementFinder;
  public ComplianceElem: ElementFinder;
  public OperationsElem: ElementFinder;
  public BondsMLCDsElem: ElementFinder;
  public FINRARegisLicensingElem: ElementFinder;
  public HelpElem: ElementFinder;
  public ReferenceElem: ElementFinder;
  public ToolsElem: ElementFinder;
  public SendMyDocsElem: ElementFinder;
  public MPVAppUsageElem: ElementFinder;
  public AlbridgeWealthReportingElem: ElementFinder;
  public VASearchEngineToolElem: ElementFinder;
  public PershingdashboardElem: ElementFinder;
  public fundVISIONElem: ElementFinder;
  public CAMPortalElem: ElementFinder;
  public MuniCenterElem: ElementFinder;
  public AdministrationElem: ElementFinder;
  public ContactsElem: ElementFinder;
  public ActiveContactsElem: ElementFinder;
  public MYOWNEDElem: ElementFinder;
  public RECENTLYVIEWEDElem: ElementFinder;
  public MOSTVIEWEDElem: ElementFinder;
  public CreateaNewContactElem: ElementFinder;
  public ItemstoReviewelem: ElementFinder;
  public AnnouncementsEventsElem: ElementFinder;
  public managetilesLink: ElementFinder;
  public savebButton: ElementFinder;
  public cancelbButton: ElementFinder;
  public CloseIcon: ElementFinder;
  public ContractIcon: ElementFinder;
  public ExpandIcon: ElementFinder;
  public leftcarroticon: ElementFinder;
  public rightcarroticon: ElementFinder;
  public RemoveButton: ElementFinder;
  public logoutlink: ElementFinder;
  public addnew: ElementFinder;
  public resetallbtn: ElementFinder;
  public getelement: ElementFinder;
  public upcomingbdaytile: ElementFinder;
  public contactstile: ElementFinder;
  public contacttoreviewtile: ElementFinder;
  public source: ElementFinder;
  public destination: ElementFinder;
  public designationele: ElementFinder;
  public nameEle: ElementFinder;
  public profileimage: ElementFinder;
  public welcomemsg: ElementFinder;
  public tilewidthele: ElementFinder;

  constructor() {
    this.footerele = element(by.css("dv-layout-footer"));
    this.logoicon = element(by.css("img.masthead-logo"));
    this.resourcesicon = element(by.css(" ul > li:nth-child(2) > img"));
    this.contacticon = element(by.css(" ul > li:nth-child(3) > img"));
    this.reporticon = element(by.css(" ul > li:nth-child(4) > img"));
    this.toolsicon = element(by.css(" ul > li:nth-child(6) > img"));
    this.dashboardicon = element(by.css(" ul > li:nth-child(1) > img"));
    this.informationicon = element(by.css(".tooltip"));
    this.ReportingElem = element(by.xpath("//*[text()='Reports']"));
    this.ScheduledElem = element(by.id(""));
    this.DirectoryElem = element(by.id(""));
    this.RepositoryElem = element(by.id(""));
    this.ActivereportsElem = element(by.id(""));
    this.QuickAccessElem = element(by.id(""));
    this.ResourcesElem = element(by.xpath("//*[text()='Resources']"));
    this.DepartmentStaffDirectoryElem = element(by.id(""));
    this.SendMyScansElem = element(by.id(""));
    this.UpdatesElem = element(by.id(""));
    this.DOLCornerElem = element(by.id(""));
    this.ProductMarketingElem = element(by.id(""));
    this.MarketCommentaryElem = element(by.id(""));
    this.ProductDevelopmentCenterElem = element(by.id(""));
    this.TrainingCenterElem = element(by.id(""));
    this.ComplianceElem = element(by.id(""));
    this.OperationsElem = element(by.id(""));
    this.BondsMLCDsElem = element(by.id(""));
    this.FINRARegisLicensingElem = element(by.id(""));
    this.HelpElem = element(by.id(""));
    this.ReferenceElem = element(by.id(""));
    this.ToolsElem = element(by.xpath("//*[text()='Tools']"));
    this.SendMyDocsElem = element(by.id(""));
    this.MPVAppUsageElem = element(by.id(""));
    this.AlbridgeWealthReportingElem = element(by.id(""));
    this.VASearchEngineToolElem = element(by.id(""));
    this.PershingdashboardElem = element(by.id(""));
    this.fundVISIONElem = element(by.id(""));
    this.CAMPortalElem = element(by.id(""));
    this.MuniCenterElem = element(by.id(""));
    this.AdministrationElem = element(by.id(""));
    this.ContactsElem = element(by.xpath("//*[text()='Contacts']"));
    this.ActiveContactsElem = element(by.id(""));
    this.MYOWNEDElem = element(by.id(""));
    this.RECENTLYVIEWEDElem = element(by.id(""));
    this.MOSTVIEWEDElem = element(by.id(""));
    this.CreateaNewContactElem = element(by.id(""));
    this.ItemstoReviewelem = element(by.id(""));
    this.AnnouncementsEventsElem = element(by.id(""));
    this.managetilesLink = element(by.css("div.fr.managetiles a h6"));
    this.savebButton = element(by.css("div.divCenter > button:nth-child(3)"));
    this.cancelbButton = element(by.css("button.btn.btn-secondary"));
    this.ContractIcon = element(by.css(""));
    this.ExpandIcon = element(by.css(""));
    this.CloseIcon = element(by.css("div.tilemagmnt-title span a.hyper-link"));
    this.leftcarroticon = element(by.css(""));
    this.rightcarroticon = element(by.css(""));
    this.logoutlink = element(by.xpath("//strong[text()='Logout']"));
    this.addnew = element(by.css("div.flexcol-4.tiles.ng-star-inserted a"));
    this.resetallbtn = element(by.css("a.resetbtn"));
    this.getelement = element(
      by.xpath("//*[text()='MANAGE YOUR DASHBOARD TILES']")
    );
    this.destination = element(by.css("#configureTile_4"));
    this.contactstile = element(by.xpath("//*[text()='CONTACTS']"));
    this.upcomingbdaytile = element(
      by.xpath("//*[text()='UPCOMING BIRTHDAY']")
    );
    this.contacttoreviewtile = element(
      by.xpath("//*[text()='CONTACTS TO REVIEW']")
    );
    this.designationele = element(by.css("div.header-profile-summary h6"));
    this.nameEle = element(by.css("div.header-profile-summary h5"));
    this.profileimage = element(by.css("div.header-profileimg img"));
    this.welcomemsg = element(by.css("div.fl.maintitle h1"));
  }

  /**
   *
   * @param linkName
   * To verify link
   */
  async verifyLink(linkName): Promise<boolean> {
    let linkPresent: Promise<boolean>;
    staticWait(5000);
    switch (linkName) {
      case "Reporting":
        moveToElement(this.reporticon);
        staticWait(3000);
        linkPresent = this.verifyElement(this.ReportingElem);
        break;
      case "Scheduled":
        linkPresent = this.verifyElement(this.ScheduledElem);
        break;
      case "Directory":
        linkPresent = this.verifyElement(this.DirectoryElem);
        break;
      case "Repository":
        linkPresent = this.verifyElement(this.RepositoryElem);
        break;
      case "Active reports":
        linkPresent = this.verifyElement(this.ActivereportsElem);
        break;
      case "Quick Access":
        linkPresent = this.verifyElement(this.QuickAccessElem);
        break;
      case "Resources":
        moveToElement(this.resourcesicon);
        staticWait(3000);
        linkPresent = this.verifyElement(this.ResourcesElem);
        break;
      case "Department & Staff Directory":
        linkPresent = this.verifyElement(this.DepartmentStaffDirectoryElem);
        break;
      case "Send My Scans":
        linkPresent = this.verifyElement(this.SendMyScansElem);
        break;
      case "Updates":
        linkPresent = this.verifyElement(this.UpdatesElem);
        break;
      case "DOL Corner":
        linkPresent = this.verifyElement(this.DOLCornerElem);
        break;
      case "Product Marketing":
        linkPresent = this.verifyElement(this.ProductMarketingElem);
        break;
      case "Market Commentary":
        linkPresent = this.verifyElement(this.MarketCommentaryElem);
        break;
      case "Product Development Center":
        linkPresent = this.verifyElement(this.ProductDevelopmentCenterElem);
        break;
      case "Training Center":
        linkPresent = this.verifyElement(this.TrainingCenterElem);
        break;
      case "Compliance":
        linkPresent = this.verifyElement(this.ComplianceElem);
        break;
      case "Operations":
        linkPresent = this.verifyElement(this.OperationsElem);
        break;
      case "Bonds & MLCDs":
        linkPresent = this.verifyElement(this.BondsMLCDsElem);
        break;
      case "FINRA Registration & Licensing":
        linkPresent = this.verifyElement(this.FINRARegisLicensingElem);
        break;
      case "Help":
        linkPresent = this.verifyElement(this.HelpElem);
        break;
      case "Reference":
        linkPresent = this.verifyElement(this.ReferenceElem);
        break;
      case "Tools":
        moveToElement(this.toolsicon);
        staticWait(3000);
        linkPresent = this.verifyElement(this.ToolsElem);
        break;
      case "SendMyDocs":
        linkPresent = this.verifyElement(this.SendMyDocsElem);
        break;
      case "MPV App Usage":
        linkPresent = this.verifyElement(this.MPVAppUsageElem);
        break;
      case "Albridge Wealth Reporting":
        linkPresent = this.verifyElement(this.AlbridgeWealthReportingElem);
        break;
      case "VA Search Engine Tool":
        linkPresent = this.verifyElement(this.VASearchEngineToolElem);
        break;
      case "Pershing dashboard":
        linkPresent = this.verifyElement(this.PershingdashboardElem);
        break;
      case "fundVISION":
        linkPresent = this.verifyElement(this.fundVISIONElem);
        break;
      case "CAM Portal":
        linkPresent = this.verifyElement(this.CAMPortalElem);
        break;
      case "MuniCenter":
        linkPresent = this.verifyElement(this.MuniCenterElem);
        break;
      case "Administration":
        linkPresent = this.verifyElement(this.AdministrationElem);
        break;
      case "Contacts":
        moveToElement(this.contacticon);
        clickElement(this.contacticon);
        staticWait(3000);
        linkPresent = this.verifyElement(this.ContactsElem);
        break;
      case "Active Contacts":
        linkPresent = this.verifyElement(this.ActiveContactsElem);
        break;
      case "MY OWNED":
        linkPresent = this.verifyElement(this.MYOWNEDElem);
        break;
      case "RECENTLY VIEWED":
        linkPresent = this.verifyElement(this.RECENTLYVIEWEDElem);
        break;
      case "MOST VIEWED":
        linkPresent = this.verifyElement(this.MOSTVIEWEDElem);
        break;
      case "Create a New Contact":
        linkPresent = this.verifyElement(this.CreateaNewContactElem);
        break;
      case "Items to Review":
        linkPresent = this.verifyElement(this.ItemstoReviewelem);
        break;
      case "Announcements & Events":
        linkPresent = this.verifyElement(this.AnnouncementsEventsElem);
        break;
      case "RightCarrot":
        linkPresent = this.verifyElement(this.rightcarroticon);
        break;
      case "LeftCarrot":
        linkPresent = this.verifyElement(this.leftcarroticon);
        break;
      case "Expandicon":
        linkPresent = this.verifyElement(this.ExpandIcon);
        break;
      case "ContractIcon":
        linkPresent = this.verifyElement(this.ContractIcon);
        break;
      case "Manage Tiles":
        linkPresent = this.verifyElement(this.getelement);
        break;
    }
    await linkPresent.then(function(text) {
      console.log(text);
    });
    return linkPresent;
  }
  async verifyDashboardTiles(linkName): Promise<boolean> {
    let linkPresent: Promise<boolean>;
    staticWait(5000);
    switch (linkName) {
      case "Reporting":
        linkPresent = this.verifyElement(this.ReportingElem);
        break;
      case "CONTACTS":
        linkPresent = this.verifyElement(this.contactstile);
        break;
      case "Tools":
        linkPresent = this.verifyElement(this.ToolsElem);
        break;
      case "UPCOMING BIRTHDAY":
        linkPresent = this.verifyElement(this.upcomingbdaytile);
        break;
      case "CONTACTS TO REVIEW":
        linkPresent = this.verifyElement(this.contacttoreviewtile);
        break;
      case "profileimage":
        linkPresent = this.verifyElement(this.profileimage);
        break;
    }
    await linkPresent.then(function(text) {
      console.log(text);
    });
    return linkPresent;
  }
  verifyElement = async elemnt => {
    let flag: any;
    return await isElementPresent(elemnt).then(function(flag) {
      console.log("value of the flag = " + flag);
      return flag;
    });
  };

  verifyAddtilesCount = async () => {
    let flag: any;
    return await function(flag) {
      console.log("value of the flag = " + flag);
      return flag;
    };
  };

  /**
   * To click on Information Icon
   */
  VerifyInformaion = async Tilename => {
    await console.log("Inside information varification");
    await checkContainsText(this.informationicon, Tilename);
  };

  /**
   * To click on Manage Tiles Link
   */
  clickManagetiles = async () => {
    await clickElement(this.managetilesLink);
  };

  /**
   * To click on Addnew Tiles Link
   */
  clickAddnewTileLink = async () => {
    await clickElement(this.addnew);
  };

  /**
   * To click on Save Button
   */
  clickOnSaveButton = async () => {
    await moveToElement(this.savebButton);
    await clickElement(this.savebButton);
  };

  /**
   * To click on ResetAll Button
   */
  clickOnResetAllButton = async () => {
    await moveToElement(this.resetallbtn);
    await clickElement(this.resetallbtn);
  };
  /**
   * To click on Cancel Button
   */
  clickOnCancelButton = async () => {
    await moveToElement(this.cancelbButton);
    await clickElement(this.cancelbButton);
  };

  /**
   * To click on Close Icon
   */
  clickOnCloseIcon = async () => {
    await moveToElement(this.CloseIcon);
    await clickElement(this.CloseIcon);
  };

  /**
   * To click on Contract Icon
   */
  clickOnContractIcon = async () => {
    await clickElement(this.ContractIcon);
  };

  /**
   * To click on expand Icon
   */
  clickOnExpandIcon = async () => {
    await clickElement(this.ExpandIcon);
  };

  /**
   * To click on right carrot Icon
   */
  clickOnRightCarrotIcon = async () => {
    await clickElement(this.rightcarroticon);
  };

  /**
   * To click on Left carrot Icon
   */
  clickOnLeftCarrotIcon = async () => {
    await clickElement(this.leftcarroticon);
  };

  verifyAddNewTilesCount = async () => {
    let elem = element(
      by.xpath(
        "//div[@id='allowableTilesContainer']//tbody//td[@class='ng-star-inserted']"
      )
    );

    await elem.getText().then(async text => {
      if (await text.includes("4")) {
        await expect(await this.verifyLink(this.rightcarroticon)).to.equal(
          true,
          this.rightcarroticon + "Link is displayed"
        );
        await this.clickOnRightCarrotIcon();
        await expect(await this.verifyLink(this.leftcarroticon)).to.equal(
          true,
          this.leftcarroticon + "Link is displayed"
        );
        await this.clickOnLeftCarrotIcon();
      } else if (await text.includes("1")) {
      } else {
      }
    });
  };
  /**
   * Select element and perform drag and drop operation
   */
  selectElement = async linkName => {
    staticWait(5000);
    switch (linkName) {
      case "UPCOMING BIRTHDAYS":
        this.source = element(by.css("#upcomingBirthdays"));
        await moveToElement(this.source);
        await dragAndDropElement(this.source, this.destination);
        break;

      case "CONTACTS":
        this.source = element(by.css("#contacts"));
        await dragAndDropElement(this.source, this.destination);
        break;

      case "CONTACTS TO REVIEW":
        this.source = element(by.css("#contactsToReview"));
        await dragAndDropElement(this.source, this.destination);
        break;
    }
  };
  dashboardToAddNewTiles = async linkName => {
    staticWait(5000);
    switch (linkName) {
      case "UPCOMING BIRTHDAYS":
        this.source = element(by.css("#upcomingBirthdays"));
        await moveToElement(this.source);
        this.destination = element(
          by.css("div.allowableContainer td.noshadow")
        );
        await dragAndDropElement(this.source, this.destination);
        break;

      case "CONTACTS":
        this.source = element(by.css("#contacts"));
        this.destination = element(
          by.css("div.allowableContainer td.noshadow")
        );
        await dragAndDropElement(this.source, this.destination);
        break;

      case "CONTACTS TO REVIEW":
        this.source = element(by.css("#contactsToReview"));
        this.destination = element(
          by.css("div.allowableContainer td.noshadow")
        );
        await dragAndDropElement(this.source, this.destination);
        break;
    }
  };
  Removetile = async linkName => {
    staticWait(5000);
    switch (linkName) {
      case "UPCOMING BIRTHDAYS":
        this.RemoveButton = element(by.css("#upcomingBirthdays div#crossDiv"));
        await clickElement(this.RemoveButton);
        break;

      case "CONTACTS":
        this.RemoveButton = element(by.css("#contacts div#crossDiv"));
        await clickElement(this.RemoveButton);
        break;

      case "CONTACTS TO REVIEW":
        this.RemoveButton = element(by.css("#contactsToReview  div#crossDiv"));
        await clickElement(this.RemoveButton);
        break;
    }
  };

  MovetoTileElement = async (linkName, information) => {
    staticWait(5000);
    switch (linkName) {
      case "UPCOMING BIRTHDAYS":
        this.informationicon = element(
          by.xpath("//div[@id='upcomingBirthdays']//img//ancestor::i")
        );
        await moveToElement(this.informationicon);
        await staticWait(3000);
        await this.verifyInformation(this.informationicon, information);
        break;

      case "CONTACTS":
        this.informationicon = element(
          by.xpath("//div[@id='contacts']//img//ancestor::i")
        );
        await moveToElement(this.informationicon);
        await staticWait(3000);
        await this.verifyInformation(this.informationicon, information);
        break;

      case "CONTACTS TO REVIEW":
        this.informationicon = element(
          by.xpath("//div[@id='contactsToReview']//img//ancestor::i")
        );
        await moveToElement(this.informationicon);
        await staticWait(3000);
        await this.verifyInformation(this.informationicon, information);
        break;
    }
  };

  /**
   * Verify Information
   */
  async verifyInformation(tileelement, information): Promise<boolean> {
    let flag: any;
    flag = false;
    await tileelement.getText().then(async informations => {
      if (
        await informations.toUpperCase().includes(information.toUpperCase())
      ) {
        flag = true;
      } else {
        flag = false;
      }
    });
    return flag;
  }
  /**
   * Verify Details
   */
  async verifyDetails(informationicon, detailinfo): Promise<boolean> {
    let flag: any;
    flag = false;
    await informationicon.getText().then(async informations => {
      if (await informations.toUpperCase().includes(detailinfo.toUpperCase())) {
        flag = true;
      } else {
        flag = false;
      }
    });
    return flag;
  }

  async verifyTileWidth(informationicon, TileWidth): Promise<boolean> {
    let flag: any;
    flag = false;
    await informationicon
      .getAttribute("ng-reflect-column-size")
      .then(async informations => {
        await console.log(informations);
        if (
          await informations.toUpperCase().includes(TileWidth.toUpperCase())
        ) {
          flag = true;
        } else {
          flag = false;
        }
      });
    return flag;
  }
  pagedown = async () => {
    await this.footerele.getLocation().then(function() {
      return browser.executeScript("window.scrollBy(0,500)");
    });
  };

  /**
   * To verify change in tile width on dashboard
   */
  VerifyChangeColumnwidth = async (linkName, Columnwidth) => {
    staticWait(5000);
    switch (linkName) {
      case "Items to Review ":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-review-items"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-review-items"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else {
          this.informationicon = element(by.xpath("//dv-review-items"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "Announcements & Events":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-annoucement"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-annoucement"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else {
          this.informationicon = element(by.xpath("//dv-annoucement"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "Updates":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-updates"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-updates"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else {
          this.informationicon = element(by.xpath("//dv-updates"));
          await staticWait(3000);
          await moveToElement(this.informationicon);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "CONTACTS TO REVIEW":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-review-contact"));
          await staticWait(3000);
          await moveToElement(this.informationicon);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-review-contact"));
          await staticWait(3000);
          await moveToElement(this.informationicon);

          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else {
          this.informationicon = element(by.xpath("//dv-review-contact"));
          await staticWait(3000);
          await moveToElement(this.informationicon);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "CONTACTS":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-contacts"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-contacts"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else {
          this.informationicon = element(by.xpath("//dv-contacts"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "UPCOMING BIRTHDAYS":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-birthday"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-birthday"));
          await staticWait(3000);
          await moveToElement(this.informationicon);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else {
          this.informationicon = element(by.xpath("//dv-birthday"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "Contacts by Investment":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-investmant-contact"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-investmant-contact"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else {
          this.informationicon = element(by.xpath("//dv-investmant-contact"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "Reporting":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-report"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        } else if (Columnwidth === "2") {
          this.informationicon = element(by.xpath("//dv-report"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }
      case "GDC Totals":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-gdc-total"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }

      case "Monthly GDC Details":
        if (Columnwidth === "1") {
          this.informationicon = element(by.xpath("//dv-montholy-gdc-detail"));
          await moveToElement(this.informationicon);
          await staticWait(3000);
          await expect(
            await this.verifyTileWidth(this.informationicon, Columnwidth)
          ).to.equal(true, "Tile size is " + Columnwidth);
          break;
        }
    }
  };

  /**
   * To change change the tile width
   */
  ClickChangeColumnwidth = async (linkName, Columnwidth) => {
    staticWait(2000);
    switch (linkName) {
      case "Items to Review ":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='itemsToReview']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='itemsToReview']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        } else {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='itemsToReview']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "Announcements & Events":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='Announcements']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='Announcements']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        } else {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='Announcements']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "Updates":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='updates']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='updates']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        } else {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='updates']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "CONTACTS TO REVIEW":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='contactsToReview']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='contactsToReview']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        } else {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='contactsToReview']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "CONTACTS":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='contacts']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='contacts']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        } else {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='contacts']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "UPCOMING BIRTHDAYS":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='upcomingBirthdays']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='upcomingBirthdays']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        } else {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='upcomingBirthdays']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "Contacts by Investment":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='contactByInvestment']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='contactsbyInvestment']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        } else {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='contactsbyInvestment']//following-sibling::*[local-name()='svg'][@class='widthLarge ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "Reporting":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='reporting']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        } else if (Columnwidth === "2") {
          this.tilewidthele = element(
            by.xpath(
              "//div[@id='reporting']//following-sibling::*[local-name()='svg'][@class='widthMedium ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.tilewidthele);
          await clickElement(this.tilewidthele);
          break;
        }

      case "GDC Totals":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='gdcTotals']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        }

      case "Monthly GDC Details":
        if (Columnwidth === "1") {
          this.informationicon = element(
            by.xpath(
              "//div[@id='monthlyGdcDetails']//following-sibling::*[local-name()='svg'][@class='widthSmall ng-star-inserted']/*[local-name()='rect'][@id='tile.tileKey']"
            )
          );
          await moveToElement(this.informationicon);
          await clickElement(this.informationicon);
          break;
        }
    }
  };
}
