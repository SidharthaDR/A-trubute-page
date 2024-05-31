// ##Author: SidharthaDR

// Variables and such:

// To toggle counter visibility:
let toggle_val = 0 //if 0 --> visible
let color1 = "wheat"
let color2 = "purple"
let degree = "270"

let toggle_G = 0 //if 0 -> it is linear


let counter = 0

const count_display = document.getElementById('count_display')//Number
const container = document.getElementById('cont')
const body = document.getElementById('body')

// for changing angle in linear grad
const deg_slider = document.getElementById('sldr')

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

// for color swap
const SwapColorbtn = document.getElementById("color_swap")

// for Randomize button
const randomBtn = document.getElementById('random_btn')


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
} //Function 1


function add(){
    if(counter < 20 ) {  
        count_display.innerText = ++counter 
        
        color1 = randomhexNumber()

        colorDt1.innerText = "Color1: "+color1
        colorD1.style.background = color1

        color2 = randomhexNumber()

        colorDt2.innerText = "Color2: "+color2
        colorD2.style.background = color2
        
        
        changeContainerBg();

    } 
   
// debug:
// console.log(counter);
} //Function2

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
} //Function3

function reset(){

    counter = 0

    count_display.innerText = counter
    container.style.background = `linear-gradient(270deg, wheat, purple)`

    colorD1.style.background = "wheat"
    colorD2.style.background = "purple"

    colorDt1.innerText = "Color1: wheat"
    colorDt2.innerText = "Color2: purple"

    degree = 270
    document.getElementById("degree_text").textContent = "Deg: "+degree
    deg_slider.value = 270

    
// debug:
// console.log(counter);
}//Function4


// bg changing functions, for body and counter


function changeBodyBg(){
    if(toggle_G == 0){
        body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`  
    }
    else{
        body.style.background = "radial-gradient("+`${color1}` +", "+ `${color2}`+")"   
    }
} //Function5

function changeContainerBg(){
    if(toggle_G == 0){
        container.style.background = "linear-gradient( "+ `${degree}`+"deg, " +`${color1}`+", "+`${color2}`+")"
        // container.style.background = "blue"
    }
    else{
        container.style.background = "radial-gradient("+`${color1}` +", "+ `${color2}`+")" 
    }
} //Function6



// swap color function:
function swapColor(co1,co2){
    let temp = co1
    color1 = co2
    color2 = temp

    colorD1.style.background = color1
    colorD2.style.background = color2

    colorDt1.innerText = "Color1: "+color1
    colorDt2.innerText = "Color2: "+color2

    if(inBody == 0){
        changeContainerBg()
    }
    else{
        changeBodyBg()
    }
} //Function 7

// To toggle gradient b/w linear and radial

// let toggleGradFlag = 0 // if 0 -> linear else radial

let inBody = 0 // container is visible

function toggleGrad(){
if(inBody == 0){
    if(toggle_G == 0){
        toggle_G=1
        changeContainerBg()
    }
    else{
        toggle_G=0
        changeContainerBg()
    }
}
else{
    if(toggle_G == 0){
        toggle_G=1
        changeBodyBg()
        changeContainerBg()
    }
    else{
        toggle_G=0
        changeBodyBg()
        changeContainerBg()
    }
}
} //Function 8






// toggle_val if 0 then counter is visible, if 1 then invisible

function toggleCt(){
   if(toggle_val == 0){
    toggle_val = 1
    inBody = 1
    // counter thus becomes invisible now and body color is shown
    counter_section.style.display = "none"
    changeBodyBg()
   }

   else{
    toggle_val = 0
    inBody = 0
    // counter thus becomes visible, body color is reset to white
    counter_section.style.display = "flex"
    body.style.background = "white"
   }

} //Function9



// Event listners:

toggle.addEventListener('click',toggleCt)

gradTypeBtn.addEventListener('click',toggleGrad)

SwapColorbtn.addEventListener('click', function(){
   swapColor(color1,color2) 
})

deg_slider.addEventListener('input' || 'change',function(e){
    // console.log(deg_slider.value)
    degree = this.value
    document.getElementById("degree_text").textContent = "Deg: "+degree
    if(inBody == 0){
        changeContainerBg()
    }
    else{
        changeBodyBg()
    }

})

document.getElementById('reset_deg').addEventListener('click',function(){
    deg_slider.value = 270
    degree = 270
    document.getElementById("degree_text").textContent = "Deg: "+degree

    if(inBody == 0){
        changeContainerBg()
    }
    else{
        changeBodyBg()
    }
})

// randomize button for getting random colors

randomBtn.addEventListener("click", function (){
    color1 = randomhexNumber()

    colorDt1.innerText = "Color1: "+color1
    colorD1.style.background = color1

    color2 = randomhexNumber()

    colorDt2.innerText = "Color2: "+color2
    colorD2.style.background = color2

    if(inBody != 0){
        changeBodyBg()
    }
    else{
        changeContainerBg()
    }
})

// Done








// debug section:

// console.log((Math.random()*2));
// console.log(Math.floor(Math.random()*2));

function transisf(){
    degree++
    if(degree == 360){
        degree = 0
        document.getElementById("degree_text").textContent = "Deg: "+degree
    }
    console.log(degree)
    changeContainerBg()
    document.getElementById("degree_text").textContent = "Deg: "+degree
}

let transis = 0
    


let paused = true
function debugCall(){
    if(paused){
        transis = setInterval(transisf,10)
        paused = false
    }
    else{
        clearInterval(transis)
        
        paused = true
    }

    
    // console.log("toggle_grad: "+ toggleGrad)

}
