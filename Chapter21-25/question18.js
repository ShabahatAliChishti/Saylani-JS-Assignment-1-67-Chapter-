var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
var count = str.split("the").length - 1;
document.write("Text : " + str + "<br>");
document.write("There are " + parseInt(count) + " occurrence(s) of the word " + "'the'" + "<br>");