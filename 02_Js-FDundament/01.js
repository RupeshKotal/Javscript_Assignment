const users = [
    "Rupesh",
    "Ritesh",
    "Parth",
    "utkasrh"
]

function allFunct(userPrest){
    if(users.includes(userPrest)){
        console.log(`Yes , ${userPrest} is valid User`)
        return true;
    }
    else{
        console.log(`NO, ${userPrest} is not vaid user`)
        return true;
    }
}

// allFunct("Rupesh")
// allFunct("rajesh")


function isPresent(user){
    console.log(`${user} ${users.includes(user)? 'is' : 'is not'} in the sentence`)
}

// isPresent("kartik")
// isPresent("Rupesh")


