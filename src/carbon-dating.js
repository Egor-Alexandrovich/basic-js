const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') {
    return false
  }
  const  sampleActivityFloat = parseFloat(sampleActivity);
  if (sampleActivityFloat <=0 || sampleActivityFloat >= 15) {
    return false
  }
  const isNumber = /^[0-9].*$/.test(sampleActivity);
  if(isNumber) { 
    const rateConstant = 0.693/HALF_LIFE_PERIOD;
    const activityConst = MODERN_ACTIVITY/sampleActivityFloat;
    return Math.ceil(Math.log(activityConst)/rateConstant);
  }
  return false;
  
};
