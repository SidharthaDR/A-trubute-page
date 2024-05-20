const count_display = document.getElementById('count_display')

const container = document.getElementById('cont')

// for color display with hex values

const colorD1 = document.getElementById('c1')
const colorD2 = document.getElementById('c2')

// for color display text values

const colorDt1 = document.getElementById('c1_text')
const colorDt2 = document.getElementById('c2_text')


counter = 0

// function to get random hex number

function randomhexNumber(){
    letters = '0123456789ABCDEF'
    color = '#'

    // loop 6 times to append 6 random values from letters to color
    for(let i = 0; i < 6 ; i++){
        color = color + letters[Math.floor(Math.random()*16)]
    }
    
    return color
}

function add(){
    
    
    if(counter < 20 ) {  
        count_display.innerText = ++counter 
        
        let color1 = randomhexNumber()

        colorDt1.innerText = "Color1: "+color1
        colorD1.style.background = color1

        let color2 = randomhexNumber()

        colorDt2.innerText = "Color2: "+color2
        colorD2.style.background = color2
        
        container.style.background = `linear-gradient(270deg, ${color1}, ${color2})`
    } 
   
// debug:
// console.log(counter);
}

function sub(){
    
    
    if(counter > 0 ) { 
        count_display.innerText = --counter
        
        let color1 = randomhexNumber()

        colorDt1.innerText = "Color1: "+color1
        colorD1.style.background = color1

        let color2 = randomhexNumber()

        colorDt2.innerText = "Color2: "+color2
        colorD2.style.background = color2

        container.style.background = `linear-gradient(270deg, ${color1}, ${color2})`
    } 
    
// debug:
// console.log(counter);
}

function reset(){

    counter = 0

    count_display.innerText = counter
    container.style.background = `linear-gradient(270deg, wheat, purple)`

    colorD1.style.background = "wheat"
    colorD2.style.background = "purple"

    colorDt1.innerText = "Color1: wheat"
    colorDt2.innerText = "Color2: purple"

    
// debug:
// console.log(counter);
}



// debug section:

// console.log((Math.random()*2));
// console.log(Math.floor(Math.random()*2));