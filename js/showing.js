async function wait4Fetch(){
    await getAll();
    await getAllShowings();
    printAllShowings();
}

wait4Fetch();

const currentShows = document.getElementById("all-showings");

function printAllShowings(){
    for (let key of showingMap.keys()) {
        let showingKey = showingMap.get(key);

        const timeLabel = document.createElement("h2");
        const theaterLabel = document.createElement("h2");
        const movieLabel = document.createElement("h2");

       timeLabel.innerHTML = "Time of show:";
       theaterLabel.innerHTML = "Theater:";
       movieLabel.innerHTML = "Movie:";

        const time = document.createElement('h3');
        const theater = document.createElement('h3');
        const movie = document.createElement('h3');


        time.innerHTML = showingKey.date;
        theater.innerHTML = showingKey.theater;
        movie.innerHTML = showingKey.theater;

        currentShows.appendChild(timeLabel);
        currentShows.appendChild(time);
        currentShows.appendChild(theaterLabel);
        currentShows.appendChild(theater);
    }
}
    const dateInp = document.getElementById("time");
    const selectedShowing = document.getElementById("selected-showing");
    const dateHeader = document.getElementById("date-header");
    function printSpecificShowings(){
        selectedShowing.innerHTML = "";
        for (let key of showingMap.keys()) {
            let showingKey = showingMap.get(key)
            let showingDate = new Date(showingKey.date);
            let selectedDate = new Date(dateInp.value)

            console.log(showingKey.date.get)

            if(selectedDate.getDate()===showingDate.getDate()){
                const timeLabel = document.createElement("h2");
                const theaterLabel = document.createElement("h2");

                timeLabel.innerHTML = "Time of show:";
                theaterLabel.innerHTML = "Theater:";

                const time = document.createElement('h3');
                const theater = document.createElement('h4');


                time.innerHTML = showingKey.date;
                theater.innerHTML = showingKey.theater;

                selectedShowing.appendChild(timeLabel);
                selectedShowing.appendChild(time);
                selectedShowing.appendChild(theaterLabel);
                selectedShowing.appendChild(theater);
            }
        }

    }

    function updateHeader(){
        dateHeader.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.innerHTML = dateInp.value;
        dateHeader.appendChild(h1);
    }
const timeInpField = document.getElementById("time");
timeInpField.addEventListener("change",printSpecificShowings)
timeInpField.addEventListener("change",updateHeader)