// ### Author: SidharthaDR
// A web app to select random gradient colors

let color1 = "wheat";
let color2 = "purple";
let degree = 270;

let forBg = true; //make it false after setting up Wincontainer
let isLinear = true;
let clickBtnGrad = 0

const body = document.getElementById("body");
const randomBtn = document.getElementById("random_btn")
const toggleGradBtn = document.getElementById("change_grad_btn")
const colorSwpBtn = document.getElementById("color_swap_btn")
const deg_slider = document.getElementById('sldr')
const sliderText = document.getElementById("slider_text")
const sliderInp = document.getElementById("slider_inp")
const revolveBtn = document.getElementById("toggle_revolve_btn")



function randomhexNumber() {
  letters = "0123456789ABCDEF";
  color = "#";

  // loop 6 times to append 6 random values from letters to color
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }

  return color;
}


// To select random colors
function randomize() {
  color1 = randomhexNumber();
  color2 = randomhexNumber();
}

// To change Grad type
function ChangeGradientType(){
if(clickBtnGrad == 0){
    isLinear = false
    clickBtnGrad++
    refresh()
}

else{
    isLinear = true
    clickBtnGrad = 0
    refresh()
}
}

// To refresh without changing colors
function refresh(){
    if(isLinear){
        body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})` 
        console.log("in bg")
    }
    
    else{
        body.style.background = "radial-gradient("+`${color1}` +", "+ `${color2}`+")"   
    }
}


// To change Bg of Body:
function changeBg() {
  randomize();
if(isLinear){
    body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})` 
    console.log("in bg")
}

else{
    body.style.background = "radial-gradient("+`${color1}` +", "+ `${color2}`+")"   
}
  
}

// To Swap Colors
function swapColors(col1,col2){
    color1 = col2
    color2 = col1
    refresh()
}

// to change Degree using slider
function degreeChange(){
    if(this.value >=0 && this.value<=360){
        degree = this.value
        refresh()
        if(this.value == ""){
            sliderText.textContent = 0

        }
        else{
            sliderText.textContent = ""+degree
        }
    }
}
// Change using slider:
deg_slider.addEventListener('input' || 'change',degreeChange)
// change using input box:
sliderInp.addEventListener('input' || 'change',degreeChange)


// Revolve Function:
function transisf(){
    degree++
    if(degree == 360){
        degree = 0
        sliderText.textContent = degree
    }
    console.log(degree)
    refresh()
    sliderText.textContent = degree
    // document.getElementById("degree_text").textContent = "Deg: "+degree
}

let transis = 0
let pausedT = true
function revolveCall(){
    if(pausedT){
        transis = setInterval(transisf,10)
        pausedT = false
    }
    else{
        clearInterval(transis)
        pausedT = true
    }
    // console.log("toggle_grad: "+ toggleGrad)
}
revolveBtn.addEventListener("click",revolveCall)



// With container added
// To change Bg of WindowContainer
function changeContBg(){
}

// To Show Bg
function toggleBg() {}



randomBtn.addEventListener("click",changeBg)

change_grad_btn.addEventListener("click",ChangeGradientType)

colorSwpBtn.addEventListener("click",function(){swapColors(color1,color2)})

console.log(color1 + "   " + color2);
// changeBg();
