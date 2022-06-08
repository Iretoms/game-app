const BASE_URL = 'https://rawg.io/api/'
const KEY = 'b88769a50bb9414981102a0c0ba1212c'

const time = new Date()

const year = time.getFullYear()
const month = time.getMonth()
const date = time.getDay()

const currentDate = `${year}-${month<10 ? `0${month}`: month}-${date<10 ? `0${date}`: date}`
const lastYear = `${year-1}-${month<10 ? `0${month}`: month}-${date<10 ? `0${date}`: date}`
const nextYear = `${year+1}-${month<10 ? `0${month}`: month}-${date<10 ? `0${date}`: date}`

const popular_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`
const upcoming_games = `games?key=${KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=9`
const new_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=9`

const popularEl = document.querySelector('.popular-games')
const upcomingEl = document.querySelector('.upcoming-games')
const newEl = document.querySelector('.new-games')


getPopularGames()
getUpcomingGames()
getNewGames()

function getPopularGames(){
    axios.get(BASE_URL + popular_games)
          .then(response =>{
              let result = response.data.results
              displayPopular(result);
          })
          .catch(err => console.log(err))
}

function getUpcomingGames(){
    axios.get(BASE_URL + upcoming_games)
          .then(response =>{
              let result = response.data.results
              displayUpcoming(result);
          })
          .catch(err => console.log(err))
}

function getNewGames(){
    axios.get(BASE_URL + new_games)
          .then(response =>{
              let result = response.data.results
              displayNew(result);
          })
          .catch(err => console.log(err))
}

function displayPopular(datas){
    popularEl.innerHTML=''

    datas.forEach(data => {
        let {name, released, background_image} = data

        let gameCard = document.createElement('div')
        gameCard.classList.add('game-card')
        gameCard.innerHTML = `
        <h4>${name}</h4>
        <p>${released}</p>
        <img src="${background_image}" alt="${name}">
    `   
        popularEl.appendChild(gameCard)   
    });
}

function displayUpcoming(datas){
    upcomingEl.innerHTML=''


    datas.forEach(data => {
        let {name, released, background_image} = data

        let gameCard = document.createElement('div')
        gameCard.classList.add('game-card')
        gameCard.innerHTML = `
        <h4>${name}</h4>
        <p>${released}</p>
        <img src="${background_image}" alt="${name}">
    `   
        upcomingEl.appendChild(gameCard)   
    });
}

function displayNew(datas){
    newEl.innerHTML=''

    datas.forEach(data => {
        let {name, released, background_image} = data

        let gameCard = document.createElement('div')
        gameCard.classList.add('game-card')
        gameCard.innerHTML = `
        <h4>${name}</h4>
        <p>${released}</p>
        <img src="${background_image}" alt="${name}">
    `   
        newEl.appendChild(gameCard)   
    });
}