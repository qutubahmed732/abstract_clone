const button = document.querySelector(".sign-in");

button.addEventListener("keydown", ()=>{
    if(event.key){
        event.preventDefault()
        alert(event.key + ' pressed');
    }
});