const head_text = document.getElementById('count_btn')
const container = document.getElementById('cont')
var count = 0;
let init = 0;
let colors = ["a80268", "f10d4a", "fc6b3f", "f7d86c", "339095", "383b44", "bd5532", "e1b866", "dee1b6", "73c8a9", "9e1f54", "7b1e4a", "581b3d", "8fb2c6", "f9bf76", "e6625d", "d1313d", "615376", "a80268", "339095"]
var rev_index = 19

container.style.setProperty('--color1', "#" + colors[count])
container.style.setProperty('--color2', "#" + colors[rev_index])


function add() {
    console.log("color1: " + count + "/n color2:" + rev_index)

    // alert('test')
    if (count == 20) {
        // alert("Max limit is 20")
        container.style.setProperty('--color1', "#" + colors[19])

        container.style.setProperty('--color2', "#" + colors[rev_index])

    }
    else {
        container.style.setProperty('--color1', "#" + colors[count])
        container.style.setProperty('--color2', "#" + colors[rev_index])

        head_text.textContent = ++count
        head_text.style.color = "#" + colors[count]
        --rev_index
    }

}
function minus() {
    console.log("color1: " + count + "/n color2:" + rev_index)

    if (count == 0) {
        // alert("Minimum value is 0")
    }
    else {

        container.style.setProperty('--color1', "#" + colors[count])
        container.style.setProperty('--color2', "#" + colors[rev_index])

        head_text.textContent = --count
        head_text.style.color = "#" + colors[count]
        ++rev_index




    }
}
function reset() {
    console.log("color1: " + count + "/n color2:" + rev_index)

    count = init
    head_text.textContent = count
    head_text.style.color = "#" + colors[count]

    rev_index = 19

}