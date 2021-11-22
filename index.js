#!/usr/bin/env node
var port = Number(process.argv[2]) ? Number(process.argv[2]) : process.env.PITFALL_PORT || 9999
require('http').createServer().listen(port, function () {
  console.log('An http server that never responds is set up on http://localhost:' + String(port))
})