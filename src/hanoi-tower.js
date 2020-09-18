const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    const minTurns = Math.pow(2,disksNumber) - 1;
    const turnsSpeedSecond = turnsSpeed/3600;
    const result = Math.floor(minTurns/turnsSpeedSecond);
    return {
        turns : minTurns,
        seconds : result
    }
};
