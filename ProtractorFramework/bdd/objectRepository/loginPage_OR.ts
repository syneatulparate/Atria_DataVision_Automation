import { $, element,by } from "protractor";

export class loginPage_OR{

    /**
     * Declaring all the objects from the Login Page
     */
    public txtUserName  : any;
    public txtPassword  : any;
    public btnLogin     : any;
    public btnLogout    : any;
    public securityAnswer : any;

    public errMsg : any;
    public headerMsg : any;

    public securityQuestion : any;
    public changeAuthMethod : any;
    public changeMethodOptions : any;
    public changeMethodSearchBtn : any;
    public changeMethodDropDown : any;
    
    /**
     * Constructor to initialize all objects/elements of Login Page
     */
    constructor(){
        this.txtUserName = "#username";
        this.txtPassword = "#password";
        this.btnLogin = "button.btn[type='submit'";
        this.btnLogout = "a[routerlink='/logout']";
        
        
        //this.errMsg = element(by.xpath("//div[@class='toast-message']"));
        //this.errMsg = "div.toast-message";
        this.errMsg = "div.toast-message";
        this.headerMsg = "h1";

        //this.securityQuestion = "label[for='security-answer']";

        this.securityQuestion = ".flexcol-2.p";
        this.securityAnswer = "input#security-answer";
        //this.changeAuthMethod = ".form-group a";
        this.changeAuthMethod = "div.form-group a";//"div .form-group a";
        this.changeMethodDropDown = "#method";
        this.changeMethodOptions = "select option";
        this.changeMethodSearchBtn = ".btn.btn-small";

    
}

}