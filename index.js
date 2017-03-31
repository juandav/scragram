'use strict'
/*
  dependencies
*/
const request = require('./lib/request')
const url = {
  host: 'https://www.instagram.com/explore/tags/',
  key: `/?__a=1`
}

let getLinksTopPost = (tag, cb) => {
  let links = []
  request(`${url.host}${tag}${url.key}`, (err, data) => {
    let element = data.tag.top_posts.nodes
    for (let i in element)
    {
      links.push(element[i].display_src)
    }
    cb(err, links)
  })
}

module.exports = {
  'getLinksTopPost': getLinksTopPost
}
