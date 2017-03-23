# Scragram

```javascript
const scragram = require('scragram')
const hashTag = 'streaming'

scragram.getLinksTopPost(hashTag, (err, data) => {
  err ? console.log(err):console.log(data)
})
```
