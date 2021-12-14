async function wait4Fetch(){
    await getAllShowings()
    Calendar();
}
wait4Fetch()
let selectTable = document.getElementById('tBody')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();

function Calendar(){
    for (let i=0; i<= 11; i++){

        let trTag = document.createElement('tr')
        trTag.setAttribute('class', 'trTagId')
        console.log(selectTable.children)

        selectTable.appendChild(trTag)


        for ( let j=1; j<8; j++){
            let makeATag= document.createElement('button')
            let makeATdTag= document.createElement('td')
            let day = weekday[d.getDay()];
            //makeATag.href="booking/TestShowBookingAntal.html"
            makeATdTag.innerHTML= day + " d. " + d.getDate() +"/"+ (d.getMonth() +1);
            let g=1;
            d.setDate(d.getDate()+g)
            g++
            let date = d.getDate()-1;
            let month = d.getMonth();
            makeATdTag.onclick= function () {show4SelectedDate(date,month)}
            makeATag.appendChild(makeATdTag)
            trTag.appendChild(makeATag)




        }
    }
}
const inputWrapper2 =document.querySelector(".inputWrapper2")
function show4SelectedDate(date,month){
    console.log("Yessss")
    for (let i of showingMap.keys()) {
        console.log("forloop")

        let showingDate = new Date(showingMap.get(i).date);
        let numberOfShowings = 0;
        console.log(date)
        console.log(showingDate.getDate())
        if (date === showingDate.getDate() && month === showingDate.getMonth()) {
            numberOfShowings ++
            console.log("IF")
            const h1=document.createElement("h1")
             h1.innerHTML=showingDate.getHours()+":"+showingDate.getMinutes() + "Theater: "+showingMap.get(i).theater+" " + showingMap.get(i).movie.name
             inputWrapper2.appendChild(h1)
        }
    }
}