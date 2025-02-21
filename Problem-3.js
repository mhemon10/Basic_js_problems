
function isBestFriend(friend1, friend2) {
    
    if (typeof friend1 !== 'object' || friend1 === null || typeof friend2 !== 'object' || friend2 === null) {
        return "Invalid";
    }


    if (!('name' in friend1) || !('roll' in friend1) || !('bestFriend' in friend1) ||
        !('name' in friend2) || !('roll' in friend2) || !('bestFriend' in friend2)) {
        return "Invalid";
    }

    
   
    return friend1.bestFriend === friend2.roll && friend2.bestFriend === friend1.roll;
}


const friendA = { name: "Alice", roll: 1, bestFriend: 2 };
const friendB = { name: "Bob", roll: 2, bestFriend: 1 };

console.log(isBestFriend(friendA, friendB)); 

const friendC = { name: "Charlie", roll: 3, bestFriend: 4 };
const friendD = { name: "David", roll: 4, bestFriend: 3 };

console.log(isBestFriend(friendC, friendD)); 

const friendE = { name: "Eve", roll: 5, bestFriend: 6 };
const friendF = { name: "Frank", roll: 6, bestFriend: 7 };

console.log(isBestFriend(friendE, friendF)); 


console.log(isBestFriend("not an object", friendB)); 
console.log(isBestFriend(friendA, null)); 
console.log(isBestFriend(friendA, 123)); 
console.log(isBestFriend(friendA, { name: "Gina" })); 



