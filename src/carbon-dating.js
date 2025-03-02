const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
const DECAY_CONSTANT = Math.LN2 / HALF_LIFE_PERIOD
const LOG_MODERN_ACTIVITY = Math.log(MODERN_ACTIVITY)

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity.trim() === '') {
    return false
  }

  const activity = Number(sampleActivity)
  if (activity <= 0 || activity > MODERN_ACTIVITY || !isFinite(activity)) {
    return false
  }

  return Math.ceil((LOG_MODERN_ACTIVITY - Math.log(activity)) / DECAY_CONSTANT)
}

module.exports = {
  dateSample,
}
