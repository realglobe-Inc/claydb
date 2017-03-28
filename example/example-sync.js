'use strict'

const clayLump = require('clay-lump')
const { SqliteDriver } = require('clay-driver-sqlite')

async function tryExample () {
  let lump01 = clayLump('lump01', {
    driver: new SqliteDriver('tmp/lump-01.db')
  })

  // Access to resource
  {
    const Dog = lump01.resource('Dog')

    let john = await Dog.create({ name: 'john', type: 'Saint Bernard', age: 3 })
    console.log('New dog created:', john) // -> { id: '1a6358694adb4aa89c15f94be50d5b78', name: 'john', type: 'Saint Bernard', age: 3 }
  }

  let lump02 = clayLump('lump02', {
    driver: new SqliteDriver('tmp/lump-02.db')
  })
  {
    const Dog = lump02.resource('Dog')
    let bess = await Dog.create({ name: 'bess', type: 'Chihuahua', age: 1 })
    console.log('New dog created:', bess)
  }

  // Sync lumps01 to lump02
  await lump02.sync(lump01) // Both lumps will be updated
  {
    const Dog = lump02.resource('Dog')
    let [ john ] = (await Dog.list({ filter: { name: 'john' } })).entities // Synced from lump01
    console.log(john) // -> { id: '1a6358694adb4aa89c15f94be50d5b78', name: 'john', type: 'Saint Bernard', age: 3 }
  }
}

tryExample().catch((err) => console.error(err))
