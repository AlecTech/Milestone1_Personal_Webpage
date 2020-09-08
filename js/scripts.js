// alert('Hello!');
//code for fade-in avatar image is borrowed from this site
// https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/#:~:text=The%20fade%20effect%20is%20described,as%20the%20fade%2Din%20effect.
var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; // call function on page load

function fadeIn() 
{ 
    setInterval(show, 200); // show function is called every 200 ms
} 
function show() 
{ 
    var body = document.getElementById("avatar"); 
    opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity")); 
    if (opacity < 1) 
    { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
}
//collapse Certificates section. Logic borrowed from https://www.youtube.com/watch?v=jXTfoKkPtYY
// explained by Dom. 
document.querySelectorAll('button.expand').forEach(button => {
    button.addEventListener('click', () => {
        const certListConstent = button.nextElementSibling;

        button.classList.toggle('expand--active');

        if(button.classList.contains('expand--active')){
            certListConstent.style.maxHeight = certListConstent.scrollHeight + 'px';
        } else{
            certListConstent.style.maxHeight = 0;
        }
    });
});
//================Contact form code=============
// Setup variables for the validation logic
const form = document.querySelector('.validForm')
//const submitBtn = form.querySelector('.submitBtn') 
const fullName = form.querySelector('.fullName')
const email = form.querySelector('.email') 
const subject = form.querySelector('.subject')
const message = form.querySelector('.message')
const fields = form.querySelectorAll('.field')

const errorMessage = document.getElementById("errorMessage"); // string of errors inactive
//EventListener on submit
form.addEventListener('submit', function (event) {
    event.preventDefault()
    //declare variable for error flags (boolean) initialy set to false
    let errorIndicator = new Boolean (false);
    errorIndicator = false;
    //find all errors generated from DOM if any
    let errors = form.querySelectorAll('.error')
    //for loop to clear all corrected warning messages from the screen after submit
    for (var i = 0; i < errors.length; i++) 
    {
      errors[i].remove()
      errorIndicator = false;//reset errorIndicator flag to false
    }
    //for loop to find all empty fields and print the warning message before the field
    for (var i = 0; i < fields.length; i++) 
    {   
        if (!fields[i].value) //boolean if some fields are empty 
        {   //if field is empty its considered to be an error so flag is set to true
            errorIndicator = true;
            //console.log('field is blank', fields[i])
            let error = document.createElement('div')//generate div element to place warning message 
            error.className='error' //assign class to the div element 
            error.style.color = 'red' //css needs to relocate
            error.innerHTML = 'Cannot be blank' // input text inside
            form[i].parentElement.insertBefore(error, fields[i]) // attach message to the current field
        }
    }
      //Check Messages for invalid words, so create an Array full of bad words
      const badWords = ["feldercarb", "frack", "skinjob", "vulgacarb", "bad"];
      //for of loop to cycle througt 5 words
    for (word of badWords) // word with have new bad word each iteration
    { //check if bad word is present inside user's message 
        if (message.value.includes(word)) // message.value.match(felbercarb/frack) didn't work for some reason
        {   // if invalid word is indicated then print another warning message above textarea
            errorIndicator = true;
            let error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.innerHTML = 'You entered an invalid word'
            message.parentElement.insertBefore(error, message)
        }
    }
    //utilise the same logic to look for dot inside email
    var symbol = ["."];
    for (dot of symbol) // will loop only once
    { //check if dot is present inside user's email 
        if (!email.value.includes(dot)) 
        {   // if dot word is not (!) present then print another warning message above email input
            errorIndicator = true;
            let error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red' 
            error.innerHTML = 'Email should contain dot'
            email.parentElement.insertBefore(error, email)
        }
    }
   // if no errors found then redirect submitted form to mailto client
    if (!errorIndicator)
    {   //hard code your email for auto fill when mailto is called
        const mail = "eremeevoleg@gmail.com"
        window.location.href = `mailto:${mail}?subject=${subject.value}&Body=${message.value}`;
    }
  });