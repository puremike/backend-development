//using a module we created and exported in 02.utils.js and 03.isSquaredutils.js

const getName = require("./02nameutils");
const isSquared = require("./03issquaredutils");
const checkEvenOrOdd = require("./04checkevenodd");

getName("Sandra", "Bullock");
getName("Michael", "Egbinola");

isSquared(81);

checkEvenOrOdd(9);
