
let inputWrapper = document.querySelector(".inputWrapper");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalSeeInfoButten = document.querySelectorAll('.close-modal');
const seeInfoButton = document.querySelector('.show-modal');



async function wait4Fetch(){
    await getAll();
    printMovielist();
}

wait4Fetch();

function printMovielist() {

    for (let key of movieMap.keys()) {
        let movieKey = movieMap.get(key)
        out(movieKey)

        let childAppender = document.createElement("div");
        childAppender.setAttribute("class", "appending");
        inputWrapper.appendChild(childAppender);


        const name = document.createElement("h1");

        name.innerHTML = "Movie name:";


        const movieName = document.createElement('p');
        const openModalSeeInfoButton = document.createElement('input')


        movieName.innerHTML = movieKey.name;


        openModalSeeInfoButton.type = "button";
        openModalSeeInfoButton.addEventListener('click', function (){
            console.log('Button clicked');
            getSpecificMovieInfo(movieKey.movieId);
            //modal.classList.remove('hidden')
            //overlay.classList.remove('hidden')

        });
        openModalSeeInfoButton.setAttribute('value',"See Info")
        openModalSeeInfoButton.onclick = function() {
            seeInfo(movieKey.movieId)
            location.href = "../movie/show-movie.html"
        }


        childAppender.appendChild(name)
        childAppender.appendChild(movieName)
        childAppender.appendChild(openModalSeeInfoButton)
    }
}





function getSpecificMovieInfo(id){

    let movieKey = movieMap.get(id)

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
    const movieDescription = document.createElement('p');
    const movieGenre = document.createElement('p');
    const moviePlaytime = document.createElement('p');
    const deleteButton = document.createElement('input')
    const closeModalSeeInfoButton = document.createElement('input')


    movieName.innerHTML = movieKey.name;
    movieAge.innerHTML = movieKey.ageReq;
    movieActors.innerHTML = movieKey.actors;
    movieDescription.innerHTML = movieKey.description;
    movieGenre.innerHTML = movieKey.genre;
    moviePlaytime.innerHTML = movieKey.playTime;

    deleteButton.type = "button";
    deleteButton.setAttribute('value',"Delete Movie")
    deleteButton.onclick = function() {

        out(movieKey.movieId)
        deleteMovie(movieKey.movieId)
        location.href = "../movie/show-movie.html"
    }

    const editButton = document.createElement('input')
    editButton.type = "button"
    editButton.setAttribute('value', "Edit Movie Information");

    editButton.onclick = function () {
        const editName = document.createElement('input');
        editName.setAttribute('value', movieKey.name);
        const editDescription = document.createElement('input');
        editDescription.setAttribute('value', movieKey.description);
        const editPlayTime = document.createElement('input');
        editPlayTime.setAttribute('value', movieKey.playTime);
        const editActors = document.createElement('input');
        editActors.setAttribute('value', movieKey.ageReq);
        const editAgeReq = document.createElement('input');
        editAgeReq.setAttribute('value', movieKey.ageReq);
        const editGenre = document.createElement('input');
        editGenre.setAttribute('value', movieKey.genre);

        const submitButton = document.createElement('input');
        submitButton.type = 'button';
        submitButton.setAttribute('value', "Submit Changes");

        movieName.appendChild(editName)
        movieDescription.appendChild(editDescription)
        moviePlaytime.appendChild(editPlayTime)
        movieActors.appendChild(editActors)
        movieAge.appendChild(editAgeReq)
        movieGenre.appendChild(editGenre)
        movieGenre.appendChild(submitButton)

        submitButton.onclick = function () {

            updateMovie(movieKey.movieId, editName.value, editDescription.value, editPlayTime.value, editActors.value, editAgeReq.value, editGenre.value)
            location.href = "../movie/show-movie.html"
        }

    }

    closeModalSeeInfoButton.type = "button";
    closeModalSeeInfoButton.addEventListener('click', function (){
        console.log('Button clicked');
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')

    });
    closeModalSeeInfoButton.setAttribute('value',"Close Info")
    closeModalSeeInfoButton.onclick = function() {
        location.href = "../movie/show-movie.html"
    }


    childAppender.appendChild(name)
    childAppender.appendChild(movieName)
    childAppender.appendChild(age)
    childAppender.appendChild(movieAge)
    childAppender.appendChild(actors)
    childAppender.appendChild(movieActors)
    childAppender.appendChild(description)
    childAppender.appendChild(movieDescription)
    childAppender.appendChild(genre)
    childAppender.appendChild(movieGenre)
    childAppender.appendChild(playtime)
    childAppender.appendChild(moviePlaytime)
    childAppender.appendChild(deleteButton)
    childAppender.appendChild(editButton)
    childAppender.appendChild(closeModalSeeInfoButton)

}

async function updateMovie(id, newName, newDescription, newPlayTime, newActors, newAgeReq, newGenre){

    const URL = "http://localhost:8080/movie/update/"+id;

    const updatedMovieJson = {
        "movieId": "",
        "name": newName,
        "description": newDescription,
        "playTime": newPlayTime,
        "actors": newActors,
        "ageReq": newAgeReq,
        "genre": newGenre
    }

    const updateMapObj = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMovieJson)
    }
    await fetch(URL, updateMapObj)
}


async function deleteMovie(id){
    const URL = "http://localhost:8080/movie/delete/"+id;

    const deleteMapObj = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: ""
    }
    await fetch(URL, deleteMapObj);
}
