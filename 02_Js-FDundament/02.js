// let cartValue = [500,600,700,800]
// let TotalSum = cartValue.reduce(function(acc, val){
//   return acc + val
// }, 0)



// console.log(TotalSum)


function TotalSum(){
    let arr = Array.from(arguments)
let sum =   arr.reduce(function(acc, val){
        return acc + val
    },0)

    console.log(`The Total cart value is ${sum}`)

}

TotalSum(45, 67, 87,560)


function cartValue(){
    let TotalValue = 0;

    for ( let i= 0; i < arguments.length; i++){
        TotalValue += arguments[i]
    }
 console.log(`The Total cart value is ${TotalValue}`)
}

cartValue(50,60,70,80)




