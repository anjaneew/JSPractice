//Hide & Show HTML Elements

//---------------------------Example 1 Visibility----------------------
//Keeps the space surrounding it

const myBtn1 = document.getElementById("myBtn1");
const myImg1 = document.getElementById("myImg1");

myBtn1.addEventListener("click", event => {

    if(myImg1.style.visibility === "hidden"){
        myImg1.style.visibility = "visible";
        myBtn1.textContent = "Hide";
    }
    else{
        myImg1.style.visibility = "hidden";
        myBtn1.textContent = "Show";
    }
});

//---------------------------Example 2 Display----------------------

const myBtn2 = document.getElementById("myBtn2");
const myImg2 = document.getElementById("myImg2");

myBtn2.addEventListener("click", event =>{

    if(myImg2.style.display === "none"){
        myImg2.style.display = "block";
        myBtn2.textContent = "hide";
    }
    else{
        myImg2.style.display = "none";
        myBtn2.textContent = "show";
    }
});




