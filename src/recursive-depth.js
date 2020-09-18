const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.count = 1;
}
calculateDepth(arr) {
    const newArr =[];
    arr.forEach((element) => {
        if (Array.isArray(element)){
            if(element.length === 0) {
                newArr.push('aa');
            }
            element.forEach((el) =>  {
                newArr.push(el);
            })
        }
    });
     if(newArr.length === 0) {
        const res = this.count;
        this.count = 1;
         return res;
     }
    this.count +=1;
    return this.calculateDepth(newArr);
}
};