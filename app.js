const menu_button = document.querySelector(".fa-bars");
const hidden_buttons = document.querySelector(".hidden-buttons");

if (document.body.style.width >= '1000px') {
    hidden_buttons.style.display = 'none'
}

menu_button.addEventListener("click", () => {
    if (hidden_buttons.style.display == 'none') {
        hidden_buttons.style.display = 'flex';
    } else {
        hidden_buttons.style.display = 'none';
    }
})

console.log(document.body.style)