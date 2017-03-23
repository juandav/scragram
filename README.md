# Scragram

[![NPM](https://nodei.co/npm/scragram.png?downloads=true)](https://nodei.co/npm/scragram/)

```javascript
const scragram = require('scragram')
const hashTag = 'streaming'

scragram.getLinksTopPost(hashTag, (err, data) => {
  err ? console.log(err):console.log(data)
})
```
