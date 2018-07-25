import { browser, protractor, $, by, ExpectedConditions, ElementFinder } from "protractor";


const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const currentDate = async (d, m, y) => {
let date:any;
    var month_names = ["January", "February", "March",
        "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];

    var today = new Date();
    var day = (today.getDate() + d);
    var month_index = (today.getMonth() + m);
    var year = (today.getFullYear() + y);
    date =  (day + "-" + month_names[month_index] + "-" + year)
    return (date)
}
const nextWeeksDate = async () => {
    let date:any;
        var month_names = ["January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];
    
        var today = new Date();
        var temp =(today.getDay());//-----gets weeks day
        var add = 8-temp;//-----gives count of days remaining for next week to start
        var nextWeekMonday = (today.getDate() + add);//-----next week mondays date
        let numberofdays= this.daysInMonth(today.getMonth(),today.getFullYear()) //-----gives number of days of the month
        console.log(numberofdays)
        
         for(var i=1;i<=14;i++){
            var nextWeekdays= (nextWeekMonday+i)

            if(nextWeekdays>numberofdays){
               
               for(var j=1;j<=i;j++){
               
               }
                var month_index = (today.getMonth()+1);                
            } else {
                var month_index = (today.getMonth());
            }
             var year = (today.getFullYear());
             date =  (nextWeekdays + "-" + month_names[month_index] + "-" + year)
             console.log(temp);
             console.log(date);
          //   console.log(date);
         }
         
        return (date)
    }
    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
     }

export { currentDate }
export {nextWeeksDate}
export {daysInMonth}