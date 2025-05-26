const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

let allSongs = [

   {
        id:0, 
        title:"Scratching The Surface", 
        artist:"Quincy Larson", 
        duration:"4:25", 
        src:"https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3"
   }, 
   {
        id:1, 
        title:"Can't Stay Down", 
        artist:"Quincy Larson", 
        duration:"4:15", 
        src:"https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
   },
   {
        id:2, 
        title:"Still Learning", 
        artist:"Quincy Larson", 
        duration:"3:51", 
        src:"https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3"
   },   
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  }];

/* Web Audio API 
  create a new HTML5 audio element. 
    const audio = new Audio();

  Properties:  
    audio.src  audio.currentTime  audio.duration  audio.paused  audio.volume  audio.loop  audio.muted  audio.playbackRate

  Methods: 
    audio.play() audio.pause() audio.load() audio.canPlayType(type)

  Events: 
    onplay, onpause, onended, ontimeupdate, onloadeddata, onerror
*/

const audio = new Audio();

let userData = {
    songs: [...allSongs], //using spread operators to copy array to shuffle without mutating original
    currentSong: null , 
    songCurrentTime : 0
};

/* find()  =  retrieves the first element within an array that fulfills the conditions specified. Ex: 
    const numbers = [10, 20, 30, 40, 50];
    const foundNumber = numbers.find((number) => number > 25);
    console.log(foundNumber); // Output: 30
 */

const playSong = id => {
  const song = userData?.songs.find(song => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
  if(!userData?.currentSong || userData?.currentSong.id !== song.id){
    audio.currentTime = 0;
   // check if no current song is playing or 
    // if the current song is different song.
    } else {
      audio.currentTime = userData?.songCurrentTime;
    }
    userData.currentSong = song;
    playButton.classList.add("playing");
    audio.play(); 
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime; 
  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  if(userData?.currentSong === null){
    playSong(userData?.songs[0].id);
  } else{
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id);
  }
};

const playPreviousSong = () => {
  if(userData?.currentSong === null){
    return
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];
    playSong(previousSong.id);
  }
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);
  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });
};

/* arrow functions () => {} 

    * An arrow function is an anonymous function expression and a shorter way to write functions.Arrow functions are always anonymous. 

    * 'identifier' = By assigning the arrow function definition to a variable, you bind it to an identifier.   
        const exampleFunction = () => {
        // code goes here
        }
        const printGreeting = () => {
            console.log("Hello there!");
        }
        calling it : 
        printGreeting();

    * arrow function with one parameter:
          const greet = (name) => {
            console.log(`Hello, ${name}!`);
            };  

    * If the function only has one parameter, you can omit the parentheses:
        const greet = name => {
            console.log(`Hello, ${name}!`);
        };   
        const printMessage = org => {
            console.log(`${org} is awesome!`);
        }

        printMessage("freeCodeCamp");

    * arrow functions can return values:       
        const addTwoNumbers = (num1, num2) => {
            return num1 + num2;
        }   

    * 'implicit return' =  If the arrow function is returning a simple expression, you can omit the return keyword and the curly braces {}.
          const multiplyTwoNumbers = (num1, num2) => num1 * num2
          const addTwoNumbers = (num1, num2) => num1 + num2   

    * If your arrow function has multiple lines of code in the function body, then you need to use the return keyword and the curly braces {}.    
          const getTax = (price) => {
            const taxRate = 0.08;
            const tax = price * taxRate;
            return tax;
          };     
*/

/* map() 
    used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array. uses callback functions 

    const numbers = [1, 2, 3];
    const doubledNumbers = numbers.map((number) => number * 2); 
    // doubledNumbers will be [2, 4, 6]
*/

/*aria-label - Accessibility Labels

it is an attribute in a button element for one.

critical for blind users, user with low vision, users with mobility disabilities and users with memory loss. Missing labels will make a form inaccessible for many users.

Each label must be programmatically associated with the form control or group of controls. Labels are not necessarily the <label> element.
 */

/*  .map(song => { ... }) loops through each item in array, builds HTML for each song.     ex:
            const nums = [1, 2, 3];
            const doubled = nums.map(n => n * 2);
            console.log(doubled); // [2, 4, 6] */

const renderSongs = array => {
    const songsHTML = array.map(song => {
        return `
            <li id="song-${song.id}" class="playlist-song">
            <button class="playlist-song-info" onclick="playSong(${song.id})">
            <span class="playlist-song-title">${song.title}</span>
            <span class="playlist-song-artist">${song.artist}</span>
            <span class="playlist-song-duration">${song.duration}</span>
            </button>
            
            <button class="playlist-song-delete" aria-label="Delete ${song.title}"> 
            
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
            
            </button>
            
            </li>`
        }).join("");
        //svg - Displays a circular “X” delete icon (white X on dark circle).

    playlistSongs.innerHTML = songsHTML;
    //Code after return is inside .map()—return ends each iteration, not the whole renderSongs() function.
};

const getCurrentSongIndex = () => {
  return userData?.songs.indexOf(userData?.currentSong);
};

playButton.addEventListener("click", () => {
  if(userData?.currentSong === null){
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);

/**(?.) Optional chaining - check if it is really there without throwing an error
 * 
 Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. 
        const user = {
        name: "Quincy",
        address: {
            city: "San Francisco",
            state: "CA",
            country: "USA",
            },
        };

    // Accessing nested properties without optional chaining
    const state = user.address.state; // CA

    // Accessing a non-existent nested property with optional chaining
    const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error

    example: 
      if(userData?.currentSong === null){
        playSong(userData?.songs[0].id);
        }

        userData?.currentSong -  checks if userData exists before accessing currentSong; 
        
        userData.currentSong - throws error if userData is null or undefined.

 */


const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if(a.title < b.title){
            return -1;
        }

        if(a.title > b.title){
             return 1;
        }

        return 0;
    });

    return userData?.songs;
};

renderSongs(sortSongs());//This will render the songs in the playlist. 
