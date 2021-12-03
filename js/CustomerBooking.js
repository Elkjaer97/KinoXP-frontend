
async function wait4Fetch(){
    await getAll();
    await getAllShowings();
fillDropDown();
}
const saveBookURL = "http://localhost:8080/show-book/save";
const select = document.getElementById("MovieList");
const select2 = document.getElementById("showFillList");

function fillDropDown(){

    for (let i of movieMap.keys()){
        const option = document.createElement("option")
        option.innerHTML = movieMap.get(i).name;
        option.value = movieMap.get(i).movieId;
        select.appendChild(option);

    }
}






function fillShow(){
   select2.innerHTML = ""
    out(select.value)
    out(showingMap)
    for (let i of showingMap.keys()){
        out('litterally anything else')
        if (select.value == showingMap.get(i).movie.movieId ) {
out('jonas er wow lebbe')
            const option = document.createElement("option")
            option.innerHTML = showingMap.get(i).date;
            select2.appendChild(option);
        }
    }

}
select.addEventListener('change', fillShow)
/*
function fillDropDown(){

    for (let i of movieMap.keys(), let j of showingMap.keys()){
        const option = document.createElement("option")
        option.innerHTML = showingMap.get(i).showingId;
        // option.value =
        select.appendChild(option);
    }

}
*/
let postRequestCustomerBooking = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let bookingJson = {
    "customerEmail": "",
    "customerNumber": "",
    "showing" : {}

}

function createCustomerBooking() {
    let inpValue11 = document.getElementById("customerEmail");
    let inpValue12 = document.getElementById("customerNumber");
    let inpValue13 = document.getElementById("customerMovie");

    console.log(inpValue11);
    console.log(inpValue11.value);
    bookingJson.customerEmail = inpValue11.value;
    bookingJson.customerNumber = inpValue12.value;
    bookingJson.customerMovie = inpValue13.value;
    postRequestCustomerBooking.body = JSON.stringify(bookingJson)
    fetch(saveBookURL, postRequestCustomerBooking).catch((error) => console.log(error));
}
const piracyButton = document.getElementById("SubmitBooking");
 piracyButton.addEventListener("click",createCustomerBooking);
wait4Fetch();
