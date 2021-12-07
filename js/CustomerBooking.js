
async function wait4Fetch(){
    await getAll();
    await getAllShowings();
fillDropDown();
}
const saveBookURL = "http://localhost:8080/show-book/save";
const select = document.getElementById("MovieList");
const select2 = document.getElementById("showFillList");


// fillDropDown udfylder en drop down manu med alle de film der er blevet oprettet så man kan vælge en af dem til den gævne booking

function fillDropDown(){

    for (let i of movieMap.keys()){
        const option = document.createElement("option")
        option.innerHTML = movieMap.get(i).name;
        option.value = movieMap.get(i).movieId;
        select.appendChild(option);

    }
}





// fillShow udfylder en drop down manu med alle de gævne showings så man kan koble showing som er foreign key på bookings på og oprette den i databasen
function fillShow(){
   select2.innerHTML = ""
    console.log(select.value)
    console.log(showingMap)
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

// Opretter Booking i databasen ved hjælp af getMapping i backend
function createCustomerBooking() {
    let inpValue11 = document.getElementById("customerEmail");
    let inpValue12 = document.getElementById("customerNumber");
    let inpValue13 = document.getElementById("customerMovie");



    bookingJson.customerEmail = inpValue11.value;
    bookingJson.customerNumber = inpValue12.value;
    console.log(select2.value)
    bookingJson.showing = {showingId:select2.value}
    postRequestCustomerBooking.body = JSON.stringify(bookingJson)
    fetch(saveBookURL, postRequestCustomerBooking).catch((error) => console.log(error));
}
const piracyButton = document.getElementById("SubmitBooking");
 piracyButton.addEventListener("click",createCustomerBooking);
wait4Fetch();
