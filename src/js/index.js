/* Here goes your JS code */

const showButton = document.getElementById('show-popup-form');
const closeButton = document.getElementById('close-popup-form');
const popup = document.querySelector('.popup');
const submitButton = document.querySelector('.submit');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const checkTerms = document.getElementById('agreement');





const submitForm = (event) => {
    event.preventDefault();
    if(mail.value.length == 0 || password.value.length == 0 || checkTerms.checked == false) {
        alert("Please fill out all required fields.")
    } else { //all fields completed
        setTimeout(() => {
        popup.style.display = "none";
        showButton.innerText = "Thank you!";
        showButton.disabled = true;
        showButton.style.color = "black";
         }, 3000);
        
        }
}



showButton.addEventListener('click', () => {
    popup.style.display = "flex";
})

closeButton.addEventListener('click', () => {
    popup.style.display = "none";
})

submitButton.addEventListener('click', submitForm);