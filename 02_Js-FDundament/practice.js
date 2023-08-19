const cart = [
    {iteam: "laptop",
      price: 50000},

      {iteam: "mobile",
      price: 35000},

      {iteam: "TV",
      price: 28000},

      {iteam: "AC",
      price: 16000},

      {iteam: "Refrigirator",
      price: 38000},
]

let maxValue = {iteam:"", price:0}
let minValue = {iteam:"", price: Number.MAX_VALUE}

function calResult(){
   for (let iteams of cart){
    if(iteams.price > maxValue.price){
        maxValue = iteams
    }
    if(iteams.price < minValue.price){
        minValue = iteams
    }
}
console.log(`The highest price iteam ${maxValue.iteam} you have bought and its price is Rs.${maxValue.price}/-`)
console.log(`The lowest price iteam ${minValue.iteam} you have bought and its price is Rs.${minValue.price}/-`)


let total = 0;
for(let value of cart){
 total += value.price
}
console.log(`Your cart total is Rs.${total}/- `)
}


   


calResult(cart)