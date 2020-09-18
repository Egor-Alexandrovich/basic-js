const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((element) => {
    element.forEach((item) => {
      if(item === '^^') {count +=1}
    })
  });
  return count;
};
