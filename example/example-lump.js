'use strict'

const clayLump = require('clay-lump')
const { SqliteDriver } = require('clay-driver-sqlite')

async function tryExample () {
  let lump01 = clayLump('lump01', {
    driver: new SqliteDriver('tmp/lump-01.db')
  })

  // Access to resource.
  {
    const Dog = lump01.resource('Dog')

    // Add an entity to resource
    let john = await Dog.create({ name: 'John', type: 'Saint Bernard', age: 3 })
    console.log('New dog created:', john) // -> { id: '1a6358694adb4aa89c15f94be50d5b78', name: 'john', type: 'Saint Bernard', age: 3 }

    // List entities from resource
    let dogs = await Dog.list({
      filter: { type: 'Saint Bernard' },
      page: { size: 25, number: 1 }
    })
    console.log('Found dogs:', dogs) // -> { entities: [ /* ... */ ], meta: { /* ... */ } }

    // Get entity with id
    let johnAgain = await Dog.one(john.id)
    console.log('From id', johnAgain)

    // Update date
    await Dog.update(john.id, { name: 'Shinny John' })

    // Destroy data
    await Dog.destroy(john.id)
  }
}

tryExample().catch((err) => console.error(err))
