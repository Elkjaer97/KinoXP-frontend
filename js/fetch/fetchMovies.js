let inputWrapper = document.querySelector(".inputWrapper");

const getMovieURL =  "http://localhost:8080/movie/get";


async function getMovies(){
    return fetch(getMovieURL).then(response => response.json());
}

async function callGetMovies(){
    const promise = getMovies();
    await promise.then(movieMapper);
}

let movieMap = new Map();

function movieMapper(data){
    data.forEach(movie =>{
        movieMap.set(movie.movieId, movie)
    })
}

async function getAll(){
    await callGetMovies();
}


/*const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelectorAll('.close-modal'); */