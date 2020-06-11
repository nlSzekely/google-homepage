const searchBar = document.querySelector(".search_bar");


const keyword = "dif";
const keyArr = [];
searchBar.addEventListener("keyup",function(e){
    if(keyArr.length < keyword.length){

        keyArr.push(e.key);
    }else{
        keyArr.shift();
        keyArr.push(e.key);
    }
    if(keyArr.join("").toLowerCase() === keyword){
        window.location.replace("https://nlszekely.github.io/google-search-result-page/");
    }
})