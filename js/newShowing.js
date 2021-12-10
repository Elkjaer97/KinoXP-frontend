async function wait4fetch(){
    await getAll();
    fillDropDown();
}
wait4fetch();


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
    "movie" : {}
}
function createShowing(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    showingJson.date = dateInp.value;
    console.log("Start: "+dateInp.value)
    dateInp.stepUp(movieMap.get(parseInt(movieList.value)).playTime)
    console.log("End: "+dateInp.value)
    showingJson.endDate = dateInp.value;
    showingJson.theater = theater.value;
    showingJson.movie = {movieId: movieList.value}; // hvad betyder det TB //


    postRequestShowing.body = JSON.stringify(showingJson)
    fetch(saveShowingUrl, postRequestShowing).catch((error) => console.log(error));
}
let showingStartDate;
let showingEndDate;

function preventDoubleShowing() {
    console.log("CreateShow started")
    let selectedDate = new Date(dateInp.value);
    let selectedEnd = new Date(selectedDate.getTime()+movieMap.get(parseInt(movieList.value)).playTime*60000);
    console.log(selectedEnd);
    let isBooked = 0;

//If no other shows exists - Create show and skip other "if-statements"
    if (showingMap.size===0) {
        console.log("First show created")
        createShowing();
        return;
    }

    for (let i of showingMap.keys()) {
        showingStartDate = new Date(showingMap.get(i).date);
        showingEndDate = new Date(showingMap.get(i).endDate);

        //If new show overlaps an existing show OR If new show's end time overlaps with an existing show
        if (showingStartDate < selectedDate && selectedDate < showingEndDate || showingStartDate < selectedEnd && selectedEnd < showingEndDate) {
            console.log("NO")
            console.log(showingStartDate.getTime() + " is not > than :" + selectedDate.getTime() + " or " + showingEndDate.getTime() + " is not > than :" + selectedDate.getTime())
            console.log("ShowStart>SelectStart :" + showingStartDate.getTime() > selectedDate.getTime() + "\nShowEnd>SelectStart" + showingEndDate.getTime() > selectedDate.getTime())
            console.log("ShowEnd>SelectStart" + showingEndDate.getTime() > selectedDate.getTime())
            return;
        }
        //If new show doesnt overlap another show
        else {
            console.log("YES")
            isBooked++;
        }
    }
    if (isBooked===showingMap.size){
        createShowing();
    }

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
showingBtn.addEventListener("click",preventDoubleShowing);*/

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnOpenModal = document.querySelector('.show-modal');

btnOpenModal.addEventListener('click', function (){
    console.log('Button Clicked');
    preventDoubleShowing();
});

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

