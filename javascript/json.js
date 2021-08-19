'use strict'

let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
    name: 'toto',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function() {
        console.log(`${this.name} can jump~!!`)
    }
}

json = JSON.stringify(rabbit)
console.log(json)
json = JSON.stringify(rabbit, ['name'])
console.log(json)


json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'minbro' : value
})
console.log(json)

console.clear()

json = JSON.stringify(rabbit)
console.log(rabbit.birthDate.getDate())

const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value
})
console.log(obj)