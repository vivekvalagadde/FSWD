
console.log(require('./index'))

const add = () => {
    console.log('I add stuff')
}

const substract = () => {
    console.log('I subtract stuff')
}

const multiply = () => {
    console.log('I multiply stuff')
}

module.exports.add = add
module.exports.substract = substract
module.exports.multiply = multiply

module.exports.message = 'message'

