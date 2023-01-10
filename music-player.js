const songList = [
    {
        title: "Al Rojo Vivo",
        file: "alrojovivo.mp3",
        cover: "music.png"
    },
    {
        title: "Alcoba",
        file: "alcobaraices.mp3",
        cover: "music.png"
    },
    {
        title: "Alejate de mi ",
        file: "alejatedemi.mp3",
        cover: "music.png"
    }
]

// Capturar elementos del dom 

const songs = document.getElementById('songs')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
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
    audio.src = "./audio/" + songList[songIndex].file
    audio.play()

    cover.src = "./img/" + songList[songIndex].cover
}

// Go!
loadSongs()
