"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const currentDate = (d, m, y) => __awaiter(this, void 0, void 0, function* () {
    let date;
    var month_names = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var today = new Date();
    var day = today.getDate() + d;
    var month_index = today.getMonth() + m;
    var year = today.getFullYear() + y;
    date = day + "-" + month_names[month_index] + "-" + year;
    return date;
});
exports.currentDate = currentDate;
const nextWeeksDate = () => __awaiter(this, void 0, void 0, function* () {
    let date;
    var month_names = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var today = new Date();
    var temp = today.getDay(); //-----gets weeks day
    var add = 8 - temp; //-----gives count of days remaining for next week to start
    var nextWeekMonday = today.getDate() + add; //-----next week mondays date
    let numberofdays = this.daysInMonth(today.getMonth(), today.getFullYear()); //-----gives number of days of the month
    console.log(numberofdays);
    for (var i = 1; i <= 14; i++) {
        var nextWeekdays = nextWeekMonday + i;
        if (nextWeekdays > numberofdays) {
            for (var j = 1; j <= i; j++) { }
            var month_index = today.getMonth() + 1;
        }
        else {
            var month_index = today.getMonth();
        }
        var year = today.getFullYear();
        date = nextWeekdays + "-" + month_names[month_index] + "-" + year;
        console.log(temp);
        console.log(date);
        //   console.log(date);
    }
    return date;
});
exports.nextWeeksDate = nextWeeksDate;
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
exports.daysInMonth = daysInMonth;
