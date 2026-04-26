const apiKey = import.meta.env.VITE_API_KEY 
const baseAllUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`
const searchBtn = document.getElementById("input-btn")
const formEl = document.getElementById("search-form")
const inputEl = document.getElementById("input-search")
const container = document.getElementById("container-theme")

let dataApi
/*
Poster: "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg"
Title: "Blade Runner"
Type: "movie"
Year:"1982"
imdbID:"tt0083658"*/
let input
/*------------------------info from input on click------------------------------*/
function getFormValue(e) {
    e.preventDefault()
    if(e){
    input = inputEl.value
    return input 
    }
}
formEl.addEventListener("submit", getFormValue)
/*------------------------info from input on click------------------------------*/


 async function getDataApi() {
            const response = await fetch(baseAllUrl + `s=${input}`)
            const data = await response.json()
            
             dataApi = data.Search || data
             const movies = Array.isArray(dataApi) ? dataApi : [dataApi]
             
             if(movies.length <= 1) {
               container.innerHTML =`<p>${movies[0].Error}</p>` 
             } else {
              for(let movie of movies) {
                
                getDataMovie(movie.Title)
               }
             }
               
            inputEl.value = ""
 }      
formEl.addEventListener("submit", getDataApi)

const dataArr = []
async function getDataMovie(input) {
            dataArr.length = 0
            const response = await fetch(baseAllUrl + `t=${input}`)
            const data = await response.json()
            dataArr.push(data)

            render(dataArr.slice(0,4))
            console.log(dataArr.map((data)=> data.imdbID))
            
}

function render(movies) {

   container.innerHTML = movies.map((movie, index) => {
    
      return ` 
         <div class="box-film" id="movie-${index}">
            <img  class="movie-img" id="movie-img" src=${movie.Poster} alt="movie list id x">
            <div class="text-container" id="text-container">
              <!--Title-->
              <div class="title-box" id="title-box">
                
                  <h3 class="title-text" id="title-text">${movie.Title}</h3>
                
                <div class="title-calification" id="title-calification">
                  <img class="star" id="star" alt="star" src="./src/assets/star.svg">
                  <p class="star-num" id="star-num">${movie.imdbRating}</p>
                </div> 
              </div>
              <!--Title-->
              <!--Inline info-->
              <div class="inline-container" id="inline-container">
                <h4 class="inline-time" id="inline-time">${movie.Runtime}</h4>
                <h4 class="inline-list-tipo" id="inline-list-tipo">${movie.Genre}</h4>
                <div class="add-container" id="add-container">
                  <img class="add-img" src="src/assets/add.svg" data-id=${movie.imdbID}>
                  <h4>Watchlist</h4>
                </div>
              </div>
               <!--Inline info-->
               <!--Paragraf info-->
              <div class="paragraf-info-container" id="paragraf-info-container">
                <h3>
                ${movie.Plot}
                </h3>
              </div>
               <!--Paragraf info-->
            </div>
        </div>`
    }).join('')
}
const addBtn = document.getElementById("add-img")

container.addEventListener("click", (e)=>{
  const movieId = e.target.dataset
  console.log(movieId)
})
/*{
  Title: "Blade Runner",
  Year: "1982",
  Type: "movie",
  Rated: "R",
  Runtime: "117 min",

  Genre: "Action, Drama, Sci-Fi",
  Director: "Ridley Scott",
  Writer: "Hampton Fancher, David Webb Peoples, Philip K. Dick",
  Actors: "Harrison Ford, Rutger Hauer, Sean Young",

  Plot: "A blade runner must pursue and terminate four replicants...",

  Language: "English, German, Cantonese...",
  Country: "United States, United Kingdom, Hong Kong",

  Awards: "Nominated for 2 Oscars...",
  BoxOffice: "$32,914,489",

  imdbID: "tt0083658",
  imdbRating: "8.1",
  imdbVotes: "876,371",

  Metascore: "84",
  Released: "25 Jun 1982",

  Poster: "https://...",
  Response: "True"
}*/





/*function getFormValue(e) {
    e.preventDefault()
    const inputValue = inputEl.value
    
    if(inputValue) {
        async function dataApi() {
            const response = await fetch(baseAllUrl + `s=${inputValue}`)
            const data = await response.json()
            console.log(data.Search.slice(0, 3))
            //const shortData = data.slice(0, 1)
           // localStorage.setItem("movies info", JSON.stringify(data))
           // console.log(shortData)
            }
             dataApi() 
    }
    
    
    
}*/

