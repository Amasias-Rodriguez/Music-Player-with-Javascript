const songList = [
    {
        title: "Al Rojo Vivo - Charlie Cardona",
        file: "alrojovivo.mp3",
        cover: "cover.png"
    },
    {
        title: "Alcoba - Grupo Raices",
        file: "alcobaraices.mp3",
        cover: "cover.png"
    },
    {
        title: "Alejate de mi - Frankie Ruiz ",
        file: "alejatedemi.mp3",
        cover: "cover.png"
    }
]

let actualSong = null

// Capturar elementos del dom 

const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

play.addEventListener("click", () => {
    if (audio.paused){
        playSong()
    } else {
        pauseSong()
    }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("prev", () => prevSong())

function loadSongs(){
    songList.forEach((song, index) => {
        console.log(index)
        const li = document.createElement("li")

        const link = document.createElement("a")

        link.textContent = song.title
        link.href = "#"

        link.addEventListener("click", () =>  loadSong(index))

        li.appendChild(link)

        songs.appendChild(li)
    })
}

// Cargar cancion seleccionada
function loadSong(songIndex){
    if (songIndex === actualSong){
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = "./audio/" + songList[songIndex].file
        playSong()
        changeCover(songIndex)       
    }
}

function updateControls(){
    if (audio.paused){
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

function playSong(){
   if (actualSong === null){
    audio.play()
    updateControls()
   }
}



function changeActiveClass(lastIndex, newIndex){
    const links = document.querySelectorAll("a")
    if (lastIndex === null){
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

function changeCover(songIndex){
    cover.src = "./img/" + songList[songIndex].cover
}

function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}

function prevSong(){
    actualSong--
    playSong()
    
}

function nextSong(){
    actualSong--
    pauseSong()
}

// Go!
loadSongs()
