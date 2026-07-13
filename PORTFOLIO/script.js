document.addEventListener("DOMContentLoaded", function(){


// ===============================
// Smooth Scrolling
// ===============================

const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link => {

    link.addEventListener("click", function(e){

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




// ===============================
// Scroll Animation Cards
// ===============================

const cards = document.querySelectorAll(
".project-card, .card, .contact-card, .service-card, .timeline-box, .why-card"
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



cards.forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});




// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");


if(footer){

const year = new Date().getFullYear();

footer.innerHTML =
`© ${year} Aqsa Bibi | Frontend Developer | All Rights Reserved`;

}





// ===============================
// Button Animation
// ===============================

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button=>{


button.addEventListener("click",function(){


this.style.transform="scale(0.95)";


setTimeout(()=>{


this.style.transform="scale(1)";


},150);



});


});






// ===============================
// Active Navbar
// ===============================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop = section.offsetTop - 150;


if(scrollY >= sectionTop){

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






// ===============================
// Animated Counter
// ===============================


const counters = document.querySelectorAll(".stat-box h2");


const counterObserver = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const counter = entry.target;


const target = Number(counter.innerText);


let count = 0;


const update = ()=>{


if(count < target){


count++;


counter.innerText = count + "+";


setTimeout(update,40);


}

else{


counter.innerText = target + "+";

}


};


update();


counterObserver.unobserve(counter);


}


});


},{
threshold:0.5
});



counters.forEach(counter=>{

counterObserver.observe(counter);

});



});