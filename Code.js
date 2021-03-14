class Code{
    constructor(){
        this.button = createButton('Unlock the door');
        this.greeting = createElement('h2');
        this.title = createElement('h1');
    }

    display(){
        this.title.html("welcome to level 1");
        this.button.position(374,349,10,10);
        this.button.mousedPressed(() => {
        this.greeting.html("The code is", Math.round(random(10,60)));
        this.greeting.position(80,70,60,20)
        })
    }
}