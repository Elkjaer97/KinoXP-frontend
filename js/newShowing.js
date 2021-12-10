//AWAIT get all showings and movies
async function wait4fetch(){
    await getAll();
    fillDropDown();
}
wait4fetch();

//Data related to creating a new showing
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
    "endDate" : "",
    "theater" : "",
    "movie" : {} //An entire movie object
}
//Method for creating a new showing
function createShowing(){
    modalText.innerHTML = "Show Added!"; //Set modal window text

    //Get data from input-field and insert them into showingJson object
    showingJson.date = dateInp.value;
    dateInp.stepUp(movieMap.get(parseInt(movieList.value)).playTime) //Adds the selected movie's playtime(from dropdown-menu), so that the end time can be calculated
    showingJson.endDate = dateInp.value;
    showingJson.theater = theater.value;
    showingJson.movie = {movieId: movieList.value}; //Inserts a movie object via its ID (The ID comes from the dropdown-menu) - SEE method FillDropDown()

    postRequestShowing.body = JSON.stringify(showingJson)
    fetch(saveShowingUrl, postRequestShowing).catch((error) => console.log(error));//Send Data to controller
}

let showingStartDate;
let showingEndDate;

//Method preventing 2 shows to be created on the same date
function preventDoubleShowing() {
    //Get your selectedDate + your selectedDate's end time
    let selectedDate = new Date(dateInp.value);
    let selectedEnd = new Date(selectedDate.getTime()+movieMap.get(parseInt(movieList.value)).playTime*60000);
    let isBooked = 0;

//If no other shows exists - Create show and skip other "if-statements"
    if (showingMap.size===0) {
        console.log("First show created")
        createShowing();
        return;
    }
//Loop through showingMap and check all showing start times and end times
    for (let i of showingMap.keys()) {
        showingStartDate = new Date(showingMap.get(i).date);
        showingEndDate = new Date(showingMap.get(i).endDate);

        //If new show overlaps an existing show OR If new show's end time overlaps with an existing show
        if (showingStartDate < selectedDate && selectedDate < showingEndDate || showingStartDate < selectedEnd && selectedEnd < showingEndDate) {
            console.log("Overbooking detected")
            return;
        }
        //If new show doesnt overlap another show
        else {
            console.log("No overbooking detected")
            isBooked++;
        }
    }
    //If the newly created show, doesn't overlap ANY other show - Then create the show
    if (isBooked===showingMap.size){
        createShowing();
    }
}

//Function filling the dropdown-menu with movie names from DB
const movieList = document.getElementById("movieList")
function fillDropDown(){
    for(let i of movieMap.keys()){
        const option = document.createElement("option");
        option.innerHTML = movieMap.get(i).name;
        //Save the selected movies value as its ID
        option.value = movieMap.get(i).movieId;
        movieList.appendChild(option);
    }

}
//Selectors for modal "pop-up" window
const modal = document.querySelector(".modal");
const modalText = document.getElementById("modal-text");
modalText.innerHTML = "ERROR!"; //As default the modal window will display "ERROR!"
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnOpenModal = document.querySelector('.show-modal');

//EventListeners for modal "pop-up" window's buttons
btnOpenModal.addEventListener('click', function (){
    console.log('Button Clicked');
    preventDoubleShowing();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

