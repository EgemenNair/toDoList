// Toast DOM's
const successToastDOM = document.querySelector("#successToast")
const errorToastDOM = document.querySelector("#errorToast")

// Header DOM's
const taskDOM = document.querySelector("#task")
const addButtonDOM = document.querySelector("#addButton")

// List DOM's
const ulDOM = document.querySelector("#list")
let closeButtonDOM = document.querySelectorAll(".closeButton")

// Functions
function newElement() {
    if (taskDOM.value) {
        let liDOM = document.createElement("li")
        liDOM.setAttribute("onclick", "checkElement(this)")
        liDOM.innerHTML = `
        ${taskDOM.value}
        <button onclick="removeElement(this)" class="btn closeButton float-right ">X</button>
        `
        ulDOM.appendChild(liDOM)
        let successToast = new bootstrap.Toast(successToastDOM)
        successToast.show()
    }
    else {
        let errorToast = new bootstrap.Toast(errorToastDOM)
        errorToast.show()
    }
}

function removeElement(element) {
    element.parentNode.remove(element);
}

function checkElement(element) {
    element.classList.toggle("checked")
}




