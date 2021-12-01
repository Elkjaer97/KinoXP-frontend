const getShowingURL =  "http://localhost:8080/showing/get";


async function getShowings(){
    return fetch(getShowingURL).then(response => response.json());
}

async function callGetShowings(){
    const promise = getShowings();
    await promise.then(createShowingMap);
}

let showingMap = new Map();

function createShowingMap(data){
    data.forEach(showing =>{
        showingMap.set(showing.showingId, showing)
    })
}

async function getAllShowings(){
    await callGetShowings();
}