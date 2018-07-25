import { element, by, ElementFinder, $, browser, ExpectedConditions, ElementArrayFinder } from "protractor";
import { enterText } from "../../../uiActions/keyboardActions/setInputField";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { checkContainsText } from "../../../uiActions/verifyActions/checkContainsText";
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent";
import { alertAccept, alertDismiss } from "../../../uiActions/alertActions/alertAction";
import { waitForObject, staticWait } from "../../../uiActions/waitActions/waitActions";
import { moveToElement } from "../../../uiActions/mouseActions/moveToElement";
import { selectCheckBox, deSelectCheckBox } from "../../../uiActions/mouseActions/checkBoxActions";
import { checkTitleContains } from "../../../uiActions/verifyActions/checkTitleContains";
import { Key } from "selenium-webdriver";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
export class HomeDashboardPage {

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
    public leftcarroticon:ElementFinder;
    public rightcarroticon:ElementFinder;
    public RemoveButton:ElementFinder;


    constructor() {
        console.log("Inside constructor")
        this.informationicon = element(by.id(''));
        this.ReportingElem = element(by.id(''));
        this.ScheduledElem = element(by.id(''));
        this.DirectoryElem = element(by.id(''));
        this.RepositoryElem = element(by.id(''));
        this.ActivereportsElem = element(by.id(''));
        this.QuickAccessElem = element(by.id(''));
        this.ResourcesElem = element(by.id(''));
        this.DepartmentStaffDirectoryElem = element(by.id(''));
        this.SendMyScansElem = element(by.id(''));
        this.UpdatesElem = element(by.id(''));
        this.DOLCornerElem = element(by.id(''));
        this.ProductMarketingElem = element(by.id(''));
        this.MarketCommentaryElem = element(by.id(''));
        this.ProductDevelopmentCenterElem = element(by.id(''));
        this.TrainingCenterElem = element(by.id(''));
        this.ComplianceElem = element(by.id(''));
        this.OperationsElem = element(by.id(''));
        this.BondsMLCDsElem = element(by.id(''));
        this.FINRARegisLicensingElem = element(by.id(''));
        this.HelpElem = element(by.id(''));
        this.ReferenceElem = element(by.id(''));
        this.ToolsElem = element(by.id(''));
        this.SendMyDocsElem = element(by.id(''));
        this.MPVAppUsageElem = element(by.id(''));
        this.AlbridgeWealthReportingElem = element(by.id(''));
        this.VASearchEngineToolElem = element(by.id(''));
        this.PershingdashboardElem = element(by.id(''));
        this.fundVISIONElem = element(by.id(''));
        this.CAMPortalElem = element(by.id(''));
        this.MuniCenterElem = element(by.id(''));
        this.AdministrationElem = element(by.id(''));
        this.ContactsElem = element(by.id(''));
        this.ActiveContactsElem = element(by.id(''));
        this.MYOWNEDElem = element(by.id(''));
        this.RECENTLYVIEWEDElem = element(by.id(''));
        this.MOSTVIEWEDElem = element(by.id(''));
        this.CreateaNewContactElem = element(by.id(''));
        this.ItemstoReviewelem = element(by.id(''));
        this.AnnouncementsEventsElem = element(by.id(''));
        this.managetilesLink = element(by.css(""));
        this.savebButton = element(by.css(""));
        this.cancelbButton = element(by.css(""));
        this.ContractIcon = element(by.css(""));
        this.ExpandIcon = element(by.css(""));
        this.CloseIcon = element(by.css(""));
        this.leftcarroticon = element(by.css(""));
        this.rightcarroticon = element(by.css(""));
        this.RemoveButton = element(by.css(""));

    }

