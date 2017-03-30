'use strict'

const clayLump = require('clay-lump')

async function tryExample () {
  let lump01 = clayLump('lump01', {
    /* ... */
  })

  const Cat = lump01.reosurce('Cat')

  // Register resource policy
  Cat.policy({
    name: {
      type: 'STRING',
      required: true,
      minLength: 2
    },
    breed: {
      type: 'STRING',
      oneOf: [ 'Abyssinian', 'Balinese', ...[ /* ... */ ] ]
    }
  })

  // Throws error if policy not matches
  await Cat.create({ /* ... */ })
}

tryExample().catch((err) => console.error(err))
