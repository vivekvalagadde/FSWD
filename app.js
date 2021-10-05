let car = {
    name: "C Class",
    manu: "xyz" ,
    print: () => {
        console.log(`${this.name} was created by ${this.manu}`)
    }
}

console.log(Object.keys(car))
console.log(Object.values(car))