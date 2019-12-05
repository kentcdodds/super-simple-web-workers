console.log('in main')
const worker = new Worker('worker.js')
worker.postMessage('Hello Worker')
worker.onmessage = e => {
  console.log('main received message', e.data)
}
