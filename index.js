let lengthEl = document.getElementById("length-el")
let textEl = document.getElementById("text-el")
let msgEl = document.getElementById("msg-el")
let saveEl = document.getElementById("save-el")


function check() {
    text = textEl.value
    textLength = text.length

    lengthEl.innerHTML = "length: " + textLength

    msgEl.textContent = "Including Spaces[..]"

}

function reset() {
    textEl.value = ""
    lengthEl.innerHTML = "length: " + 0
    msgEl.textContent = ""
    
}



