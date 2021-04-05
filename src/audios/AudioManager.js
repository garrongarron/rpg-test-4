import plimUrl from './plim.mp3'
import fuUrl from './Pwhuu.wav'
import saltoUrl from './Salto.wav'
import golpeUrl from './golpe.mp3'
import mortyUrl from './morty.mp3'
let audio = document.createElement('audio')
audio.src = plimUrl
audio.volume = 1.0;
document.body.appendChild(audio)
let plim = () => {
    audio.pause();
    audio.currentTime = 0;
    audio.play()
}

class Sound {
    constructor() {
        this.audioList = {
            'plim': plimUrl,
            'fu': fuUrl,
            'salto': saltoUrl,
            'golpe':golpeUrl,
            'morty':mortyUrl
        }
        this.nodeList = {}

        Object.keys(this.audioList).map(name => {

            let audio = document.createElement('audio')
            audio.src = this.audioList[name]
            audio.volume = .25;
            document.body.appendChild(audio)
            this.nodeList[name] = audio

        })
    }
    play(name) {
        this.nodeList[name].play()
    }
}

let sound = new Sound()

export default plim
export { sound }