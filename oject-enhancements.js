


function creatInstructor(firstName, lastName) {
    return{
        firstName,lastName
    }
}

let favoriteNumber = 42;
const instructor1 = {
    firstName: "Colt",
    [favoriteNumber]: "That is my Favorite!!!"
}

const instructor = {
    firstName: "colt",
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

const c = Animal ("cat", "stare", "hiss!")
const d = Animal ("dog", "bark", "woof!")
