
const movieList = document.getElementById("movie-list");

async function wait4Fetch(){
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
        const bookingIdH1 = document.createElement("h1");
        bookingIdH1.innerHTML = "Booking ID: ";

        //Info omkring filmnavnet
        const bookingId = document.createElement("p");
        bookingId.innerHTML = bookingKey.bookId;
        console.log(bookingId);

        const emailH1 = document.createElement("h1");
        emailH1.innerHTML = "Email: ";

        const email = document.createElement("p");
        email.innerHTML = bookingKey.customerEmail;

        const phoneNumberH1 = document.createElement("h1");
        phoneNumberH1.innerHTML = "Phone number: ";

        const phoneNumber = document.createElement('p');
        phoneNumber.innerHTML = bookingKey.customerNumber;

        const openModalSeeInfoButton = document.createElement('input')
        openModalSeeInfoButton.type = "button";
        openModalSeeInfoButton.setAttribute('class', 'show-modal')
        openModalSeeInfoButton.setAttribute('value',"See Info")

        openModalSeeInfoButton.addEventListener('click', function (){
            console.log('Button clicked');

            getSpecificBookingInfo(bookingKey.bookId);
            let overlay = document.createElement('div');
            overlay.setAttribute('class', "overlay hidden");
            overlay.classList.remove('hidden');

            inputWrapper.appendChild(overlay);


        })


        /*const editButton = document.createElement('input');
        editButton.type = "button";
        editButton.setAttribute('value', 'Edit Booking');
        editButton.setAttribute('class', 'button');
        childAppender.appendChild(editButton);
        */



        childAppender.appendChild(bookingIdH1);
        childAppender.appendChild(bookingId);
        childAppender.appendChild(emailH1);
        childAppender.appendChild(email);
        childAppender.appendChild(phoneNumberH1);
        childAppender.appendChild(phoneNumber);
        childAppender.appendChild(openModalSeeInfoButton);



        /*editButton.onclick = function () {

            //const editBookingId = document.createElement('input');
            //editBookingId.setAttribute('value', bookingKey.bookId);

            const editEmail = document.createElement('input');
            editEmail.setAttribute('value', bookingKey.customerEmail);

            const editPhoneNumber = document.createElement('input');
            editPhoneNumber.setAttribute('value', bookingKey.customerNumber);

            const submitButton = document.createElement('input');
            submitButton.type = 'button';
            submitButton.setAttribute('value', "Submit Change");
            submitButton.setAttribute('class', 'button');

            const deleteButton = document.createElement('input');
            deleteButton.setAttribute("class", "button");
            deleteButton.type = "button";
            deleteButton.setAttribute("value", "Delete Booking");

            //bookingId.appendChild(editBookingId);
            email.appendChild(editEmail);
            phoneNumber.appendChild(editPhoneNumber);

            childAppender.appendChild(submitButton);
            childAppender.appendChild(deleteButton);

            submitButton.onclick = function () {
                updateBooking(bookingKey.bookId, editBookingId.value, editEmail.value, editPhoneNumber.value);
                location.href = "../html/booking/show-booking.html"
            }

            deleteButton.onclick = function () {
                deleteBooking(bookingKey.bookId);
                location.href = "../html/booking/show-booking.html"
            }


        }*/
    }
}

function getSpecificBookingInfo(id){

    let bookingKey = bookingMap.get(id)
    let childAppender = document.createElement("div");

    childAppender.setAttribute("class", "modal hidden");
    inputWrapper.appendChild(childAppender);
    childAppender.classList.remove('hidden');

    const bookingIdH1 = document.createElement("h1");
    bookingIdH1.innerHTML = "Booking ID:";

    //Info omkring filmnavnet
    const bookingId = document.createElement("p");
    bookingId.innerHTML = bookingKey.bookId;
    console.log(bookingId);

    const emailH1 = document.createElement("h1");
    emailH1.innerHTML = "Email: ";

    const email = document.createElement("p");
    email.innerHTML = bookingKey.customerEmail;

    const phoneNumberH1 = document.createElement("h1");
    phoneNumberH1.innerHTML = "Phone number: ";

    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = bookingKey.customerNumber;

    const movieNameH1 = document.createElement('h1');
    movieNameH1.innerHTML = "Movie:"

    const movieName = document.createElement('p');
    movieName.innerHTML = bookingKey.showing.movie.name;

    const selectNewMovie = document.createElement('select')
    selectNewMovie.setAttribute('type', 'text');
    selectNewMovie.setAttribute("id", "movie-list");



    const theaterH1 = document.createElement("h1");
    theaterH1.innerHTML = "Theater:";

    const theater = document.createElement('p');
    theater.innerHTML = bookingKey.showing.theater;

    const dateTimeH1 = document.createElement('h1');
    dateTimeH1.innerHTML = "Date & Time";

    const dateTime = document.createElement('p');
    dateTime.innerHTML = bookingKey.showing.date;

    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.setAttribute("value", "Edit Booking");
    editButton.setAttribute("class", 'button');

    editButton.onclick = function () {
        const movieList = document.getElementById("movieList")

            for(let i of movieMap.keys()){
                const option = document.createElement("option");
                option.innerHTML = movieMap.get(i).name;
                option.value = movieMap.get(i).movieId;
                movieList.appendChild(option);
            }



    }

    childAppender.appendChild(bookingIdH1);
    childAppender.appendChild(bookingId);
    childAppender.appendChild(emailH1);
    childAppender.appendChild(email);
    childAppender.appendChild(phoneNumberH1);
    childAppender.appendChild(phoneNumber);
    childAppender.appendChild(movieNameH1);
    childAppender.appendChild(movieName);
    childAppender.appendChild(theaterH1);
    childAppender.appendChild(theater);
    childAppender.appendChild(dateTimeH1);
    childAppender.appendChild(dateTime);
    childAppender.appendChild(selectNewMovie);
    childAppender.appendChild(editButton);





}

function fillDropDownEditBooking(){
    for (let i of movieMap.keys()) {
        const option = document.createElement('option');
        option.innerHTML = bookingMap.showing.movie.name;
        option.value = bookingMap.showing.movie.movieId;
        console.log(option)
        movieList.appendChild(option);
    }

}


async function updateBooking(id, newCustomerEmail, newCustomerNumber){

    const URL = "http://localhost:8080/booking/update/" + id;

    const updateBookingJson = {
        "bookId": id,
        "customerEmail": newCustomerEmail,
        "customerNumber": newCustomerNumber
    }

    const updateBookingObj = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateBookingJson)
    }
    await fetch(URL, updateBookingObj);
}


async function deleteBooking(id){
    const URL = "http://localhost:8080/booking/delete/" + id;
    const deleteBookingObj = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: ""
    }
    await fetch(URL, deleteBookingObj);
}