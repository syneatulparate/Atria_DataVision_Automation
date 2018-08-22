const chai = require("chai").use(require("chai-as-promised"));

const randonname = async length => {
  let i;
  let randonname = "";
  let letters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //Include numbers if you want
  for (i = 0; i < length; i++) {
    randonname += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randonname;
};
export { randonname };
