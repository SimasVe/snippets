//-----------------------------------------------
//replaces all white noise(like spaces $ # % , . symbols) with whatever you want
var newStr = str.replace(/[\W_]+/g, "");
//-----------------------------------------------