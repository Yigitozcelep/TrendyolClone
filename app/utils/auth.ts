
const path = "userData";

const isUserLoggedIn = (): Boolean => { return localStorage.getItem(path) ? true : false; };
const loggedInUser   = () => { localStorage.setItem(path, "true"); };
const loggedOutUser  = () => { localStorage.removeItem(path); };


export {isUserLoggedIn, loggedInUser, loggedOutUser}