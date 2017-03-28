'use strict'

const clayLump = require('clay-lump')
const { SqliteDriver } = require('clay-driver-sqlite')

async function tryExample () {
  let lump01 = clayLump('lump01', {
    driver: new SqliteDriver('tmp/lump-01.db')
  })

  // Access to resource
  {
    const Dog = lump01.resource('Dog') // Access to resource

    let john = await Dog.create({ name: 'john', type: 'Saint Bernard', age: 3 })
    console.log('New dog created:', john) // -> { id: '1a6358694adb4aa89c15f94be50d5b78', name: 'john', type: 'Saint Bernard', age: 3 }

    let dogs = await Dog.list({
      filter: { type: 'Saint Bernard' },
      page: { size: 25, number: 1 }
    })

    console.log(dogs) // -> { entities: [ /* ... */ ], meta: { /* ... */ } }
  }
}

tryExample().catch((err) => console.error(err))
