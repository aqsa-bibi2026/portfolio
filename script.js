document.addEventListener("DOMContentLoaded", function(){



// ================= TYPING EFFECT =================


const text = "Frontend Web Developer";


let index = 0;


const typingElement = document.querySelector(".hero h2");



function typing(){


if(index < text.length){


typingElement.innerHTML += text.charAt(index);


index++;


setTimeout(typing,100);


}


}



if(typingElement){

typingElement.innerHTML="";

typing();

}






// ================= SMOOTH SCROLL =================


const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link=>{


link.addEventListener("click",function(e){


const target = document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});






// ================= SCROLL ANIMATION =================



const elements = document.querySelectorAll(

".project-card, .card, .service-card, .why-card, .timeline-box, .contact-card, .stat-box"

);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.2

});



elements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);


});








// ================= ACTIVE NAVBAR =================



const sections = document.querySelectorAll("section");


const navLinks = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const top = section.offsetTop - 150;



if(scrollY >= top){


current = section.getAttribute("id");


}



});



navLinks.forEach(link=>{


link.classList.remove("active");



if(link.getAttribute("href") === "#"+current){


link.classList.add("active");


}



});


});








// ================= COUNTER =================



const counters = document.querySelectorAll(".stat-box h2");



counters.forEach(counter=>{


let value = parseInt(counter.innerText);



let start = 0;



let interval = setInterval(()=>{


start++;


counter.innerText = start + "+";



if(start >= value){


clearInterval(interval);


}



},50);



});








// ================= BUTTON EFFECT =================



const buttons = document.querySelectorAll(

".btn, .btn-outline, .project-btn"

);



buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(.9)";


setTimeout(()=>{


button.style.transform="scale(1)";


},150);



});


});







// ================= FOOTER YEAR =================



const footer = document.querySelector("footer p");



if(footer){


const year = new Date().getFullYear();



footer.innerHTML =

`© ${year} Eng. Aqsa | Frontend Web Developer | All Rights Reserved`;

}



});
// ================= SUPABASE =================

const supabaseUrl = "https://obijnndneicluymtlftz.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iaWpubmRuZWljbHV5bXRsZnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMzAxNTIsImV4cCI6MjA5OTYwNjE1Mn0.UUk_QmKUVpo7N0t_18jvOkGbTPzGy9gB8VHhdxKOTs4";

const supabaseClient = supabase.createClient(
supabaseUrl,
supabaseKey
);

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const subject = document.getElementById("subject").value;

const message = document.getElementById("message").value;

const { error } = await supabaseClient

.from("contact_messages")

.insert([{

name:name,

email:email,

subject:subject,

message:message

}]);


const success = document.getElementById("successMessage");


if(error){

success.style.color="red";

success.innerHTML="Message could not be sent.";

alert(JSON.stringify(error));
console.log(error);

}

else{

success.style.color="#00ff99";

success.innerHTML="✅ Message sent successfully.";

contactForm.reset();

}

});

}