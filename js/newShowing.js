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
    "date" : "",
    "theater" : "",
    "movie" : ""
}

function createShowing(){
    const time = document.getElementById("time");
    const theater = document.getElementById("theater");

    showingJson.date = time.value;
    showingJson.theater = theater.value;
    showingJson.movie = 2;

    postRequestShowing.body = JSON.stringify(showingJson)
    fetch(saveShowingUrl, postRequestShowing).catch((error) => console.log(error));
}

const movieList = document.getElementById("movieList")
function fillDropDown(){
    for(let i of movieMap.keys()){
        const option = document.createElement("option");
        option.innerHTML = movieMap.get(i).name;
        movieList.appendChild(option);
    }

}
const showingBtn = document.getElementById("submitShowing");
showingBtn.addEventListener("click",createShowing);