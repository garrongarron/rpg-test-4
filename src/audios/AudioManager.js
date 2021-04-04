import plimUrl from './plim.mp3'

let audio = document.createElement('audio')
audio.src = plimUrl
audio.volume = 1.0;
document.body.appendChild(audio)
let plim = () => {
    audio.pause();
    audio.currentTime = 0;
    audio.play()
}

export default plim