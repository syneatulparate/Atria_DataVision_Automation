import { element, by, ElementFinder } from "protractor";
import { enterText } from "../../../uiActions/keyboardActions/setInputField";
import { clickElement } from "../../../uiActions/mouseActions/clickElement";
import { checkTitle } from "../../../uiActions/verifyActions/checkTitle";
import { isElementPresent } from "../../../uiActions/verifyActions/isElementPresent";
import { securityQuestions } from "../../../testData/securityQuestions";
import { clearInputField } from "../../../uiActions/keyboardActions/clearInputField";
import {
  waitForObject,
  staticWait
} from "../../../uiActions/waitActions/waitActions";
import { EntitlementPage } from "../Roles&Permissions/EntitlementPage";

let entitlementPage: EntitlementPage = new EntitlementPage();
export class ForgotPasswordPage {
  /**
   * Objects from Verify Identity page
   */
  public txtUsername: ElementFinder;
  public continueButton: ElementFinder;
  public forgotPasswordLink: ElementFinder;
  public errMsg: ElementFinder;
  public emailTextField: ElementFinder;
  public securityQuestion: ElementFinder;
  public txtSecurityAnswer: ElementFinder;
  public securityImg: ElementFinder;
  public txtOTP: ElementFinder;
  public msgCloseButton: ElementFinder;

  /**
   * Objects from forogot password page
   */
  constructor() {
    this.txtUsername = element(by.id("username"));
    this.continueButton = element(by.css(".btn[type='submit']"));
    this.errMsg = element(by.xpath("//div[@class='toast-message']"));
    this.msgCloseButton = element(
      by.xpath("//div[@class='octicon octicon-x']")
    );
    this.emailTextField = element(by.css("#security-email[type='text']"));
    this.securityQuestion = element(by.css("label[for='security-answer']"));
    this.txtSecurityAnswer = element(by.css("#security-answer[type='text']"));
    this.txtOTP = element(by.id("opt-text"));
  }

  /**
   * To enter user name
   */
  enterUserName = async UsernameVal => {
    await enterText(this.txtUsername, UsernameVal);
  };

  /**
   * To click on continue button
   */
  clickOnContinue = async () => {
    await clickElement(this.continueButton);
  };

  /**
   * To click on forgot password link
   */
  clickOnForgotPassword = async () => {
    await clickElement(this.forgotPasswordLink);
  };

  /**
   * To verify page title
   */
  verifyLoginPageTitle = async headerMessage => {
    await checkTitle(headerMessage);
  };

  /**
   * To verify Error message
   */
  verifyErrorMessage = async errorMessage => {
    let flag: any;
    flag = false;
    await waitForObject(this.errMsg);
    await this.errMsg.getText().then(async text => {
      if (await text.toUpperCase().includes(errorMessage.toUpperCase())) {
        flag = true;
      } else {
        flag = false;
      }
    });
    return flag;
  };

  /**
   * To verify Lock message
   */
  verifylockErrorMessage = async errorMessage => {
    let flag: any;
    flag = false;
    let elemet = element(by.css("div.alert.alert-danger.ng-star-inserted"));
    await waitForObject(elemet);
    await elemet.getText().then(async text => {
      if (await text.toUpperCase().includes(errorMessage.toUpperCase())) {
        flag = true;
      } else {
        flag = false;
      }
    });
    return flag;
  };

  /**
   * To verify emailid field
   */
  verifyEmailField = async () => {
    let linkPresent: Promise<boolean>;
    await waitForObject(this.emailTextField);
    linkPresent = entitlementPage.verifyElement(this.emailTextField);
    return linkPresent;
  };

  /**
   * To verify OTP field
   */
  verifyOTPField = async () => {
    await staticWait(3000);
    await waitForObject(this.txtOTP);
    await isElementPresent(this.txtOTP);
  };

  /**
   * To enter security answer
   */
  enterSecurityAnswer = async () => {
    await waitForObject(this.securityQuestion);
    await this.securityQuestion.getText().then(async txtMsg => {
      if (txtMsg.startsWith("Question: How do you spell")) {
        await this.txtSecurityAnswer.sendKeys(
          securityQuestions['How do you spell "password"?']
        );
      } else if (txtMsg.trim() === "Question: What is 2+2?") {
        await this.txtSecurityAnswer.sendKeys(
          securityQuestions["What is 2+2?"]
        );
      } else if (txtMsg.trim() === "Question: 1+1=?") {
        await this.txtSecurityAnswer.sendKeys(securityQuestions["1+1?"]);
      }
    });
  };

  /**
   * To Enter invalid security answer
   */
  enterInvalidSecurityAnswer = async invalidAnswer => {
    await enterText(this.txtSecurityAnswer, invalidAnswer);
  };

  /**
   * To Enter invalid email id
   */
  enterInvalidEmail = async invalidEmail => {
    await enterText(this.emailTextField, invalidEmail);
  };

  /**
   * To Enter invalid Otp
   */
  enterOTP = async OTP => {
    await enterText(this.txtOTP, OTP);
  };

  /**
   * To click on close message button
   */
  clickOnMsgCloseButton = async () => {
    await waitForObject(this.msgCloseButton);
    await clickElement(this.msgCloseButton);
  };

  /**
   * To verify lock senario
   */
  enterMultipleInvalidOTP = async OTP => {
    for (var i = 1; i <= 3; i++) {
      await enterText(this.txtOTP, OTP);
      await this.clickOnContinue();
      await clearInputField(this.txtOTP);
    }
  };
}
