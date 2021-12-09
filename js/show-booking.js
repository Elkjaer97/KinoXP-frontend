

async function wait4Fetch(){
    await getAll();
    await getAllShowings()
    await getAllBookings();
    await printBookingList();
}

wait4Fetch();


function printBookingList(){
    for (let key of bookingMap.keys()){
        let bookingKey = bookingMap.get(key)

        let childAppender = document.createElement('div');
        childAppender.setAttribute("class", "appending");
        inputWrapper.appendChild(childAppender);


        //Overskrift
        const bookingNummer = document.createElement("h1");
        bookingNummer.innerHTML = "Booking nummer: ";

        //Info omkring filmnavnet
        const bookingId = document.createElement("p");
        bookingId.innerHTML = bookingKey.bookId;

        const email = document.createElement("h1");
        email.innerHTML = "Email: ";

        const customerEmail = document.createElement("p");
        customerEmail.innerHTML =  bookingKey.customerEmail;



        childAppender.appendChild(bookingNummer);
        childAppender.appendChild(bookingId);
        childAppender.appendChild(email);
        childAppender.appendChild(customerEmail);


    }
}



function printMovie(id){

        let movieKey = movieMap.getKey(id)

        let childAppender = document.createElement('div');
        childAppender.setAttribute("class", "appending");
        inputWrapper.appendChild(childAppender);



        const movie = document.createElement("h1");
        movie.innerHTML = "Movie: "

        const movieName = document.createElement("p");
        movieName.innerHTML = movieKey.movieId;

        childAppender.appendChild(movie);
        childAppender.appendChild(movieName);
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