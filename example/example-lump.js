'use strict'

const clay = require('claydb')
const { SqliteDriver } = require('clay-driver-sqlite')

const clayLump = require('clay-lump')
const co = require('co')

co(function * () {
  let lump01 = clayLump('lump01')

  // Access to data sheet
  {
    const Dog = lump01.resource('Dog')

    let john = yield Dog.create({ name: 'john', type: 'Saint Bernard', age: 3 })
    console.log('New dog created:', john) // -> { id: '1a6358694adb4aa89c15f94be50d5b78', name: 'john', type: 'Saint Bernard', age: 3 }
  }

  let lump02 = clayLump('lump02')
  {
    const Dog = lump02.resource('Dog')
    let bess = yield Dog.create({ name: 'bess', type: 'Chihuahua', age: 1 })
    console.log('New dog created:', bess)
  }

  // Sync lumps01 to lump02
  yield lump02.sync(lump01) // Both lumps will be updated
  {
    const Dog = lump02.resource('Dog')
    let [ john ] = (yield Dog.list({ filter: { name: 'john' } })).entities // Synced from lump01
    console.log(john) // -> { id: '1a6358694adb4aa89c15f94be50d5b78', name: 'john', type: 'Saint Bernard', age: 3 }
  }
}).catch((err) => console.error(err))
