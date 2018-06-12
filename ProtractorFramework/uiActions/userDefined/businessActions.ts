import { browser, protractor, $, ExpectedConditions } from "protractor";
import { loginPage_OR } from "../../bdd/objectRepository/loginPage_OR";

import {securityQuestions} from "../../testData/securityQuestions"

const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search: loginPage_OR = new loginPage_OR();

const enterSecurityAnswer = async (type, element) => {
    
    browser.wait(function () {
       browser.sleep(2000);
        
        return $(search[element]).isDisplayed()
            .then(
                function (isDisplayed) {
                    console.log("object displayed --> " + isDisplayed + " " + element);
                    
                    var today = new Date();                  
                    return isDisplayed;
                },
                function (error) {
                    console.log("Object not found --> " + element );                 
                    return false
                });             
    }, 40 * 1000);
    
   await $("label[for='security-answer']").getText().then( //label[for='security-answer']   ---- .flexcol-2.p
        function(txtMsg){
            console.log("text message ===>" + txtMsg);
            if(txtMsg.startsWith("Question: How do you spell")){
                console.log("Question: Inside sercurityAns -->" + txtMsg + "element -->" + element );
                $(search[element]).sendKeys(securityQuestions["How do you spell \"password\"?"]);
            }else if(txtMsg.trim() === "Question: What is 2+2?"){
                console.log("Inside sercurityAns -->" + txtMsg);
                $(search[element]).sendKeys(securityQuestions["What is 2+2?"]);
            }
        });

    }

    export {enterSecurityAnswer}
    

