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
//var path = require('path');
const fs = require("fs");
const jpath = require("jsonpath");
const readJson = (filepath, jsonPath) => __awaiter(this, void 0, void 0, function* () {
    let jsonFile = fs.readFileSync(filepath);
    let jsonObj = JSON.parse(jsonFile);
    var jsonData = jpath.query(jsonObj, jsonPath);
    return jsonData;
});
exports.readJson = readJson;
// readJson("./testData.json","$..ClassicDev1.phone_number").then(function(value){
//    // var path = require('path');
//    console.log("value is " + value + "________ " + __dirname + "+++++  " );
//    path
// });
