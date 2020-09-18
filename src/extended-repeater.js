const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator = '+', addition , additionRepeatTimes ,additionSeparator ='|'}) {
  if(typeof addition === 'boolean' || addition === null) { isAddition = true} 
    else {
        isAddition = addition
    } 
    const additionRes = isAddition ? (addition+additionSeparator).repeat(additionRepeatTimes-1)+addition : '';
    res = str+additionRes+separator;
    return res.repeat(repeatTimes-1)+str+additionRes;
};
  