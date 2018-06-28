/**
 * Module dependencies.
 *
 * @private
 */

const icons = require('./icons')

/**
 * Module exports.
 *
 * @public
 */
module.exports = getIcons

/**
 * Returns all the FontAwesome icons.
 * 
 * @param  {boolean} getFullClass
 * @return {array}
 */
function getIcons (getFullClass = true) {
  if (! getFullClass) {
    return icons
  }

  return icons.map((className) => `fa fa-${className}`)
}
