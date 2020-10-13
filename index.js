#!/usr/bin/env node
require('http').createServer().listen(Number(process.argv[2]) ? Number(process.argv[2]) : process.env.PITFALL_PORT || 9999)