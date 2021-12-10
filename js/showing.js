async function wait4Fetch(){
    await getAll();
    await getAllShowings();
    printAllShowings();
}
wait4Fetch();

const dateInp = document.getElementById("time");
const selectedShowing = document.getElementById("selected-showing");
const dateHeader = document.getElementById("date-header");
const currentShows = document.getElementById("all-showings");
const theater = document.getElementById("theater");

function printAllShowings(){
    for (let key of showingMap.keys()) {
        let showingKey = showingMap.get(key);

        const timeLabel = document.createElement("h2");
        const endTimeLabel = document.createElement("h2");
        const theaterLabel = document.createElement("h2");
        const movieLabel = document.createElement("h2");

        timeLabel.innerHTML = "Time of show:";
        endTimeLabel.innerHTML = "End of show:";
        theaterLabel.innerHTML = "Theater:";
         movieLabel.innerHTML = "Movie:";

        const time = document.createElement('h3');
        const endTime = document.createElement('h3');
        const theater = document.createElement('h3');
        const movie = document.createElement('h3');


        time.innerHTML = showingKey.date;
        endTime.innerHTML = showingKey.endDate;
        theater.innerHTML = showingKey.theater;
        movie.innerHTML = showingKey.movie.name;

        currentShows.appendChild(timeLabel);
        currentShows.appendChild(time);
        currentShows.appendChild(endTimeLabel);
        currentShows.appendChild(endTime);
        currentShows.appendChild(theaterLabel);
        currentShows.appendChild(theater);
        currentShows.appendChild(movieLabel);
        currentShows.appendChild(movie);
    }
}

    function printSpecificShowings(){
        selectedShowing.innerHTML = "";
        for (let key of showingMap.keys()) {
            let showingKey = showingMap.get(key)
            let showingDate = new Date(showingKey.date);
            let selectedDate = new Date(dateInp.value)

            if(selectedDate.getDate()===showingDate.getDate()){
                const timeLabel = document.createElement("h2");
                const endTimeLabel = document.createElement("h2");
                const theaterLabel = document.createElement("h2");
                const movieLabel = document.createElement("h2");

                timeLabel.innerHTML = "Time of show:";
                endTimeLabel.innerHTML = "End of show:";
                theaterLabel.innerHTML = "Theater:";
                movieLabel.innerHTML = "Movie:";

                const time = document.createElement('h3');
                const endTime = document.createElement('h3');
                const theater = document.createElement('h3');
                const movie = document.createElement('h3');


                time.innerHTML = showingKey.date;
                endTime.innerHTML = showingKey.endDate;
                theater.innerHTML = showingKey.theater;
                movie.innerHTML = showingKey.movie.name;

                currentShows.appendChild(timeLabel);
                currentShows.appendChild(time);
                currentShows.appendChild(endTimeLabel);
                currentShows.appendChild(endTime);
                currentShows.appendChild(theaterLabel);
                currentShows.appendChild(theater);
                currentShows.appendChild(movieLabel);
                currentShows.appendChild(movie);
            }
        }

    }

    function updateHeader(){
        dateHeader.innerHTML = "";
        const h1 = document.createElement("h1");
        console.log(dateInp.value+" "+typeof dateInp.value)
        h1.innerHTML = dateInp.value;
        dateHeader.appendChild(h1);
    }

dateInp.addEventListener("change",printSpecificShowings)
dateInp.addEventListener("change",updateHeader)