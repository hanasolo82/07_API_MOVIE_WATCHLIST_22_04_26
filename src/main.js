const apiKey = import.meta.env.VITE_API_KEY 
const baseAllUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`
const searchBtn = document.getElementById("input-btn")
const formEl = document.getElementById("search-form")
const inputEl = document.getElementById("input-search")






formEl.addEventListener("submit", getFormValue)

function getFormValue(e) {
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
    
    
    
}

