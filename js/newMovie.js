'use strict';
const out = function (...str) {console.log(str)};

//Movie URL save
const saveMovieURL = "http://localhost:8080/movie/save";
let postRequestMovie = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let movieJson = {
    "movieId": "",
    "name": "",
    "description": "",
    "playTime": "",
    "actors": "",
    "ageReq": "",
    "genre": ""
}

function createMovie(){
    let inpValue1 = document.getElementById('name');
    let inpValue2 = document.getElementById('description');
    let inpValue3 = document.getElementById('playtime');
    let inpValue4 = document.getElementById('actors');
    let inpValue5 = document.getElementById('ageReq');
    let inpValue6 = document.getElementById('genre');

    movieJson.name = inpValue1.value;
    movieJson.description = inpValue2.value;
    movieJson.playTime = inpValue3.value;
    movieJson.actors = inpValue4.value;
    movieJson.ageReq = inpValue5.value;
    movieJson.genre = inpValue6.value;

    postRequestMovie.body = JSON.stringify(movieJson)
    fetch(saveMovieURL, postRequestMovie).catch((error) => console.log(error));
}

document.getElementById('movieButton').addEventListener('click', createMovie);



