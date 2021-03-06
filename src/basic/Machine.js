let on = true
let prev = new Date().getTime() - 100
class Machine {
    constructor() {
        this.callbacks = []

    }
    addCallback(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback)
        }
    }
    removeCallback(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index !== -1) {
            this.callbacks.splice(index, 1);
        }
    }
    cleanCallbacks() {
        this.callbacks = []
    }
    run() {
        let currentTime = new Date().getTime()
        let diff = currentTime - prev
        if (diff < 32) { //16/1000
            // console.log(diff, 'jumping');
            requestAnimationFrame(machine.run)
            return
        }
        prev = currentTime

        try {
            machine.callbacks.forEach(func => func())
        } catch (error) {
            console.log(error);
        }

        if (on) {
            setTimeout(() => {
                requestAnimationFrame(machine.run)
            }, 1000 / 30);
        }
    }

    off() {
        on = false
    }
    on() {
        on = true
        this.run()
    }
}

const machine = new Machine()
if (window._stop == undefined) {
    window._stop = () => {
        machine.off()
        return machine
    }
}

if (window._restart == undefined) {
    window._restart = () => {
        machine.on()
        return machine
    }
}
export default machine