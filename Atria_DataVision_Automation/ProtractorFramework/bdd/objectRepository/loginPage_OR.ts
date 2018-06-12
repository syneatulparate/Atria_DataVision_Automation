import { $, element, by } from "protractor";

export class loginPage_OR {

    /**
     * Declaring all the objects from the Login Page
     */
    public txtUserName: any;
    public txtPassword: any;
    public btnLogin: any;
    public btnLoginRem:any;
    public btnLogout: any;
    public securityAnswer: any;
    public lnkforgotpass: any;
    public errMsg: any;
    public headerMsg: any;
    public txtemail:any;
    public clserrrMsg:any;

    public securityQuestion: any;


    public txtOTP:any;
    public txtforgtOTP:any;




    /**
     * Constructor to initialize all objects/elements of Login Page
     */
    constructor() {
        this.txtUserName = "#username";
        this.txtPassword = "#password";
        this.btnLogin = "button.btn[type='submit']";
        this.btnLoginRem="button.btn[type='button']";
        this.btnLogout = "a[routerlink='/logout']";


        //this.errMsg = element(by.xpath("//div[@class='toast-message']"));
        //this.errMsg = "div.toast-message";
        this.errMsg = "div.toast-message";
        this.headerMsg = "h1";

        //this.securityQuestion = "label[for='security-answer']";

        this.securityQuestion = ".flexcol-2.p";
        this.securityAnswer = "input#security-answer";
        this.lnkforgotpass="div[class='col-6 tar'] >  a";//"a[href='#/login/forgotpassword']";//div[class='col-6 tar'] >  
        this.txtemail="input#security-email";
        this.clserrrMsg=".toast.alert-danger>.toast-close svg";


        this.txtOTP="#code";
        this.txtforgtOTP="input#opt-text";
    }


}