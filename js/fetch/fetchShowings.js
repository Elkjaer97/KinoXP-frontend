const getShowingURL =  "http://localhost:8080/showing/get";


async function getShowings(){
    return fetch(getShowingURL).then(response => response.json());
}

async function callGetShowings(){
    const promise = getShowings();
    await promise.then(createShowingMap);
}

let ShowingMap = new Map();

function createShowingMap(data){
    data.forEach(Showing =>{
        ShowingMap.set(Showing.showingId, Showing)
    })
}

async function getAll(){
    await callGetShowings();
}