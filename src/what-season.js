const { NotImplementedError } = require('../extensions/index.js')
const { isDate } = require('util').types
/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'

  if (!isDate(date) || Object.getPrototypeOf(date) !== Date.prototype || isNaN(date.getTime())) {
    throw new Error('Invalid date!')
  }

  const month = date.getMonth()
  if (month < 2 || month === 11) return 'winter'
  if (month < 5) return 'spring'
  if (month < 8) return 'summer'
  return 'autumn'
}

module.exports = {
  getSeason,
}
