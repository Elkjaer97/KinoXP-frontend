async function wait4Fetch(){
    await getAll();
fillDropDown();
}

const select = document.getElementById("MovieList");
 function fillDropDown(){

    for (let i of movieMap.keys()){
        const option = document.createElement("option")
        option.innerHTML = movieMap.get(i).name;
        select.appendChild(option);
    }

}
wait4Fetch();
