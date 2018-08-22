import {
  element,
  by,
  ElementFinder,
  $,
  browser,
  ExpectedConditions,
  ElementArrayFinder
} from "protractor";
import { staticWait } from "../../../uiActions/waitActions/waitActions";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class ResourcesPage {
  public resourcesicon: ElementFinder;
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

  constructor() {
    this.resourcesicon = element(by.css(" ul > li:nth-child(5) > img"));
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
  }

  /**
   * To click on Link
   */
  async clickOnLink(linkName) {
    switch (linkName) {
      case "Resources":
        staticWait(3000);
        clickElement(this.ResourcesElem);
        break;
      case "Department & Staff Directory":
        clickElement(this.DepartmentStaffDirectoryElem);
        break;
      case "Send My Scans":
        clickElement(this.SendMyScansElem);
        break;
      case "Updates":
        clickElement(this.UpdatesElem);
        break;
      case "DOL Corner":
        clickElement(this.DOLCornerElem);
        break;
      case "Product Marketing":
        clickElement(this.ProductMarketingElem);
        break;
      case "Market Commentary":
        clickElement(this.MarketCommentaryElem);
        break;
      case "Product Development Center":
        clickElement(this.ProductDevelopmentCenterElem);
        break;
      case "Training Center":
        clickElement(this.TrainingCenterElem);
        break;
      case "Compliance":
        clickElement(this.ComplianceElem);
        break;
      case "Operations":
        clickElement(this.OperationsElem);
        break;
      case "Bonds & MLCDs":
        clickElement(this.BondsMLCDsElem);
        break;
      case "FINRA Registration & Licensing":
        clickElement(this.FINRARegisLicensingElem);
        break;
      case "Help":
        clickElement(this.HelpElem);
        break;
      case "Reference":
        clickElement(this.ReferenceElem);
        break;
    }
  }
}
