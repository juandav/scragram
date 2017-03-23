/*
  lib request
*/
'use strict'
const http = require('https')
let request = (url, cb) => {
  http.get(url, (res) => {
    res.setEncoding('utf8')
    let rawData = ''
    res.on('data', (chunk) => rawData += chunk)
    res.on('end', () => {
      try
      {
        let parsedData = JSON.parse(rawData)
        cb(null, parsedData)
      }
      catch (e)
      {
        cb(e.message, null)
      }
    })
  })
}

module.exports = request
