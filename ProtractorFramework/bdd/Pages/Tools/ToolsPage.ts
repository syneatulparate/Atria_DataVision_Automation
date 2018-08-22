import {
  element,
  by,
  ElementFinder,
  $,
  browser,
  ExpectedConditions,
  ElementArrayFinder
} from "protractor";
import { link } from "fs";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class ToolsPage {
  public toolsicon: ElementFinder;
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

  constructor() {
    this.toolsicon = element(by.css(" ul > li:nth-child(6) > img"));
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
  }

  /**
   * To click on Link
   */
  async clickOnLink(linkName) {
    switch (linkName) {
      case "Tools":
        staticWait(3000);
        clickElement(this.ToolsElem);
        break;
      case "SendMyDocs":
        clickElement(this.SendMyDocsElem);
        break;
      case "MPV App Usage":
        clickElement(this.MPVAppUsageElem);
        break;
      case "Albridge Wealth Reporting":
        clickElement(this.AlbridgeWealthReportingElem);
        break;
      case "VA Search Engine Tool":
        clickElement(this.VASearchEngineToolElem);
        break;
      case "Pershing dashboard":
        clickElement(this.PershingdashboardElem);
        break;
      case "fundVISION":
        clickElement(this.fundVISIONElem);
        break;
      case "CAM Portal":
        clickElement(this.CAMPortalElem);
        break;
      case "MuniCenter":
        clickElement(this.MuniCenterElem);
        break;
      case "Administration":
        clickElement(this.AdministrationElem);
        break;
    }
  }
  verifySendmyDoc = async () => {};

  verifyMPVAppUsage = async () => {};

  verifyAlbridgeWealthReporting = async () => {};

  verifyVASearchEngineTool = async () => {};

  verifyPershingDashboard = async () => {};

  verifyfundVISION = async () => {};

  verifyMuniCenter = async () => {};

  verifyCamPortal = async () => {};

  verifyAdministration = async () => {};

  verifyActiveBuildMyProfile = async () => {};

  verifyBlotter = async () => {};

  verifyTools = async () => {};
}
