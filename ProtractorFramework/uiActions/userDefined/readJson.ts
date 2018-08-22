import { read } from "fs";
import * as path from "path";
//var path = require('path');
const fs = require("fs");
const jpath = require("jsonpath");

const readJson = async (filepath: String, jsonPath: String) => {
  let jsonFile = fs.readFileSync(filepath);
  let jsonObj = JSON.parse(jsonFile);

  var jsonData = jpath.query(jsonObj, jsonPath);
  return jsonData;
};
export { readJson };

// readJson("./testData.json","$..ClassicDev1.phone_number").then(function(value){
//    // var path = require('path');
//    console.log("value is " + value + "________ " + __dirname + "+++++  " );
//    path

// });
