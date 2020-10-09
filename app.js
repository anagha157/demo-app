window.addEventListener("load",function(){
    document.querySelector(".control-submit").addEventListener("click",handleClick);
})

function handleClick(){
    var searchString = document.querySelector(".control-input").value;
    if(searchString){
        makeApicall(searchString);
    }
}

async function makeApicall(queryWord){
    var apikey = "886f2fbf";
    var results;
    await fetch('http://www.omdbapi.com/?apikey=${apikey}&s=${queryWord}').then(resp => resp.json()).then(data => results=data);
    populateResults(results);
}

function populateResults(results){
    var entriesForDom = [];
    results.Search.forEach(res => {
        var movieDiv = document.createElement("div").innerText = res.Title;
        entriesForDom.push(movieDiv)
    });
    console.log(entriesForDom);
    document.querySelector("#results").append(...entriesForDom);

}
