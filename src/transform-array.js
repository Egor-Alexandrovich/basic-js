const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error;
    if (arr.length === 0 ) { return arr}
    const newArr = [];
    arr.forEach((elem, index) => {
        let prevElement = null;
        let nextElement = null;
        const currentElem = [];
        if (index !== 0) {
            prevElement = arr[index-1];
        }
        if (index !== arr.length) {
            nextElement = arr[index+1]
        }
        if(!(elem ==='--discard-next' || elem ==='--discard-prev' || elem ==='--double-next' || elem ==='--double-prev') ) {
            currentElem.push(elem);
            if(prevElement === '--double-next') {
                currentElem.push(elem);
            }
            if (prevElement === '--discard-next') {
                currentElem.pop();
            }
            if(nextElement === '--double-prev' && prevElement !== '--discard-next') {
                currentElem.push(elem);
            }
            if (nextElement === '--discard-prev' && prevElement !== '--discard-next') {
                if(currentElem.length === 0 && prevElement === '--discard-next') {
                    newArr.pop();
                } else { currentElem.pop();}
            }
            currentElem.forEach((el) => {newArr.push(el)})
        }
        
    })
    if(arr[4] == 1337) { console.log(newArr)}
    return newArr;
};
