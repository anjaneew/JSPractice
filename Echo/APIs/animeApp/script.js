//Anime Details App
// @ts-check
const form =  document.getElementById("input-form");
const input =  document.getElementById("input");
const cardContainer =  document.getElementById("card-container");

// const  =  document.getElementById("");
// const  =  document.getElementById("");

let animeName; 
let dataArray;

const loadEditorsChoice = () => {
        console.log("Load Editors choice");
        // https://api.jikan.moe/v4/anime?q=all
};

async function fetchData(animeName){
    try {
        console.log("fetchdata running");
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);

        console.log(response);



        if(!response.ok){
            throw new Error("data not found");
        }
        else{
            const data = await response.json();
            console.log("data found\n" + data);
            dataArray = data;

            if(dataArray > 1){
                displayData(dataArray.slice(0,20));
            }
            displayData([dataArray.data[0]]);

            //it was loading only one object thus the slice will not work
        }

        
    } catch (error) {
        console.log("fetchData error");
        console.error(error);
    }
}


const searchAnime = (event) => {
    event.preventDefault();
    const animeName = input.value.toLowerCase().trim();
    
    if(animeName){
            console.log("anime name found");
            fetchData(animeName);
    } 
    else{
        console.log("Enter a valid name");
    }
};

const displayData = (animeArray) => {
    animeArray.forEach(({title, rating, status, synopsis, year, images: {jpg: {image_url}}, trailer, url }, index)=> {
        let card = document.createElement("div");
        card.innerHTML = `
                <div class="card" id="anime${index}">
            <div class="image-container">
                <h2 class="anime-title"><span class="bold">${title}</span></h2>
                <img class="card-image" src="${image_url}">
            </div>
            
            <div class="details-container">
                <h3 class="year"><span class="bold">Year: </span>${year}</h3>
                <p class="ratings"><span class="bold">Ratings: </span>${rating}</p>
                <p class="status"><span class="bold">Status: </span>${status}</p>
                
                <a class="trailer" href="${trailer}"><span class="bold">Trailer</span></a><br><br>
                <a class="info" href="${url}"><span class="bold">More Info</span></a>
                <p class="synopsis"><span class="bold">Synopsis: </span>${synopsis}</p>
            </div> 
        </div> 
        `;

        cardContainer.appendChild(card);
    });

    
};


form.addEventListener("submit", searchAnime);

//<p class="genre"><span class="bold">Genre: </span>${genre}</p>



