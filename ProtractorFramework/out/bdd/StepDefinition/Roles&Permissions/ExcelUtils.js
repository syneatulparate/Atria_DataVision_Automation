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
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
class ExcelUtils {
    constructor() {
        this.excelread = (rowname, celvalue) => __awaiter(this, void 0, void 0, function* () {
            // set implicit time to 30 seconds
            protractor_1.browser.manage().timeouts().implicitlyWait(30000);
            // create object for workbook
            var wb = new exceljs_1.Workbook();
            // read xlsx file type
            wb.xlsx.readFile("./test.xlsx").then(function () {
                //sheet object
                let sheet = wb.getWorksheet("Sheet1");
                //row objct
                let rowObject = sheet.getRow(rowname);
                // cell object
                let cellObject = rowObject.getCell(celvalue);
                //print
                console.log(cellObject.value);
                //use the cell value as url for navigation
                protractor_1.browser.get(cellObject.toString());
            });
        });
    }
}
exports.ExcelUtils = ExcelUtils;
