//using a module we created and exported in 02.utils.js and 03.isSquaredutils.js

const getName = require("./02.nameutils");
const isSquared = require("./03.issquaredutils");

getName("Sandra", "Bullock");
getName("Michael", "Egbinola");

isSquared(81);
