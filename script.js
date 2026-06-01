const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

/* Menu Toggle */

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if(navMenu.classList.contains("active")){
        icon.classList.replace("fa-bars","fa-times");
    }else{
        icon.classList.replace("fa-times","fa-bars");
    }

});

/* Mobile Dropdown */

document.querySelectorAll(".dropdown > a").forEach(link => {

    link.addEventListener("click", function(e){

        if(window.innerWidth <= 992){

            const currentDropdown = this.closest(".dropdown");

            // Dropdown close unte first open cheyyi
            if(!currentDropdown.classList.contains("active")){

                e.preventDefault();

                document.querySelectorAll(".dropdown").forEach(dropdown => {

                    if(dropdown !== currentDropdown){
                        dropdown.classList.remove("active");
                    }

                });

                currentDropdown.classList.add("active");
            }

            // Active already unte link normal ga open avthundi
        }

    });

});

// AOS
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: true
});

// Swiper
const swiper = new Swiper(".heroSwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




// subit button

document.getElementById("appointmentForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let treatment=document.getElementById("treatment").value;
let doctor=document.getElementById("doctor").value;
let date=document.getElementById("date").value;

let msg=
`New Appointment Booking

Name: ${name}
Email: ${email}
Phone: ${phone}
Treatment: ${treatment}
Doctor: ${doctor}
Date: ${date}`;

window.open(
`https://wa.me/919063837117?text=${encodeURIComponent(msg)}`,
"_blank"
);

});



// trust

let started = false;

function runCounters(){

if(started) return;

const section = document.querySelector('.trust-section');

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

started = true;

/* 99% */

let count99 = 0;

let interval99 = setInterval(()=>{

count99++;

document.getElementById("counter99").innerText = count99;

if(count99 >= 99){
clearInterval(interval99);
}

},20);

/* 100+ */

let count100 = 0;

let interval100 = setInterval(()=>{

count100++;

document.getElementById("counter100").innerText = count100;

if(count100 >= 100){
clearInterval(interval100);
}

},20);

}

}

window.addEventListener("scroll",runCounters);
runCounters();








// care 


const track = document.querySelector('.feature-track');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot,index)=>{

    dot.addEventListener('click',()=>{

        dots.forEach(d=>d.classList.remove('active'));

        dot.classList.add('active');

        const cardWidth =
        document.querySelector('.feature-card').offsetWidth;

        track.style.transform =
        `translateX(-${index * cardWidth}px)`;

    });

});









document.querySelectorAll('.faq-question').forEach(question => {

    question.addEventListener('click', () => {

        const item = question.parentElement;

        document.querySelectorAll('.faq-item').forEach(faq => {
            if (faq !== item) {
                faq.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });

});















new Swiper(".reviewSwiper", {

    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});






document.querySelectorAll('.read-more-btn').forEach(button => {

    button.addEventListener('click', function(){

        const card = this.closest('.review-card');

        card.classList.toggle('active');

        if(card.classList.contains('active')){
            this.textContent = 'Read less';
        }else{
            this.textContent = 'Read more';
        }

    });

});












document.getElementById("appointmentForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let treatment = document.getElementById("treatment").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    // Validation

    if(name === ""){
        alert("Please enter your full name");
        return;
    }

    if(email === ""){
        alert("Please enter your email");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address");
        return;
    }

    if(phone === ""){
        alert("Please enter your phone number");
        return;
    }

    if(phone.length < 10){
        alert("Please enter a valid phone number");
        return;
    }

    if(treatment === ""){
        alert("Please select a treatment");
        return;
    }

    if(doctor === ""){
        alert("Please choose a doctor");
        return;
    }

    if(date === ""){
        alert("Please select a date");
        return;
    }

    // WhatsApp Message

    let message =
`*New Appointment Booking*

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

🏥 Treatment: ${treatment}

👨‍⚕️ Doctor: ${doctor}

📅 Appointment Date: ${date}`;

    let whatsappURL =
    `https://wa.me/919063837117?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});
