const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const substract = document.querySelector('#substract')
const multiply = document.querySelector('#multiply')
const resultBox = document.querySelector('.result')

// const sum = () => {
    // const result=parseInt(a.value)+ parseInt(b.value)
    // resultBox.innerHTML = result
// }

// const product = () => {
    // const result=parseInt(a.value) * parseInt(b.value)
    // resultBox.innerHTML = result
// }

// const substract = () => {
    // const result=parseInt(a.value) - parseInt(b.value)
    // resultBox.innerHTML = result
// }


const calculate = (event,operation) => {
    // console.log(event.target)
    // if(operation == 'add') {
        // console.log('adding')
        // return sum()
    // }
    // else if(operation == 'multiply') {
        // console.log('multiply')
    //    return product()
    // }
    switch (operation) {
        case "add":
            resultBox.innerHTML = parseInt(a.value) + parseInt(b.value);
            break;
        case "multiply":
            resultBox.innerHTML = parseInt(a.value) * parseInt(b.value);
            break;
        case "substract":
            resultBox.innerHTML = parseInt(b.value) - parseInt(a.value);
            break;

        
    }

}

add.addEventListener('click', (event) => {
    return calculate(event, 'add')
})
multiply.addEventListener('click', (event) => {
    return calculate(event, 'multiply')
})
add.addEventListener('click', (event) => {
    return calculate(event, 'substract')
})

