# clay-resource@2.8.1

Resource accessor for ClayDB

+ Functions
  + [()](#clay-resource-function-undefined)
+ [`ClayResource`](#clay-resource-class) Class
  + [new ClayResource(nameString, bounds, options)](#clay-resource-class-clay-resource-constructor)
  + [resource.one(id)](#clay-resource-class-clay-resource-one)
  + [resource.list(condition)](#clay-resource-class-clay-resource-list)
  + [resource.create(attributes)](#clay-resource-class-clay-resource-create)
  + [resource.update(id, attributes)](#clay-resource-class-clay-resource-update)
  + [resource.destroy(id)](#clay-resource-class-clay-resource-destroy)
  + [resource.drop()](#clay-resource-class-clay-resource-drop)
  + [resource.oneBulk(ids)](#clay-resource-class-clay-resource-oneBulk)
  + [resource.listBulk(conditionArray)](#clay-resource-class-clay-resource-listBulk)
  + [resource.createBulk(attributesArray)](#clay-resource-class-clay-resource-createBulk)
  + [resource.updateBulk(attributesHash)](#clay-resource-class-clay-resource-updateBulk)
  + [resource.destroyBulk(ids)](#clay-resource-class-clay-resource-destroyBulk)
  + [resource.cursor(options)](#clay-resource-class-clay-resource-cursor)
  + [resource.first(filter, options)](#clay-resource-class-clay-resource-first)
  + [resource.seal(privateKey, options)](#clay-resource-class-clay-resource-seal)
  + [resource.has(id)](#clay-resource-class-clay-resource-has)
  + [resource.exists(filter)](#clay-resource-class-clay-resource-exists)
  + [resource.count(filter)](#clay-resource-class-clay-resource-count)
  + [resource.of(attributes)](#clay-resource-class-clay-resource-of)

## Functions

<a class='md-heading-link' name="clay-resource-function-undefined" ></a>

### ()




<a class='md-heading-link' name="clay-resource-class"></a>

## `ClayResource` Class

Resource accessor

**Extends**:

+ `AnnotateMixed`
+ `CloneMixed`
+ `InboundMixed`
+ `OutboundMixed`
+ `PolicyMixed`
+ `RefMixed`
+ `SubMixed`
+ `ThrowMixed`
+ `InternalMixed`
+ `PrepareMixed`



<a class='md-heading-link' name="clay-resource-class-clay-resource-constructor" ></a>

### new ClayResource(nameString, bounds, options)

Constructor of ClayResource class

| Param | Type | Description |
| ----- | --- | -------- |
| nameString | string | Name string |
| bounds | Object.&lt;string, function()&gt; | Method bounds |
| options | Object | Optional settings |
| options.annotates | boolean | Enable annotation |
| options.refs | Array.&lt;ClayResource&gt; | Add resource refs |


<a class='md-heading-link' name="clay-resource-class-clay-resource-one" ></a>

### resource.one(id) -> `Promise.<ClayEntity>`

Get a resource

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId | Id of the entity |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryOne () {
  let product = await Product.one(1) // Find by id
  console.log(product)
}
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-list" ></a>

### resource.list(condition) -> `Promise.<ClayCollection>`

List entities from resource

| Param | Type | Description |
| ----- | --- | -------- |
| condition | ListCondition | List condition query |
| condition.filter | FilterTerm | Filter condition |
| condition.page | PagerTerm | Page condition |
| condition.page.number | number | Number of page, start with 1 |
| condition.page.size | number | Number of resources per page |
| condition.sort | SortTerm | Sort condition |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryList () {
  let products = await Product.list({
    filter: { type: 'Vehicle' },  // Filter condition
    page: { number: 1, size: 25 }, // Paginate
    sort: [ 'createdAt', '-name' ] // Sort condition
  })
  console.log(products)
}
tryList()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-create" ></a>

### resource.create(attributes) -> `Promise.<ClayEntity>`

Create a new entity with resource

| Param | Type | Description |
| ----- | --- | -------- |
| attributes | Object | Resource attributes to create |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryCreate () {
  let product = await Product.create({
    name: 'Super Car',
    type: 'Vehicle'
  })
  console.log(product)
}
tryCreate()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-update" ></a>

### resource.update(id, attributes) -> `Promise.<ClayEntity>`

Update an existing entity in resource

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId | Resource id |
| attributes | Object | Resource attributes to update |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryUpdate () {
  let product = await Product.update(1, {
    name: 'Super Super Car'
  })
  console.log(product)
}
tryUpdate()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-destroy" ></a>

### resource.destroy(id) -> `Promise.<number>`

Delete a entity resource

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId | Resource id |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryDestroy () {
  await Product.destroy(1)
}
tryDestroy()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-drop" ></a>

### resource.drop() -> `Promise.<boolean>`

Drop resource
**Example**:

```javascript
const Product = lump.resource('Product')
async function tryDrop () {
  await Product.drop()
}
tryDrop()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-oneBulk" ></a>

### resource.oneBulk(ids) -> `Promise.<Object.<ClayId, ClayEntity>>`

One as bulk

| Param | Type | Description |
| ----- | --- | -------- |
| ids | Array.&lt;ClayId&gt; | Resource ids |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryOneBulk () {
  let products = await Product.oneBulk([ 1, 5, 10 ])
  console.log(products)
}
tryOneBulk()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-listBulk" ></a>

### resource.listBulk(conditionArray) -> `Promise.<Array.<ClayCollection>>`

List with multiple conditions

| Param | Type | Description |
| ----- | --- | -------- |
| conditionArray | Array.&lt;ListCondition&gt; |  |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryListBulk () {
  let [ cars, ships ] = await Product.listBulk([
    { filter: { type: 'CAR' } },
    { filter: { type: 'SHIP' } },
  ])
  console.log(cars)
  console.log(ships)
}
tryListBulk()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-createBulk" ></a>

### resource.createBulk(attributesArray) -> `Promise.<Array.<ClayEntity>>`

Create multiple resources

| Param | Type | Description |
| ----- | --- | -------- |
| attributesArray | Array.&lt;Object&gt; | List of attributes |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryCreateBulk () {
  let products = await Product.createBulk([
    { name: 'Super Orange', type: 'CAR' },
    { name: 'Ultra Green', type: 'CAR' },
  ])
  console.log(products)
}
tryCreateBulk()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-updateBulk" ></a>

### resource.updateBulk(attributesHash) -> `Promise.<Object.<ClayId, ClayEntity>>`

Update multiple resources

| Param | Type | Description |
| ----- | --- | -------- |
| attributesHash | Object.&lt;ClayId, Object&gt; | Hash of attributes |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryUpdateBulk () {
  let products = await Product.updateBulk({
    '1': { name: 'Super Super Orange' },
    '2': { name: 'Ultra Ultra Green' },
  })
  console.log(products)
}
tryUpdateBulk()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-destroyBulk" ></a>

### resource.destroyBulk(ids) -> `Promise.<number>`

Update multiple resources

| Param | Type | Description |
| ----- | --- | -------- |
| ids | Array.&lt;ClayId&gt; | Ids to destroy |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryDestroyBulk () {
  await Product.destroyBulk([1, 2])
})
tryDestroyBulk()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-cursor" ></a>

### resource.cursor(options) -> `Object`

Create cursor to cursor

| Param | Type | Description |
| ----- | --- | -------- |
| options | Object | Optional settings |
| options.filter | FilterTerm | Filter condition |
| options.sort | SortTerm | Sort condition |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryCursor () {
  let cursor = await Product.cursor({
    filter: { type: 'CAR' }
  })
  console.log(cursor.length) // Number of entities matches the condition
  for (let fetch of cursor) {
    let car = yield fetch() // Fetch the pointed entity
    console.log(car)
  }
}
tryCursor()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-first" ></a>

### resource.first(filter, options) -> `Promise.<?ClayEntity>`

Get the first entity matches filter

| Param | Type | Description |
| ----- | --- | -------- |
| filter | FilterTerm | Listing filter |
| options | Object | Optional settings |
| options.sort | Object | Sort conditions |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryFirst () {
  let product = Product.first({ name: 'Super Super Orange' })
  console.log('product')
}
tryFirst()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-seal" ></a>

### resource.seal(privateKey, options) -> `Promise`

Seal resources

| Param | Type | Description |
| ----- | --- | -------- |
| privateKey | string | RSA Private key |
| options | Object | Optional settings |
| options.by | string | For $$by |

**Example**:

```javascript
const Product = lump.resource('Product')
const privateKey = 'xxxxxxxxxxxxxxxxxxxxxxxxx'
async function trySeal () {
  await Product.seal(privateKey)
}
trySeal()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-has" ></a>

### resource.has(id) -> `Promise.<boolean>`

Check entity with id exists

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId | Id of the entity |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryHas () {
  let has = await Product.has(1)
  console.log(has)
}
tryHas()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-exists" ></a>

### resource.exists(filter) -> `Promise.<boolean>`

Check data exists with filter

| Param | Type | Description |
| ----- | --- | -------- |
| filter | FilterTerm | List filter |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryExists () {
  let exists = await Product.exists({ name: 'Super Super Orange' })
  console.log(exists)
}
tryExists()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-count" ></a>

### resource.count(filter) -> `Promise.<number>`

Count data matches filter

| Param | Type | Description |
| ----- | --- | -------- |
| filter | FilterTerm | List filter |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryCount () {
  let count = await Product.count({ type: 'CAR' })
  console.log(count)
}
tryCount()
```

<a class='md-heading-link' name="clay-resource-class-clay-resource-of" ></a>

### resource.of(attributes)

Find entity with attributes and returns if found.
If not found, create and return the one.

| Param | Type | Description |
| ----- | --- | -------- |
| attributes | Object | Attributes |

**Example**:

```javascript
const Product = lump.resource('Product')
async function tryOf () {
  let values = await Product.of({ code: '#1234' })
  console.log(values)
}
tryOf()
```



