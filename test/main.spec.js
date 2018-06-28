const test = require('japa')
const icons = require('../index')

test('Should return an array of 565 length', (assert) => {
  assert.lengthOf(icons(), 675)
  assert.lengthOf(icons(true), 675)
  assert.lengthOf(icons(false), 675)
})

test('Should be able to return the full class', (assert) => {
  for (let icon of icons(true)) {
    assert.isTrue(/^fa\sfa-/.test(icon))
  }
})

test('Should be able to return the icon name', (assert) => {
  for (let icon of icons(false)) {
    assert.isFalse(/^fa\sfa-/.test(icon))
  }
})
