# Scragram [![License][license-img]][license-url]

[![NPM](https://nodei.co/npm/scragram.png?downloads=true)](https://nodei.co/npm/scragram/)


```javascript
const scragram = require('scragram')
const hashTag = 'streaming'

// It allows to quickly consult the link of the top posts.
scragram.getLinksTopPost(hashTag, (err, data) => {
  err ? console.log(err):console.log(data)
})

/***
 data out
 {
   "data":[
     "link1.jpg",
     ....
     ....
     "link10.jpg"
   ]
 }
***/

```

### Use in console

#### Install
```
(sudo) npm install scragram -g
```

#### Use
```
scragram yourhashtag
```

#### Example
```
scragram streaming
```

[license-url]: https://choosealicense.com/licenses/mit/
[license-img]: https://img.shields.io/github/license/juandav/scragram.svg?style=flat-square
