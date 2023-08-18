const Student =[
    {name: "Rupesh",
    marks: 50},

    {name: "Ritesh",
    marks: 80},

    {name: "Rakesh",
    marks: 50},

    {name: "Rajesh",
    marks: 65},

]

const rupesh = [3,4,5,6,7]

function checkResult(names){
   for (let students of Student){
    if(students.name === names){
    return   students.marks >= 65? console.log(`Congratulations!! ${names} is passed in exam`): console.log('Sorry you have not cleared exam')
    }
    }
    console.log(`${names} is invalid user`)
   }

checkResult("Ritesh")