    async verifyLink(linkName): Promise<boolean> {
        let linkPresent: Promise<boolean>;
        staticWait(5000)
        switch (linkName) {
            case 'Reporting':
                linkPresent = this.verifyElement(this.ReportingElem)
                break;
            case 'Scheduled':

                linkPresent = this.verifyElement(this.ScheduledElem)
                break;
            case 'Directory':

                linkPresent = this.verifyElement(this.DirectoryElem)
                break;
            case 'Repository':

                linkPresent = this.verifyElement(this.RepositoryElem)
                break;
            case 'Active reports':

                linkPresent = this.verifyElement(this.ActivereportsElem)
                break;
            case 'Quick Access':
                linkPresent = this.verifyElement(this.QuickAccessElem)
                break;
            case 'Resources':
                linkPresent = this.verifyElement(this.ResourcesElem)

                break;
            case 'Department & Staff Directory':
                linkPresent = this.verifyElement(this.DepartmentStaffDirectoryElem)
                break;
            case 'Send My Scans':
                linkPresent = this.verifyElement(this.SendMyScansElem)
                break;
            case 'Updates':
                linkPresent = this.verifyElement(this.UpdatesElem)
                break;
            case 'DOL Corner':
                linkPresent = this.verifyElement(this.DOLCornerElem)
                break;
            case 'Product Marketing':
                linkPresent = this.verifyElement(this.ProductMarketingElem)
                break;
            case 'Market Commentary':
                linkPresent = this.verifyElement(this.MarketCommentaryElem)
                break;
            case 'Product Development Center':
                linkPresent = this.verifyElement(this.ProductDevelopmentCenterElem)
                break;
            case 'Training Center':
                linkPresent = this.verifyElement(this.TrainingCenterElem)
                break;
            case 'Compliance':
                linkPresent = this.verifyElement(this.ComplianceElem)
                break;
            case 'Operations':
                linkPresent = this.verifyElement(this.OperationsElem)
                break;
            case 'Bonds & MLCDs':
                linkPresent = this.verifyElement(this.BondsMLCDsElem)
                break;
            case 'FINRA Registration & Licensing':
                linkPresent = this.verifyElement(this.FINRARegisLicensingElem)
                break;
            case 'Help':
                linkPresent = this.verifyElement(this.HelpElem)
                break;
            case 'Reference':
                linkPresent = this.verifyElement(this.ReferenceElem)
                break;
            case 'Tools':
                linkPresent = this.verifyElement(this.ToolsElem)
                break;
            case 'SendMyDocs':
                linkPresent = this.verifyElement(this.SendMyDocsElem)
                break;
            case 'MPV App Usage':
                linkPresent = this.verifyElement(this.MPVAppUsageElem)
                break;
            case 'Albridge Wealth Reporting':
                linkPresent = this.verifyElement(this.AlbridgeWealthReportingElem)
                break;
            case 'VA Search Engine Tool':
                linkPresent = this.verifyElement(this.VASearchEngineToolElem)
                break;
            case 'Pershing dashboard':
                linkPresent = this.verifyElement(this.PershingdashboardElem)
                break;
            case 'fundVISION':
                linkPresent = this.verifyElement(this.fundVISIONElem)
                break;
            case 'CAM Portal':
                linkPresent = this.verifyElement(this.CAMPortalElem)
                break;
            case 'MuniCenter':
                linkPresent = this.verifyElement(this.MuniCenterElem)
                break;
            case 'Administration':
                linkPresent = this.verifyElement(this.AdministrationElem)
                break;
            case 'Contacts':
                linkPresent = this.verifyElement(this.ContactsElem)
                break;
            case 'Active Contacts':
                linkPresent = this.verifyElement(this.ActiveContactsElem)
                break;
            case 'MY OWNED':
                linkPresent = this.verifyElement(this.MYOWNEDElem)
                break;
            case 'RECENTLY VIEWED':
                linkPresent = this.verifyElement(this.RECENTLYVIEWEDElem)
                break;
            case 'MOST VIEWED':
                linkPresent = this.verifyElement(this.MOSTVIEWEDElem)
                break;
            case 'Create a New Contact':
                linkPresent = this.verifyElement(this.CreateaNewContactElem)
                break;
            case 'Items to Review':
                linkPresent = this.verifyElement(this.ItemstoReviewelem)
                break;
            case 'Announcements & Events':
                linkPresent = this.verifyElement(this.AnnouncementsEventsElem)
                break;
            case 'RightCarrot':
                linkPresent=this.verifyElement(this.rightcarroticon)
                break;
            case 'LeftCarrot':
                linkPresent=this.verifyElement(this.leftcarroticon)
                break;
            case 'Expandicon':
                linkPresent=this.verifyElement(this.ExpandIcon)
                break;
            case 'ContractIcon':
                linkPresent=this.verifyElement(this.ContractIcon)
                break;
        }
        await linkPresent.then(function (text) { console.log(text) })
        return linkPresent;
    }
    verifyElement = async (elemnt) => {
        let flag: any;
        return await isElementPresent(elemnt).then(function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }

    verifyAddtilesCount = async () => {
        let flag: any;
        return await (function (flag) {
            console.log("value of the flag = " + flag);
            return flag;

        });
    }
    VerifyInformaion = async (Tilename) => {
        await console.log("Inside information varification");
        await checkContainsText(this.informationicon, Tilename);
    }
    clickManagetiles = async () => {

        await clickElement(this.managetilesLink);
    }
    clickOnSaveButton = async () => {

        await clickElement(this.savebButton);
    }
    clickOnCancelButton = async () => {

        await clickElement(this.cancelbButton);
    }
    clickOnCloseIcon = async () => {

        await clickElement(this.CloseIcon);
    }
    clickOnRemoveButton = async () => {

        await clickElement(this.RemoveButton);
    }
    clickOnContractIcon = async () => {

        await clickElement(this.ContractIcon);
    }
    clickOnExpandIcon = async () => {

        await clickElement(this.ExpandIcon);
    }
    clickOnRightCarrotIcon = async () => {

        await clickElement(this.rightcarroticon);
    }
    clickOnLeftCarrotIcon = async () => {

        await clickElement(this.leftcarroticon);
    }
    PressEscape = async () => {

        await clickElement(Key.ESCAPE);
    }

    verifyAddNewTilesCount=async()=>{
        let elem
        if (elem.getText() > 4){
            await expect(await this.verifyLink(this.rightcarroticon)).to.equal(true, this.rightcarroticon + 'Link is displayed');
            await this.clickOnRightCarrotIcon()
            await expect(await this.verifyLink(this.leftcarroticon)).to.equal(true, this.leftcarroticon + 'Link is displayed');
            await this.clickOnLeftCarrotIcon()
        }
        if(elem.getText() > 1){
            //drag and drop operation

        }
        
    }
}