async function wait4fetch(){
    await getAll();
    fillDropDown();
}
wait4fetch();

const time = document.getElementById("time");
const theater = document.getElementById("theater");
const saveShowingUrl = "http://localhost:8080/showing/save";

let postRequestShowing = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let showingJson = {
    "showingId" : "",
    "date" : "",
    "theater" : "",
    "movie" : {}
}

function preventDoubleShow(){


    }



function createShowing() {



   /* let selectedDate = new Date(time.value);
    for (let i of showingMap.keys()) {
        let showingDate = new Date(showingMap.get(i).date);

        if (showingDate.getHours() !== selectedDate.getHours()) {*/
            console.log("YES")
            showingJson.date = time.value;
            showingJson.theater = theater.value;
            showingJson.movie = {movieId: movieList.value}; // hvad betyder det TB //


            postRequestShowing.body = JSON.stringify(showingJson)
            fetch(saveShowingUrl, postRequestShowing).catch((error) => console.log(error));

        /*}
        else {
            console.log("NO")
        }
    }*/
}

const movieList = document.getElementById("movieList")

function fillDropDown(){
    for(let i of movieMap.keys()){
        const option = document.createElement("option");
        option.innerHTML = movieMap.get(i).name;
        option.value = movieMap.get(i).movieId;
        movieList.appendChild(option);

    }

}
/*const showingBtn = document.getElementById("submitShowing");
showingBtn.addEventListener("click",createShowing);*/

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnOpenModal = document.querySelector('.show-modal');

btnOpenModal.addEventListener('click', function (){
    console.log('Button Clicked');
    createShowing();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

