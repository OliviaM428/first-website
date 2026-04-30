//let genre ="western";
const genrePick = document.getElementById("genre-select");

let genre = genrePick.value;

genrePick.addEventListener("change", console.log(genre));

const url = "https://api.sampleapis.com/movies/" + genre;


async function getMovies(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        console.log(genre);
        const result = await response.json();
        //console.log(result);
        //Process the movie data
        displayMovies(result);


    } catch (error) {
        console.error(error.message);
    }
}

function displayMovies(data){
    const movieContainer = document.querySelector("#container");
    //Display movie title and poster
    for (const movie of data){
        const movieBox = `<div class ="movie-box">
        <h2>${movie.title}</h2>
        <img src="${movie.posterURL}" alt="${movie.title}"></img>
        </div>`;     
        
        //append this image to the rest of the html in #container      
        movieContainer.innerHTML += movieBox;
    }
}

getMovies(url);

