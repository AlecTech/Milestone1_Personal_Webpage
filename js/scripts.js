// alert('Hello!');
// https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/#:~:text=The%20fade%20effect%20is%20described,as%20the%20fade%2Din%20effect.
var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; 

function fadeIn() { 
    setInterval(show, 200); 
} 

function show() { 
    var body = document.getElementById("avatar"); 
    opacity = Number(window.getComputedStyle(body) 
                     .getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
}



    const validForm = document.getElementById('validForm');
    console.log(validForm);
    const fName = document.getElementById('fullName');
    console.log(fName);
    const subject = document.getElementById('subj');
    console.log(subject);
    const uEmail = document.getElementById('userEmail');
    console.log(uEmail);
    const uText = document.getElementById('userText');
    console.log(uText);
    const clickSubmit = document.querySelector('input[type="submit"]');
    console.log(clickSubmit);
    var errorMessage = document.getElementById("errorMessage");
    console.log(errorMessage);


    function validateForm() 
{
    var x = document.forms["subject"]["fName"].value;
    if (x == "") 
    {
      alert("Name must be filled out");
      return false;
    }
}

var resetErrors = function () {
    var error = document.getElementById(errorMessage)
    for (var i = 0; i < error.length ; i++) {
        error[i].remove()
    }
}
    validForm.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log('clicked');
        console.log(fName.value);
        console.log(subject.value);
        console.log(uEmail.value);
        console.log(uText.value);
        console.log(clickSubmit.value);
        console.log(errorMessage.value);
        
        // const fName = document.getElementById('fullName');
       
        // let newForm = new FormData (validForm);
        // console.log(newForm);
        
     //   while (error.length > 0)
      //  {
        let error =[];
            if (fName.value === '' || fName.value == null)
            {   
                error.push("Full Name must be entered");
               //console.log(fName.length);
           }
           
           if (subject.value === '' || subject.value == null)
           {   
               error.push("Subject field must be present");
           }
            //   const x = false;
        //    if(uEmail.contains("A") == false)
        //    {    let error =[];
        //        error.push("Not a valid Email");
        //    }
           
       
           if (error.length > 0)
           {   
               //event.preventDefault();
               errorMessage.innerText = error.join(",  ");
            }

       // }
      resetErrors()
    });
//  validForm.addEventListener('submit', (event) => 
//  {
//         event.preventDefault();
//          = "visible";
//         if (i<0) {
//             let x = .value;
//             if () {
                
//             }
//             .value = "";
//         }
//         else if () {
//             ;
//         }

//         if () {
            
//         }

//         if () {
            
//         }

//         console.log();
// });
//     /* Reset & Play Again form event listener */
//     playAgainForm.addEventListener('submit', (event) => 
//     {
//         event.preventDefault();
//         if (chancesCntr > 7 || winner == true) {
//             init();
//         }
//         else {
//             if () {
//                 init();
//             }
//         }
//     });



// form.addEventListener('submit', (event) => 
//     {   //check every stap at the time to make sure that input data is still there
//         event.preventDefault();
//         console.log(event);
//         // method FormData found on website 
//         //https://javascript.info/formdata#:~:text=let%20formData%20%3D%20new%20FormData(%5B,%3A%20multipart%2Fform%2Ddata%20.
//         let newPost = new FormData (form);
//         console.log(newPost.get('title'));
//         console.log(newPost.get('content'));

//         let a = newPost.get('title');
//         console.log(a);
//         let b = newPost.get('content');
//         console.log(b);
//             // check if input is not empty                                            
//         if ( a.length > 0 && b.length > 0)           
//         {      
//             // print out values that are entered by the user at the bottom of the page
//             let data = new Article (a,b);
//             data.output();
//             const time = new Date().toLocaleString('en-US', { timeZone: 'UTC' })      
//             console.log(time);                  
//         }
//         else
//         {
//             alert("Warrning this is am empty input!");
//         }    
//     })
//     // print out articles at refresh that were collcted by (for of - loop) on line 83
// for (const article of articles)
// {
//     article.output();
// }