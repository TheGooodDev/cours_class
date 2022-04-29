export class Circle{
    constructor(id){
        this.circle = document.createElement("div")
        this.circle.classList.toggle("circle")
        this.circle.style.backgroundColor = `#${ Math.floor(Math.random()*16777215).toString(16)}`
        this.x = Math.floor(Math.random() * window.innerWidth)
        this.y = Math.floor(Math.random() * window.innerHeight)

        this.circle.innerHTML = id
        this.circle.style.top = `${this.y}px`
        this.circle.style.left = `${this.x}px`
        document.body.appendChild(this.circle);
        this.event()
    }

    event(){
        this.circle.addEventListener('click', function(){
            this.remove()
        })
    }


    remove(){
        this.circle.remove
    }

}