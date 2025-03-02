const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(`( ${String(value)} )`)
    return this // Enable chaining
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [] // Reset chain on error
      throw new Error("You can't remove incorrect link!")
    }

    this.chain.splice(position - 1, 1)
    return this // Enable chaining
  },

  reverseChain() {
    this.chain.reverse()
    return this // Enable chaining
  },

  finishChain() {
    const result = this.chain.join('~~')
    this.chain = [] // Reset chain
    return result
  },
}

module.exports = {
  chainMaker,
}
