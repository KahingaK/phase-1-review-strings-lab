// Write your code in this file!
const currentUser = "Ivan"
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!` 


let upperCaseCurrentUser = currentUser.toUpperCase()
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`


const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
const shortGreeting = `Welcome, ${firstInitial}!`
console.log(shortGreeting)