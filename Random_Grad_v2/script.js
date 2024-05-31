// ##Author: SidharthaDR

// Variables and such:

const count_display = document.getElementById('count_display')
const container = document.getElementById('cont')
const body = document.getElementById('body')
const deg_slider = document.getElementById('sldr')



let color1 = "wheat"
let color2 = "purple"
let degree = "270"

// for color display with hex values

const colorD1 = document.getElementById('c1')
const colorD2 = document.getElementById('c2')

// for color display text values

const colorDt1 = document.getElementById('c1_text')
const colorDt2 = document.getElementById('c2_text')


// Toggle btn getElement by id to toggle counter

const toggle = document.getElementById("toggle_btn")
const counter_section = document.getElementById("full_counter")

// toggle button for gradType:

const gradTypeBtn = document.getElementById("toggle_dir")
gradTypeBtn.addEventListener('click',toggleGrad)

counter = 0

// Done





// Functions:
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
        
        color1 = randomhexNumber()

        colorDt1.innerText = "Color1: "+color1
        colorD1.style.background = color1

        color2 = randomhexNumber()

        colorDt2.innerText = "Color2: "+color2
        colorD2.style.background = color2
        
        // container.style.background = `linear-gradient(270deg, ${color1}, ${color2})`
        changeContainerBg();

    } 
   
// debug:
// console.log(counter);
}

function sub(){
    
    
    if(counter > 0 ) { 
        count_display.innerText = --counter
        
        color1 = randomhexNumber()

        colorDt1.innerText = "Color1: "+color1
        colorD1.style.background = color1

        color2 = randomhexNumber()

        colorDt2.innerText = "Color2: "+color2
        colorD2.style.background = color2
        
        // container.style.background = `linear-gradient(270deg, ${color1}, ${color2})`
        changeContainerBg();
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


// bg changing functions, for body and counter

let toggle_dir = 0 //if 0 -> it is linear

function changeBodyBg(){
    if(toggle_dir == 0){
        body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`  
    }
    else{
        body.style.background = `radial-gradient(${color1}, ${color2})`  
    }
}

function changeContainerBg(){
    if(toggle_dir == 0){
        container.style.background = "linear-gradient( "+ `${degree}`+"deg, " +`${color1}`+", "+`${color2}`+")"
        // container.style.background = "blue"
    }
    else{
        // container.style.background = "radial-gradient("+`${color1}` +", "+ `${color2}`+")" 
    }
}



// swap color function:
function swapColor(co1,co2){
    let temp = co1
    color1 = co2
    color2 = temp

    colorD1.style.background = color1
    colorD2.style.background = color2

    colorDt1.innerText = "Color1: "+color1
    colorDt2.innerText = "Color2: "+color2

    container.style.background = `linear-gradient(270deg, ${color1}, ${color2})`

    if(toggle_val != 0){
        // body.style.background = `linear-gradient(270deg, ${color1}, ${color2})`
        body.style.visibility = "hidden"

    }
}

// To toggle gradient b/w linear and radial

// let toggleGradFlag = 0 // if 0 -> linear else radial

function toggleGrad(){
    if(toggle_dir == 0){
        toggle_dir = 1
    }
    else{
        toggle_dir = 0
    }
    changeBodyBg()
    changeContainerBg()
}




// To toggle counter visibility:
let toggle_val = 0

// toggle_val if 0 then counter is visible, if 1 then invisible

function toggleCt(){
    if(toggle_val == 0){
        // counter_section.style.visibility = "hidden"
        counter_section.style.display = "none"
        toggle_val = 1
        console.log("In toggle hidden")
        
            changeContainerBg()
            changeBodyBg()
        
        
    }
    else{
        console.log("In else")
        // counter_section.style.visibility = "visible"
        counter_section.style.display = "flex"
        toggle_val = 0
        console.log("In toggle visible")
        body.style.background =  "radial-gradient(rgb(255, 255, 255),rgb(230, 230, 230))";
    }

}

toggle.addEventListener('click',toggleCt)


// Done






// debug section:

// console.log((Math.random()*2));
// console.log(Math.floor(Math.random()*2));

function debugCall(){
    console.log("toggle_val: "+toggle_val)
    console.log("toggle_dir: "+toggle_dir)
    swapColor(color1,color2)
}
