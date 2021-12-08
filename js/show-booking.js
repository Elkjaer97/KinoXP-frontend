

async function wait4Fetch(){
    await getAllBookings();
    printBookingList();
}

wait4Fetch();

function printBookingList(){
    for (let key of bookingMap.keys()){
        let bookingKey = bookingMap.get(key)

        let childAppender = document.createElement('div');
        childAppender.setAttribute("class", "appending");
        inputWrapper.appendChild(childAppender);


        //Overskrift
        const movieName = document.createElement("h1");
        movieName.innerHTML = "Movie Name: ";

        //Info omkring filmnavnet
        const movie = document.createElement("p");
        movie.innerHTML = bookingKey.name;

        const dateTime = document.createElement("h1");
        dateTime.innerHTML = "Date and time: ";

        const date = document.createElement("p");
        date.innerHTML =  bookingKey.date;

        childAppender.appendChild(movieName);
        childAppender.appendChild(movie);
        childAppender.appendChild(dateTime);
        childAppender.appendChild(date);

    }
}













async function deleteBooking(id){
    const  URL = "http://locahost:8080/show-book/delete"+id;

    const deleteMapObj = {
        method: "DELETE",
        headers: {
            "consten-type": "application/json"
        },
        body:""
    }
    await fetch(URL, deleteMapObj)
}