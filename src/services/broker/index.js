var { Broker } = require('spinal')
// var broker = new Broker({
//   redis: 6379,
//   restapi: 7577
// })
var broker = new Broker()
broker.start(process.env.PORT || 7557, function(){
  console.log('Spinal:Broker listening...' + this.port)
})

// setTimeout(function(){
//   broker.stop()
// }, 7000)
