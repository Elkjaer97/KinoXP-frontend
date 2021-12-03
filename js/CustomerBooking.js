async function wait4Fetch(){
    await getAll();
fillDropDown();
}
const saveBookURL = "http://localhost:8080/show-book/save";
const select = document.getElementById("MovieList");
 function fillDropDown(){

    for (let i of movieMap.keys()){
        const option = document.createElement("option")
        option.innerHTML = movieMap.get(i).name;
        select.appendChild(option);
    }

}

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
    "customerMovie": ""

}

function createCustomerBooking() {
    let inpValue1 = document.getElementById("customerEmail");
    let inpValue2 = document.getElementById("customerNumber");
    let inpValue3 = document.getElementById("customerMovie");

    console.log(inpValue1);
    console.log(inpValue1.value);
    bookingJson.customerEmail = inpValue1.value;
    bookingJson.customerNumber = inpValue2.value;
    bookingJson.customerMovie = inpValue3.value;
    postRequestCustomerBooking.body = JSON.stringify(bookingJson)
    fetch(saveBookURL, postRequestCustomerBooking).catch((error) => console.log(error));
}
const piracyButton = document.getElementById("SubmitBooking");
 piracyButton.addEventListener("click",createCustomerBooking);
wait4Fetch();
