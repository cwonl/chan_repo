// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var"; // This is actually function-scoped or global-scoped
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(blockVar); // Accessible since blockVar is function-scoped or global
// console.log(blockLet); // Not accessible, will throw ReferenceError

function show() {
    var functionVar = "I'm a function-scoped var";
    let functionLet = "I'm a function-scoped let";
    const functionConst = "I'm a function-scoped const";
    
    console.log(functionVar); // Accessible
    console.log(functionLet); // Accessible
    console.log(functionConst); // Accessible
}
show();

try {
    console.log(functionVar); // Throws ReferenceError (functionVar is not defined outside show)
    console.log(functionLet); // Throws ReferenceError (functionLet is not defined outside show)
    console.log(functionConst); // Throws ReferenceError (functionConst is not defined outside show)
} catch (e) {
    console.error(e); // Handle the ReferenceError
}

let isLoggedIn = true;
let userRole = "admin"; // Define userRole
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage); // Should print "Welcome, Admin!"

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory); // Should print "Subscriber"