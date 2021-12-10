const getBookingURL = "http://localhost:8080/show-book/get"
const getMovieURL =  "http://localhost:8080/movie/get";
const getShowingURL =  "http://localhost:8080/showing/get";
let inputWrapper = document.querySelector(".inputWrapper");

async function wait4Fetch(){
    await getAllBookings();
    await getAllShowings();
    printBookingList();
}

wait4Fetch();

function printBookingList() {
    for (let key of bookingMap.keys()) {
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
        date.innerHTML = bookingKey.date;

        childAppender.appendChild(movieName);
        childAppender.appendChild(movie);
        childAppender.appendChild(dateTime);
        childAppender.appendChild(date);
    }
}

