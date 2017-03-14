/**
 * A distributed NoSQL to handle data as web resource
 * @module claydb
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get collection () { return d(require('./collection')) },
  get entity () { return d(require('./entity')) },
  get id () { return d(require('./id')) },
  get lump () { return d(require('./lump')) },
  get resource () { return d(require('./resource')) }
}
