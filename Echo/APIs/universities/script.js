//University App

const inputCountry = document.getElementById("input-country");
const form = document.getElementById("input-form");
const cardContainer = document.getElementById("card-container");
// const  = document.getElementById();

let startingIndex = 0;
let endingIndex = 1000;
let dataArray = [];


async function fetchData(event) {
    try {
        console.log("function running");
        event.preventDefault();
        const countryName = inputCountry.value.toLowerCase();

        const response = await fetch(`http://universities.hipolabs.com/search?country=${countryName}`); 

        if(!response.ok){
            throw new Error("The resource is not found.");
        }

        const data = await response.json();
        // console.log(data);
        dataArray = data;
        displayData(dataArray.slice(startingIndex, endingIndex)); 

    } catch (error) {
        console.error(error);
    }
}

const displayData = (universities) => {
    universities.forEach( ({domains, name, web_pages}, index) => {
        cardContainer.innerHTML += `
            <div class="card">
            <h2 class="university">${name}</h2>
            <a class="web" target="_blank" href="${web_pages}">${web_pages}</a>
            <p>${domains}</p>
            </div>
        `;
    });

    container.appendChild(cardContainer);
    
};

form.addEventListener("submit", fetchData);
//A button with type="submit" inside a form automatically triggers the form’s submit event.
