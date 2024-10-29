//Manipulando Arrays
const numberArray: Array<number> = [1,2,3,4]

const stringsArray: string[] = ['a','b','c']

const buscaNum = numberArray.find(num => num >2)
console.log(buscaNum)

console.log(numberArray)
numberArray.forEach(num=> console.log(num))

numberArray.forEach(num =>{
    if(num >2 && num %2 ===0){
        console.log("Números pares: ",num *2)
    }
})

numberArray.map(num => console.log(num))