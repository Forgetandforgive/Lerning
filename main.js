const telegramBot = require ("node-telegram-bot-api")


const token ="7169679565:AAH51PTgvL924tQ6WvQolJ0Rf3juBxIpLl0"

const options = { 
  polling : true}

const icpengo = new telegramBot (token ,options)

icpengo.on ("message", (callback) => {
  const id = callback.from.id
  icpengo.sendMessage (id, " welcome to icpengo bot klik website ")
})