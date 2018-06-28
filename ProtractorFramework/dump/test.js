var date = new Date();
var timeStamp = date.getTime();
console.log(timeStamp);
console.log("Month ===>" + date.getMonth());
console.log(date.getDay().toString() + date.getMonth() + date.getFullYear() + date.getHours() + date.getMinutes(), date.getSeconds(), date.getMilliseconds());
