import assert from 'assert'
import HyperspaceLive from '../src/hyperspace.js'

describe('hyperspace hypercore setup', function () {
  it('hello from hyperspace', function () {
    let dataAPI = new HyperspaceLive()
    assert.equal(dataAPI.hello, 'hyperspace')
  })
})