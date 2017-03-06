#!/usr/bin/env node
const { Readable } = require('stream')
const rs = new Readable() // rs = readstream
rs.push('line1 ')
rs.push('line2')
rs.push(null)

rs.on('data', buffer => {
	process.stdout.write(`received chunk: ${buffer.toString()}\n`)
})

rs.on('end', () => process.stdout.write('end of stream\n'))










////////////////////////////
// Notes
////////////////////////////

// createReadStream from require('fs')
// const readStream = createReadStream('fileName.txt')
//
// Emits data event after every chunk of data is read
//
// readStream.on('data', callbackFunction)

