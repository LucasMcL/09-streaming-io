#!/usr/bin/env node
const { Readable, Writable, Transform } = require('stream')
const readStream = new Readable()
const writeStream = new Writable()
const transformStream = new Transform()
let i = 0

readStream._read = () => {
  if (i > 100) {
    readStream.push(null) // when null is pushed to the stream, it emits an 'end' event
  }
  else {
    readStream.push(`${i++}`)  // have to make i a string. Streams only handle strings and buffers
  }
}

// writeStream._write = (buffer, _, cb) => {
//   process.stdout.write(`${buffer.toString()}\n`)
//   cb()
// }

transformStream._transform = function(buffer, _, cb) {
	output = Number(buffer) / 2 + 7
	// process.stdout.write(`${output}\n`)
	cb(null, `${output.toString()}\n`)
}

readStream.pipe(transformStream).pipe(process.stdout)








////////////////////////////
// Notes
////////////////////////////

// createReadStream from require('fs')
// const readStream = createReadStream('fileName.txt')
//
// Emits data event after every chunk of data is read
//
// readStream.on('data', callbackFunction)

