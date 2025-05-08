//Cookies - small text file stored in PC
//          remembers information about user
//          saved in name=value pairs (looks like a string but is an object)

//cookies enabled?
console.log(navigator.cookieEnabled);//true

//add cookie
//                 name=value pair; expiration date; path(here default path)
document.cookie = "firstName=Robin; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";
document.cookie = "lastName=Hood; expires=Mon, 2 January 2030 12:00:00 UTC; path=/";
//Expire a cookie - date to past date
document.cookie = "lastName=Marion; expires=Mon, 2 January 2010 12:00:00 UTC; path=/";

//see the cookie
console.log(document.cookie);

setCookie("firstName", "William", 365);
setCookie("lastName", "Scarlott", 365);

console.log(document.cookie);
console.log(getCookie("firstName"));
console.log(getCookie("lastName"));

deleteCookie("firstName");

console.log(document.cookie);
getCookie("firstName");

function setCookie(name, value, daysToLive){
    const date = new Date();
//                                            adding in milliseconds
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//                                     converting to UTC
    let expires = "expires=" + date.toUTCString();
//   assign cookie
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

//delete cookies
function deleteCookie(name){
    setCookie(name, null, null);
}

//get value of a cookie by name
function getCookie(name){
    //decode cookie
    const cDecoded = decodeURIComponent(document.cookie);
    //split and store in an array
    const cArray = cDecoded.split("; ");
    //check if match
    let result = null;
    cArray.forEach(element =>{
        if(element.indexOf(name) === 0){
            result = element.substring(name.length + 1);
        }
    });

    // console.log(cDecoded);
    // console.log(cArray);
    return result;
}
























