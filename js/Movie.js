
let inputWrapper = document.querySelector(".inputWrapper");


async function wait4Fetch(){
    await getAll();
    printMovielist();
}

wait4Fetch();

function printMovielist(){

    for(let key of movieMap.keys()) {
        let movieKey = movieMap.get(key)

        let childAppender = document.createElement("div");
        childAppender.setAttribute("class","appending");
        inputWrapper.appendChild(childAppender);


        const name = document.createElement("h1");
        const age = document.createElement("h1");
        const actors = document.createElement("h1");
        const description = document.createElement("h1");
        const genre = document.createElement("h1");
        const playtime = document.createElement("h1");

        name.innerHTML = "Movie name:";
        age.innerHTML = "Age requirement:";
        actors.innerHTML = "Actors:";
        description.innerHTML = "Description: ";
        genre.innerHTML = "Genre:";
        playtime.innerHTML ="Play time:";

        const movieName = document.createElement('p');
        const movieAge = document.createElement('p');
        const movieActors = document.createElement('p');
        const movieDecriptoin = document.createElement('p');
        const movieGenre = document.createElement('p');
        const moviePlaytime = document.createElement('p');


        movieName.innerHTML = movieKey.name;
        movieAge.innerHTML = movieKey.ageReq;
        movieActors.innerHTML = movieKey.actors;
        movieDecriptoin.innerHTML = movieKey.description;
        movieGenre.innerHTML = movieKey.genre;
        moviePlaytime.innerHTML = movieKey.playTime;

        childAppender.appendChild(name)
        childAppender.appendChild(movieName)
        childAppender.appendChild(age)
        childAppender.appendChild(movieAge)
        childAppender.appendChild(actors)
        childAppender.appendChild(movieActors)
        childAppender.appendChild(description)
        childAppender.appendChild(movieDecriptoin)
        childAppender.appendChild(genre)
        childAppender.appendChild(movieGenre)
        childAppender.appendChild(playtime)
        childAppender.appendChild(moviePlaytime)

    }
}