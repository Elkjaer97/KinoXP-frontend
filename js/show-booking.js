

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
        const bookIdH1 = document.createElement("h1");
        bookIdH1.innerHTML = "Booking ID: ";

        //Info omkring filmnavnet
        const bookingId = document.createElement("p");
        bookingId.innerHTML = bookingKey.bookId;
        //prik dig igennem lorten bitch

        const emailH1 = document.createElement("h1");
        emailH1.innerHTML = "Email: "

        const email = document.createElement("p");
        email.innerHTML = bookingKey.customerEmail;

        const phoneNumberH1 = document.createElement("h1");
        phoneNumberH1.innerHTML = "Phone Number: "

        const phoneNumber = document.createElement("p");
        phoneNumber.innerHTML = bookingKey.customerNumber;



        const editButton = document.createElement('input');
        editButton.type = "button";
        editButton.setAttribute('value', 'Edit Booking');
        editButton.setAttribute('class', 'button');

        childAppender.appendChild(bookIdH1);
        childAppender.appendChild(bookingId);
        
        childAppender.appendChild(emailH1);
        childAppender.appendChild(email);
        
        childAppender.appendChild(phoneNumberH1);
        childAppender.appendChild(phoneNumber);

        childAppender.appendChild(editButton);



        editButton.onclick = function () {

            //const editBookingId = document.createElement('input');
            //editBookingId.setAttribute('value', bookingKey.bookId)

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
                updateBooking(editBookingId.bookId, editBookingId.value, editEmail.value, editPhoneNumber.value);
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
        "bookId" : id,
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