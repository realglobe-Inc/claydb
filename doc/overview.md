ClayDB written in pure javascript and use pluggable storage to store data. 
Storage can be RDMS like MySQL, files like JSON, LocalStorage in browser, or anything which can store data.

ClayDB is a collection of distributed node called **Lump**, which wraps storage with driver and provide resources to outside.
Each **Lump**s can be merged one another.

<img src="assets/images/claydb-overview.png" 
    alt="Overview"
/>