const jokecontainer = document.getElementById("joke")
const button = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

const getjoke = async () => {

    // fetch(url) 
    // .then(data => data.json())
    // .then(item => jokecontainer.textContent = `${item.joke}`)


    try{

         const response = await fetch(url) ; 
         const item = await response.json();
         jokecontainer.textContent = `${item.joke}`

        }

    catch(err){
        
        jokecontainer.textContent = `${err}`

    }  
}

button.addEventListener("click" , getjoke)
getjoke()