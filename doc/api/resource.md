# clay-resource@2.8.2

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
  + [resource.toggleAnnotate()](#clay-resource-class-clay-resource-toggleAnnotate)
  + [resource.clone()](#clay-resource-class-clay-resource-clone)
  + [resource.addInbound(name, inbound)](#clay-resource-class-clay-resource-addInbound)
  + [resource.hasInbound(name)](#clay-resource-class-clay-resource-hasInbound)
  + [resource.removeInbound(name)](#clay-resource-class-clay-resource-removeInbound)
  + [resource.applyInbound(attributesArray)](#clay-resource-class-clay-resource-applyInbound)
  + [resource.inboundAttributes(attributes)](#clay-resource-class-clay-resource-inboundAttributes)
  + [resource.inboundAttributesArray(attributesArray)](#clay-resource-class-clay-resource-inboundAttributesArray)
  + [resource.inboundAttributesHash(attributesHash)](#clay-resource-class-clay-resource-inboundAttributesHash)
  + [resource.addOutbound(name, handler)](#clay-resource-class-clay-resource-addOutbound)
  + [resource.hasOutbound(name)](#clay-resource-class-clay-resource-hasOutbound)
  + [resource.removeOutbound(name)](#clay-resource-class-clay-resource-removeOutbound)
  + [resource.applyOutbound(entities)](#clay-resource-class-clay-resource-applyOutbound)
  + [resource.outboundEntity(entity)](#clay-resource-class-clay-resource-outboundEntity)
  + [resource.outboundEntityArray(entityArray)](#clay-resource-class-clay-resource-outboundEntityArray)
  + [resource.outboundCollection(collection)](#clay-resource-class-clay-resource-outboundCollection)
  + [resource.outboundEntityHash(entityHash)](#clay-resource-class-clay-resource-outboundEntityHash)
  + [resource.outboundCollectionArray(collectionArray)](#clay-resource-class-clay-resource-outboundCollectionArray)
  + [resource.getPolicy()](#clay-resource-class-clay-resource-getPolicy)
  + [resource.setPolicy(policy)](#clay-resource-class-clay-resource-setPolicy)
  + [resource.removePolicy()](#clay-resource-class-clay-resource-removePolicy)
  + [resource.fetchPolicy(digest)](#clay-resource-class-clay-resource-fetchPolicy)
  + [resource.savePolicy(policy)](#clay-resource-class-clay-resource-savePolicy)
  + [resource.addRef(resourceName, resource)](#clay-resource-class-clay-resource-addRef)
  + [resource.hasRef(resourceName)](#clay-resource-class-clay-resource-hasRef)
  + [resource.removeRef(resourceName)](#clay-resource-class-clay-resource-removeRef)
  + [resource.sub(name)](#clay-resource-class-clay-resource-sub)
  + [resource.subNames()](#clay-resource-class-clay-resource-subNames)
  + [resource.throwEntityNotFoundError(id)](#clay-resource-class-clay-resource-throwEntityNotFoundError)
  + [resource.internal(name)](#clay-resource-class-clay-resource-internal)
  + [resource.internalNames()](#clay-resource-class-clay-resource-internalNames)
  + [resource.prepareIfNeeded()](#clay-resource-class-clay-resource-prepareIfNeeded)
  + [resource.prepare()](#clay-resource-class-clay-resource-prepare)
  + [resource.addPrepareTask(name, task)](#clay-resource-class-clay-resource-addPrepareTask)
  + [resource.hasPrepareTask(name)](#clay-resource-class-clay-resource-hasPrepareTask)
  + [resource.removePrepareTask(name)](#clay-resource-class-clay-resource-removePrepareTask)
  + [resource.setNeedsPrepare(needsPrepare)](#clay-resource-class-clay-resource-setNeedsPrepare)
  + [resource.decorate(methodName, decorate)](#clay-resource-class-clay-resource-decorate)
+ [`AnnotateMixed`](#clay-resource-class) Class
  + [new AnnotateMixed()](#clay-resource-class-annotate-mixed-constructor)
  + [mixed.toggleAnnotate()](#clay-resource-class-annotate-mixed-toggleAnnotate)
+ [`CloneMixed`](#clay-resource-class) Class
  + [new CloneMixed()](#clay-resource-class-clone-mixed-constructor)
  + [mixed.clone()](#clay-resource-class-clone-mixed-clone)
+ [`DecorateMixed`](#clay-resource-class) Class
  + [new DecorateMixed()](#clay-resource-class-decorate-mixed-constructor)
  + [mixed.decorate(methodName, decorate)](#clay-resource-class-decorate-mixed-decorate)
+ [`InboundMixed`](#clay-resource-class) Class
  + [new InboundMixed()](#clay-resource-class-inbound-mixed-constructor)
  + [mixed.addInbound(name, inbound)](#clay-resource-class-inbound-mixed-addInbound)
  + [mixed.hasInbound(name)](#clay-resource-class-inbound-mixed-hasInbound)
  + [mixed.removeInbound(name)](#clay-resource-class-inbound-mixed-removeInbound)
  + [mixed.applyInbound(attributesArray)](#clay-resource-class-inbound-mixed-applyInbound)
  + [mixed.inboundAttributes(attributes)](#clay-resource-class-inbound-mixed-inboundAttributes)
  + [mixed.inboundAttributesArray(attributesArray)](#clay-resource-class-inbound-mixed-inboundAttributesArray)
  + [mixed.inboundAttributesHash(attributesHash)](#clay-resource-class-inbound-mixed-inboundAttributesHash)
+ [`InternalMixed`](#clay-resource-class) Class
  + [new InternalMixed()](#clay-resource-class-internal-mixed-constructor)
  + [mixed.internal(name)](#clay-resource-class-internal-mixed-internal)
  + [mixed.internalNames()](#clay-resource-class-internal-mixed-internalNames)
+ [`OutboundMixed`](#clay-resource-class) Class
  + [new OutboundMixed()](#clay-resource-class-outbound-mixed-constructor)
  + [mixed.addOutbound(name, handler)](#clay-resource-class-outbound-mixed-addOutbound)
  + [mixed.hasOutbound(name)](#clay-resource-class-outbound-mixed-hasOutbound)
  + [mixed.removeOutbound(name)](#clay-resource-class-outbound-mixed-removeOutbound)
  + [mixed.applyOutbound(entities)](#clay-resource-class-outbound-mixed-applyOutbound)
  + [mixed.outboundEntity(entity)](#clay-resource-class-outbound-mixed-outboundEntity)
  + [mixed.outboundEntityArray(entityArray)](#clay-resource-class-outbound-mixed-outboundEntityArray)
  + [mixed.outboundCollection(collection)](#clay-resource-class-outbound-mixed-outboundCollection)
  + [mixed.outboundEntityHash(entityHash)](#clay-resource-class-outbound-mixed-outboundEntityHash)
  + [mixed.outboundCollectionArray(collectionArray)](#clay-resource-class-outbound-mixed-outboundCollectionArray)
+ [`PolicyMixed`](#clay-resource-class) Class
  + [new PolicyMixed()](#clay-resource-class-policy-mixed-constructor)
  + [mixed.getPolicy()](#clay-resource-class-policy-mixed-getPolicy)
  + [mixed.setPolicy(policy)](#clay-resource-class-policy-mixed-setPolicy)
  + [mixed.removePolicy()](#clay-resource-class-policy-mixed-removePolicy)
  + [mixed.fetchPolicy(digest)](#clay-resource-class-policy-mixed-fetchPolicy)
  + [mixed.savePolicy(policy)](#clay-resource-class-policy-mixed-savePolicy)
+ [`PrepareMixed`](#clay-resource-class) Class
  + [new PrepareMixed()](#clay-resource-class-prepare-mixed-constructor)
  + [mixed.prepareIfNeeded()](#clay-resource-class-prepare-mixed-prepareIfNeeded)
  + [mixed.prepare()](#clay-resource-class-prepare-mixed-prepare)
  + [mixed.addPrepareTask(name, task)](#clay-resource-class-prepare-mixed-addPrepareTask)
  + [mixed.hasPrepareTask(name)](#clay-resource-class-prepare-mixed-hasPrepareTask)
  + [mixed.removePrepareTask(name)](#clay-resource-class-prepare-mixed-removePrepareTask)
  + [mixed.setNeedsPrepare(needsPrepare)](#clay-resource-class-prepare-mixed-setNeedsPrepare)
+ [`RefMixed`](#clay-resource-class) Class
  + [new RefMixed()](#clay-resource-class-ref-mixed-constructor)
  + [mixed.addRef(resourceName, resource)](#clay-resource-class-ref-mixed-addRef)
  + [mixed.hasRef(resourceName)](#clay-resource-class-ref-mixed-hasRef)
  + [mixed.removeRef(resourceName)](#clay-resource-class-ref-mixed-removeRef)
+ [`SubMixed`](#clay-resource-class) Class
  + [new SubMixed()](#clay-resource-class-sub-mixed-constructor)
  + [mixed.sub(name)](#clay-resource-class-sub-mixed-sub)
  + [mixed.subNames()](#clay-resource-class-sub-mixed-subNames)
+ [`ThrowMixed`](#clay-resource-class) Class
  + [new ThrowMixed()](#clay-resource-class-throw-mixed-constructor)
  + [mixed.throwEntityNotFoundError(id)](#clay-resource-class-throw-mixed-throwEntityNotFoundError)

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
+ `DecorateMixed`



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

<a class='md-heading-link' name="clay-resource-class-clay-resource-toggleAnnotate" ></a>

### resource.toggleAnnotate()



<a class='md-heading-link' name="clay-resource-class-clay-resource-clone" ></a>

### resource.clone() -> `Object`

Clone the instance

<a class='md-heading-link' name="clay-resource-class-clay-resource-addInbound" ></a>

### resource.addInbound(name, inbound) -> `InboundMixed`

Add inbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of inbound |
| inbound | function | Inbound function |


<a class='md-heading-link' name="clay-resource-class-clay-resource-hasInbound" ></a>

### resource.hasInbound(name) -> `boolean`

Check if has inbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of inbound |


<a class='md-heading-link' name="clay-resource-class-clay-resource-removeInbound" ></a>

### resource.removeInbound(name) -> `InboundMixed`

Remove inbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of inbound |


<a class='md-heading-link' name="clay-resource-class-clay-resource-applyInbound" ></a>

### resource.applyInbound(attributesArray) -> `Promise.<Array.<EntityAttributes>>`

Apply inbound to array of attributes

| Param | Type | Description |
| ----- | --- | -------- |
| attributesArray | Array.&lt;EntityAttributes&gt; | Array of attributes |


<a class='md-heading-link' name="clay-resource-class-clay-resource-inboundAttributes" ></a>

### resource.inboundAttributes(attributes) -> `Promise.<EntityAttributes>`

Inbound attributes

| Param | Type | Description |
| ----- | --- | -------- |
| attributes | EntityAttributes | Attributes to inbound |


<a class='md-heading-link' name="clay-resource-class-clay-resource-inboundAttributesArray" ></a>

### resource.inboundAttributesArray(attributesArray) -> `Promise.<Array.<EntityAttributes>>`

Inbound attributes array

| Param | Type | Description |
| ----- | --- | -------- |
| attributesArray | Array.&lt;EntityAttributes&gt; | Attributes array to inbound |


<a class='md-heading-link' name="clay-resource-class-clay-resource-inboundAttributesHash" ></a>

### resource.inboundAttributesHash(attributesHash) -> `Promise.<AttributesHash>`

Inbound attributes hash

| Param | Type | Description |
| ----- | --- | -------- |
| attributesHash | AttributesHash |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-addOutbound" ></a>

### resource.addOutbound(name, handler) -> `OutboundMixed`

Add outbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of outbound |
| handler | function | Format handler function |


<a class='md-heading-link' name="clay-resource-class-clay-resource-hasOutbound" ></a>

### resource.hasOutbound(name) -> `boolean`

Check if has outbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of outbound |


<a class='md-heading-link' name="clay-resource-class-clay-resource-removeOutbound" ></a>

### resource.removeOutbound(name) -> `OutboundMixed`

Remove outbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of outbound |


<a class='md-heading-link' name="clay-resource-class-clay-resource-applyOutbound" ></a>

### resource.applyOutbound(entities) -> `Promise.<Array.<ClayEntity>>`

Apply outbound to entities

| Param | Type | Description |
| ----- | --- | -------- |
| entities | Array.&lt;ClayEntity&gt; | Entities to outbound |


<a class='md-heading-link' name="clay-resource-class-clay-resource-outboundEntity" ></a>

### resource.outboundEntity(entity) -> `Promise.<ClayEntity>`

Format entity

| Param | Type | Description |
| ----- | --- | -------- |
| entity | ClayEntity |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-outboundEntityArray" ></a>

### resource.outboundEntityArray(entityArray) -> `Promise.<Array.<ClayEntity>>`

Proses entity array

| Param | Type | Description |
| ----- | --- | -------- |
| entityArray | Array.&lt;ClayEntity&gt; |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-outboundCollection" ></a>

### resource.outboundCollection(collection) -> `Promise.<ClayCollection>`

Format entity collection

| Param | Type | Description |
| ----- | --- | -------- |
| collection | ClayCollection |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-outboundEntityHash" ></a>

### resource.outboundEntityHash(entityHash) -> `Promise.<EntityHash>`

Format entity hash

| Param | Type | Description |
| ----- | --- | -------- |
| entityHash | EntityHash |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-outboundCollectionArray" ></a>

### resource.outboundCollectionArray(collectionArray) -> `Promise.<CollectionArray>`

Format collection array

| Param | Type | Description |
| ----- | --- | -------- |
| collectionArray | CollectionArray |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-getPolicy" ></a>

### resource.getPolicy() -> `ClayPolicy`

Get the policy

<a class='md-heading-link' name="clay-resource-class-clay-resource-setPolicy" ></a>

### resource.setPolicy(policy) -> `PolicyMix`

Set policy

| Param | Type | Description |
| ----- | --- | -------- |
| policy |  |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-removePolicy" ></a>

### resource.removePolicy()

Remove policy

<a class='md-heading-link' name="clay-resource-class-clay-resource-fetchPolicy" ></a>

### resource.fetchPolicy(digest) -> `Promise.<ClayPolicy>`

Fetch policy from db

| Param | Type | Description |
| ----- | --- | -------- |
| digest | string |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-savePolicy" ></a>

### resource.savePolicy(policy) -> `Promise.<string>`

Save policy

| Param | Type | Description |
| ----- | --- | -------- |
| policy | ClayPolicy |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-addRef" ></a>

### resource.addRef(resourceName, resource)

Add resource ref

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string |  |
| resource | ClayResource |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-hasRef" ></a>

### resource.hasRef(resourceName) -> `boolean`

has resources ref

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-removeRef" ></a>

### resource.removeRef(resourceName) -> `FormatMix`

Remove resource ref

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-sub" ></a>

### resource.sub(name) -> `ClayResource`

Get sub resource

| Param | Type | Description |
| ----- | --- | -------- |
| name | string |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-subNames" ></a>

### resource.subNames() -> `Promise.<Array.<string>>`

Get names of sub resources

<a class='md-heading-link' name="clay-resource-class-clay-resource-throwEntityNotFoundError" ></a>

### resource.throwEntityNotFoundError(id)

Throw entity not found error

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-internal" ></a>

### resource.internal(name) -> `ClayResource`

Get internal resource

| Param | Type | Description |
| ----- | --- | -------- |
| name | string |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-internalNames" ></a>

### resource.internalNames() -> `Promise.<Array.<string>>`

Get names of internal resources

<a class='md-heading-link' name="clay-resource-class-clay-resource-prepareIfNeeded" ></a>

### resource.prepareIfNeeded() -> `Promise`

Do prepare if needed

<a class='md-heading-link' name="clay-resource-class-clay-resource-prepare" ></a>

### resource.prepare() -> `Promise.<Object>`

Do preparing

<a class='md-heading-link' name="clay-resource-class-clay-resource-addPrepareTask" ></a>

### resource.addPrepareTask(name, task) -> `PrepareMixed`

Add prepare task

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of task |
| task | function | Task function |


<a class='md-heading-link' name="clay-resource-class-clay-resource-hasPrepareTask" ></a>

### resource.hasPrepareTask(name) -> `boolean`

Check if has task

| Param | Type | Description |
| ----- | --- | -------- |
| name | string |  |


<a class='md-heading-link' name="clay-resource-class-clay-resource-removePrepareTask" ></a>

### resource.removePrepareTask(name) -> `PrepareMixed`

Remove a task

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of task |


<a class='md-heading-link' name="clay-resource-class-clay-resource-setNeedsPrepare" ></a>

### resource.setNeedsPrepare(needsPrepare) -> `PrepareMixed`

Set needs prepare

| Param | Type | Description |
| ----- | --- | -------- |
| needsPrepare | boolean | Needs preparing |


<a class='md-heading-link' name="clay-resource-class-clay-resource-decorate" ></a>

### resource.decorate(methodName, decorate) -> `DecorateMixed`

Decorate a method

| Param | Type | Description |
| ----- | --- | -------- |
| methodName | string | Name of method |
| decorate | function | Decorate function |


<a class='md-heading-link' name="clay-resource-class"></a>

## `AnnotateMixed` Class






<a class='md-heading-link' name="clay-resource-class-annotate-mixed-constructor" ></a>

### new AnnotateMixed()

Constructor of AnnotateMixed class



<a class='md-heading-link' name="clay-resource-class-annotate-mixed-toggleAnnotate" ></a>

### mixed.toggleAnnotate()



<a class='md-heading-link' name="clay-resource-class"></a>

## `CloneMixed` Class






<a class='md-heading-link' name="clay-resource-class-clone-mixed-constructor" ></a>

### new CloneMixed()

Constructor of CloneMixed class



<a class='md-heading-link' name="clay-resource-class-clone-mixed-clone" ></a>

### mixed.clone() -> `Object`

Clone the instance

<a class='md-heading-link' name="clay-resource-class"></a>

## `DecorateMixed` Class






<a class='md-heading-link' name="clay-resource-class-decorate-mixed-constructor" ></a>

### new DecorateMixed()

Constructor of DecorateMixed class



<a class='md-heading-link' name="clay-resource-class-decorate-mixed-decorate" ></a>

### mixed.decorate(methodName, decorate) -> `DecorateMixed`

Decorate a method

| Param | Type | Description |
| ----- | --- | -------- |
| methodName | string | Name of method |
| decorate | function | Decorate function |


<a class='md-heading-link' name="clay-resource-class"></a>

## `InboundMixed` Class






<a class='md-heading-link' name="clay-resource-class-inbound-mixed-constructor" ></a>

### new InboundMixed()

Constructor of InboundMixed class



<a class='md-heading-link' name="clay-resource-class-inbound-mixed-addInbound" ></a>

### mixed.addInbound(name, inbound) -> `InboundMixed`

Add inbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of inbound |
| inbound | function | Inbound function |


<a class='md-heading-link' name="clay-resource-class-inbound-mixed-hasInbound" ></a>

### mixed.hasInbound(name) -> `boolean`

Check if has inbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of inbound |


<a class='md-heading-link' name="clay-resource-class-inbound-mixed-removeInbound" ></a>

### mixed.removeInbound(name) -> `InboundMixed`

Remove inbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of inbound |


<a class='md-heading-link' name="clay-resource-class-inbound-mixed-applyInbound" ></a>

### mixed.applyInbound(attributesArray) -> `Promise.<Array.<EntityAttributes>>`

Apply inbound to array of attributes

| Param | Type | Description |
| ----- | --- | -------- |
| attributesArray | Array.&lt;EntityAttributes&gt; | Array of attributes |


<a class='md-heading-link' name="clay-resource-class-inbound-mixed-inboundAttributes" ></a>

### mixed.inboundAttributes(attributes) -> `Promise.<EntityAttributes>`

Inbound attributes

| Param | Type | Description |
| ----- | --- | -------- |
| attributes | EntityAttributes | Attributes to inbound |


<a class='md-heading-link' name="clay-resource-class-inbound-mixed-inboundAttributesArray" ></a>

### mixed.inboundAttributesArray(attributesArray) -> `Promise.<Array.<EntityAttributes>>`

Inbound attributes array

| Param | Type | Description |
| ----- | --- | -------- |
| attributesArray | Array.&lt;EntityAttributes&gt; | Attributes array to inbound |


<a class='md-heading-link' name="clay-resource-class-inbound-mixed-inboundAttributesHash" ></a>

### mixed.inboundAttributesHash(attributesHash) -> `Promise.<AttributesHash>`

Inbound attributes hash

| Param | Type | Description |
| ----- | --- | -------- |
| attributesHash | AttributesHash |  |


<a class='md-heading-link' name="clay-resource-class"></a>

## `InternalMixed` Class






<a class='md-heading-link' name="clay-resource-class-internal-mixed-constructor" ></a>

### new InternalMixed()

Constructor of InternalMixed class



<a class='md-heading-link' name="clay-resource-class-internal-mixed-internal" ></a>

### mixed.internal(name) -> `ClayResource`

Get internal resource

| Param | Type | Description |
| ----- | --- | -------- |
| name | string |  |


<a class='md-heading-link' name="clay-resource-class-internal-mixed-internalNames" ></a>

### mixed.internalNames() -> `Promise.<Array.<string>>`

Get names of internal resources

<a class='md-heading-link' name="clay-resource-class"></a>

## `OutboundMixed` Class






<a class='md-heading-link' name="clay-resource-class-outbound-mixed-constructor" ></a>

### new OutboundMixed()

Constructor of OutboundMixed class



<a class='md-heading-link' name="clay-resource-class-outbound-mixed-addOutbound" ></a>

### mixed.addOutbound(name, handler) -> `OutboundMixed`

Add outbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of outbound |
| handler | function | Format handler function |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-hasOutbound" ></a>

### mixed.hasOutbound(name) -> `boolean`

Check if has outbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of outbound |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-removeOutbound" ></a>

### mixed.removeOutbound(name) -> `OutboundMixed`

Remove outbound

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of outbound |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-applyOutbound" ></a>

### mixed.applyOutbound(entities) -> `Promise.<Array.<ClayEntity>>`

Apply outbound to entities

| Param | Type | Description |
| ----- | --- | -------- |
| entities | Array.&lt;ClayEntity&gt; | Entities to outbound |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-outboundEntity" ></a>

### mixed.outboundEntity(entity) -> `Promise.<ClayEntity>`

Format entity

| Param | Type | Description |
| ----- | --- | -------- |
| entity | ClayEntity |  |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-outboundEntityArray" ></a>

### mixed.outboundEntityArray(entityArray) -> `Promise.<Array.<ClayEntity>>`

Proses entity array

| Param | Type | Description |
| ----- | --- | -------- |
| entityArray | Array.&lt;ClayEntity&gt; |  |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-outboundCollection" ></a>

### mixed.outboundCollection(collection) -> `Promise.<ClayCollection>`

Format entity collection

| Param | Type | Description |
| ----- | --- | -------- |
| collection | ClayCollection |  |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-outboundEntityHash" ></a>

### mixed.outboundEntityHash(entityHash) -> `Promise.<EntityHash>`

Format entity hash

| Param | Type | Description |
| ----- | --- | -------- |
| entityHash | EntityHash |  |


<a class='md-heading-link' name="clay-resource-class-outbound-mixed-outboundCollectionArray" ></a>

### mixed.outboundCollectionArray(collectionArray) -> `Promise.<CollectionArray>`

Format collection array

| Param | Type | Description |
| ----- | --- | -------- |
| collectionArray | CollectionArray |  |


<a class='md-heading-link' name="clay-resource-class"></a>

## `PolicyMixed` Class






<a class='md-heading-link' name="clay-resource-class-policy-mixed-constructor" ></a>

### new PolicyMixed()

Constructor of PolicyMixed class



<a class='md-heading-link' name="clay-resource-class-policy-mixed-getPolicy" ></a>

### mixed.getPolicy() -> `ClayPolicy`

Get the policy

<a class='md-heading-link' name="clay-resource-class-policy-mixed-setPolicy" ></a>

### mixed.setPolicy(policy) -> `PolicyMix`

Set policy

| Param | Type | Description |
| ----- | --- | -------- |
| policy |  |  |


<a class='md-heading-link' name="clay-resource-class-policy-mixed-removePolicy" ></a>

### mixed.removePolicy()

Remove policy

<a class='md-heading-link' name="clay-resource-class-policy-mixed-fetchPolicy" ></a>

### mixed.fetchPolicy(digest) -> `Promise.<ClayPolicy>`

Fetch policy from db

| Param | Type | Description |
| ----- | --- | -------- |
| digest | string |  |


<a class='md-heading-link' name="clay-resource-class-policy-mixed-savePolicy" ></a>

### mixed.savePolicy(policy) -> `Promise.<string>`

Save policy

| Param | Type | Description |
| ----- | --- | -------- |
| policy | ClayPolicy |  |


<a class='md-heading-link' name="clay-resource-class"></a>

## `PrepareMixed` Class






<a class='md-heading-link' name="clay-resource-class-prepare-mixed-constructor" ></a>

### new PrepareMixed()

Constructor of PrepareMixed class



<a class='md-heading-link' name="clay-resource-class-prepare-mixed-prepareIfNeeded" ></a>

### mixed.prepareIfNeeded() -> `Promise`

Do prepare if needed

<a class='md-heading-link' name="clay-resource-class-prepare-mixed-prepare" ></a>

### mixed.prepare() -> `Promise.<Object>`

Do preparing

<a class='md-heading-link' name="clay-resource-class-prepare-mixed-addPrepareTask" ></a>

### mixed.addPrepareTask(name, task) -> `PrepareMixed`

Add prepare task

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of task |
| task | function | Task function |


<a class='md-heading-link' name="clay-resource-class-prepare-mixed-hasPrepareTask" ></a>

### mixed.hasPrepareTask(name) -> `boolean`

Check if has task

| Param | Type | Description |
| ----- | --- | -------- |
| name | string |  |


<a class='md-heading-link' name="clay-resource-class-prepare-mixed-removePrepareTask" ></a>

### mixed.removePrepareTask(name) -> `PrepareMixed`

Remove a task

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Name of task |


<a class='md-heading-link' name="clay-resource-class-prepare-mixed-setNeedsPrepare" ></a>

### mixed.setNeedsPrepare(needsPrepare) -> `PrepareMixed`

Set needs prepare

| Param | Type | Description |
| ----- | --- | -------- |
| needsPrepare | boolean | Needs preparing |


<a class='md-heading-link' name="clay-resource-class"></a>

## `RefMixed` Class






<a class='md-heading-link' name="clay-resource-class-ref-mixed-constructor" ></a>

### new RefMixed()

Constructor of RefMixed class



<a class='md-heading-link' name="clay-resource-class-ref-mixed-addRef" ></a>

### mixed.addRef(resourceName, resource)

Add resource ref

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string |  |
| resource | ClayResource |  |


<a class='md-heading-link' name="clay-resource-class-ref-mixed-hasRef" ></a>

### mixed.hasRef(resourceName) -> `boolean`

has resources ref

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string |  |


<a class='md-heading-link' name="clay-resource-class-ref-mixed-removeRef" ></a>

### mixed.removeRef(resourceName) -> `FormatMix`

Remove resource ref

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string |  |


<a class='md-heading-link' name="clay-resource-class"></a>

## `SubMixed` Class






<a class='md-heading-link' name="clay-resource-class-sub-mixed-constructor" ></a>

### new SubMixed()

Constructor of SubMixed class



<a class='md-heading-link' name="clay-resource-class-sub-mixed-sub" ></a>

### mixed.sub(name) -> `ClayResource`

Get sub resource

| Param | Type | Description |
| ----- | --- | -------- |
| name | string |  |


<a class='md-heading-link' name="clay-resource-class-sub-mixed-subNames" ></a>

### mixed.subNames() -> `Promise.<Array.<string>>`

Get names of sub resources

<a class='md-heading-link' name="clay-resource-class"></a>

## `ThrowMixed` Class






<a class='md-heading-link' name="clay-resource-class-throw-mixed-constructor" ></a>

### new ThrowMixed()

Constructor of ThrowMixed class



<a class='md-heading-link' name="clay-resource-class-throw-mixed-throwEntityNotFoundError" ></a>

### mixed.throwEntityNotFoundError(id)

Throw entity not found error

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId |  |




