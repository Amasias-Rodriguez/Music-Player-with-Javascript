const songList = [
    {
        title: "Al Rojo Vivo - Charlie Cardona",
        file: "alrojovivo.mp3",
        cover: "music.png"
    },
    {
        title: "Alcoba - Grupo Raices",
        file: "alcobaraices.mp3",
        cover: "music.png"
    },
    {
        title: "Alejate de mi - Frankie Ruiz ",
        file: "alejatedemi.mp3",
        cover: "music.png"
    }
]

let actualSong = null

// Capturar elementos del dom 

const songs = document.getElementById('songs')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
const title = document.getElementById('title')
// Cargar canciones y mostrar listado

function loadSongs(){
    songList.forEach((song, index) => {
        console.log(index)
        const li = document.createElement('li')

        const link = document.createElement('a')

        link.textContent = song.title
        link.href = '#'

        link.addEventListener('click', () =>  loadSong(index))

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
        audio.play()
        changeCover(songIndex)
        
    }
}

function changeActiveClass(lastIndex, newIndex){
    const links = document.querySelectorAll('a')
    if (lastIndex === null){
        links[lastIndex].classList.remove('active')
    }
    links[newIndex].classList.add('active')
}

function changeCover(songIndex){
    cover.src = "./img/" + songList[songIndex].cover
}

function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}

// Go!
loadSongs()
