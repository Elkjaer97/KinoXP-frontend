

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
        bookingId.innerHTML = bookingKey.bookId; //prik dig igennem lorten bitch

        const email = document.createElement("h1");
        email.innerHTML = "Email: ";

        const customerEmail = document.createElement("p");
        customerEmail.innerHTML =  bookingKey.customerEmail;

        const number = document.createElement("h1");
        number.innerHTML = "Customer phone number";

        const customerNumber = document.createElement("p");
        customerNumber.innerHTML = bookingKey.customerNumber;

        const showingId = document.createElement("h1");
        showingId.innerHTML = bookingKey.showingId;

        const editButton = document.createElement('input');
        editButton.type = "button";
        editButton.setAttribute('value', 'Edit Booking');
        editButton.setAttribute('class', 'button');


        childAppender.appendChild(bookingNummer);
        childAppender.appendChild(bookingId);
        childAppender.appendChild(email);
        childAppender.appendChild(customerEmail);
        childAppender.appendChild(number);
        childAppender.appendChild(customerNumber);
        childAppender.appendChild(showingId);
        childAppender.appendChild(editButton);

        editButton.onclick = function () {

            const editBookingId = document.createElement('input');
            editBookingId.setAttribute('value', bookingKey.bookId);

            const editEmail = document.createElement('input');
            editEmail.setAttribute('value', bookingKey.customerEmail);

            const editNumber = document.createElement('input');
            editNumber.setAttribute('value', bookingKey.customerNumber);

            const submitButton = document.createElement('input');
            submitButton.type = 'button';
            submitButton.setAttribute('value', "Submit Change");
            submitButton.setAttribute('class', 'button');

            const deleteButton = document.createElement('input');
            deleteButton.setAttribute("class", "button");
            deleteButton.type = "button";
            deleteButton.setAttribute("value", "Delete Booking");

            bookingNummer.appendChild(editNumber);
            email.appendChild(editEmail);
            bookingId.appendChild(editBookingId);
            childAppender.appendChild(submitButton);
            childAppender.appendChild(deleteButton);

            submitButton.onclick = function () {
                updateBooking(bookingKey.bookId, editBookingId.value, editEmail.value, editNumber.value);
                location.href = "../html/booking/show-booking.html"
            }

            deleteButton.onclick = function () {
                deleteBooking(bookingKey.bookId);
                location.href = "../html/booking/show-booking.html"
            }


        }
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