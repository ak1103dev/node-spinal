var { Broker } = require('spinal')
// var broker = new Broker({
//   redis: 6379,
//   restapi: 7577
// })
var broker = new Broker()
broker.start(7557, () => {
  console.log('Spinal:Broker listening...'  + 7557)
})

// setTimeout(function(){
//   broker.stop()
// }, 7000)
