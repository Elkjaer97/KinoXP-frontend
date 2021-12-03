const out = (str) => console.log(str);

const  getBookingURL = "http://localhost:8080/show-book/get"

async function getBookings(){
    return fetch(getBookingURL).then(response => response.json());
}

async function callGetBookings(){
    const promise = getBookings();
    await promise.then(createBookingMap);
}

let bookingMap = new Map();

function createBookingMap(data){
    data.forEach(booking =>{
        bookingMap.set(booking.bookId, booking)
    })
}

async function getAllBookings(){
    await callGetBookings();
}