import './slidebar.scss'
class SlideBar
{
    constructor(params){
        this.input = document.createElement('input')
        this.params = {
            type:'range',
            min:0.01,
            max:100,
            value:50,
            class:'slider'
        }
        Object.assign(this.params, params | {});
        Object.keys(this.params).map(key=>{
            this.input.setAttribute(key,this.params[key])
        })
        this.container = document.createElement('div')
        this.container.classList.add('slidebar-container')

        this.label = document.createElement('div')
        this.label.innerText = 'Label'
        this.label.classList.add('slidebar-label')
        this.container.appendChild(this.label)
        this.container.appendChild(this.input)
    }
    getContainer(){
        return this.container
    }
    getBar(){
        return this.input
    }

    setLabel(label){
        this.label.innerText = label
    }
    show(){
        this.container.classList.remove('hide')
        this.container.classList.remove('fadeOut1')
        this.container.classList.add('fadeIn1')
        document.body.appendChild(this.container)
    }
    hide(){
        this.container.classList.remove('fadeIn1')
        this.container.classList.add('fadeOut1')
        setTimeout(() => {
            this.container.classList.add('hide')
        }, 1000);
    }
}

export default SlideBar