const test = require('tape')
const scragram = require('./../index')

test('Imagenes de publicaciones destacadas', (t) => {
  t.plan(2)
  const hashTag = 'streaming'
  scragram.getLinksTopPost(hashTag, (err, data) => {
    t.error(err)
    t.true(Object.prototype.toString.call( data ) === '[object Array]')
  })
})
