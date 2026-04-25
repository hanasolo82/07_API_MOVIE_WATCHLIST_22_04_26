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
            const response = await fetch(baseAllUrl + `t=${input}&s=${input}`)
            const data = await response.json()
             dataApi = data.Search.slice(0,5)
             for(let movie of dataApi) {

               getDataMovie(movie.Title)

             }
            // 
            // console.log(dataApi)
 }      
formEl.addEventListener("submit", getDataApi)

async function getDataMovie(input) {
            const response = await fetch(baseAllUrl + `t="${input}"`)
            const data = await response.json()
           // render(data.Search)
            console.log(data)
            
}

function render(movie) {
    const html = ` 
         <div class="box-film" id="box-film" data-id="">
            <img  class="movie-img" id="movie-img" src=""POster"" alt="movie list id x">
            <div class="text-container" id="text-container">
              <!--Title-->
              <div class="title-box" id="title-box">
                
                  <h3 class="title-text" id="title-text">title</h3>
                
                <div class="title-calification" id="title-calification">
                  <img class="star" id="star" alt="star" src="./src/assets/star.svg">
                  <p class="star-num" id="star-num">8.1</p>
                </div> 
              </div>
              <!--Title-->
              <!--Inline info-->
              <div class="inline-container" id="inline-container">
                <h4 class="inline-time" id="inline-time">113min</h4>
                <h4 class="inline-list-tipo" id="inline-list-tipo">Action, Drama, Sci-fi</h4>
                <div class="add-container" id="add-container">
                  <button type="button" class="add-btn" id="add-btn">+</button>
                  <h4>Watchlist</h4>
                </div>
              </div>
               <!--Inline info-->
               <!--Paragraf info-->
              <div class="paragraf-info-container" id="paragraf-info-container">
                <h3>
                  A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.
                </h3>
              </div>
               <!--Paragraf info-->
            </div>
        </div>`
 
    return  container.innerHTML = html
}

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

