const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  count: 0,
  getLength() {
    return this.count;
  },
  addLink(value) {
    if(arguments.length > 0) {
      this.chain.push(`( ${value} )`);
      this.count +=1;
    }
    else {
      this.chain.push(`( )`);
      this.count +=1;
    }
    return this;
  },
  removeLink(position) {
    if(isNaN(position)) {
      this.chain = [];
      throw  Error;
    }
    if ((position <= 0) || (position > this.chain.length ) ) {
      this.chain = [];
      throw Error;
    }
    const index = position - 1;
    const newArray = [...this.chain.slice(0, index), ...this.chain.slice(index+1)];
    this.chain = [...newArray];
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
