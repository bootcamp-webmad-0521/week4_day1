const chalk = require('chalk')
const faker = require('faker')

const randomName = faker.name.findName()
const randomEmail = faker.internet.email()

const redText = chalk.bgBlue(`El nombre fake es ${randomName}, y su email ${randomEmail}`)

console.log(redText)