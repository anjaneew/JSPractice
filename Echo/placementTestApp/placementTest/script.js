//Placement Test App

const testBtn = document.getElementById("test-btn");
const results = document.getElementById("results");
/* const  = document.getElementById(""); */

const createLimiter = () =>{
    let attempts = 0;

    return function () {
        if(attempts >= 3){
            results.innerHTML = `<p>Too many attempts. Try later.</p>`;
            testBtn.disabled = true;
            return false;
        }
        else {
            attempts++;
            console.log(attempts + "attempts recorded");
            return true;
        }
    }
}

//calling factory function
const text = createLimiter();

testBtn.addEventListener("click", text);