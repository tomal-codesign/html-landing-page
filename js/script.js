// ---------------- Header Scroll Effect ----------------
const header = document.querySelector('.header-part');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ---------------- Initialize AOS (only once) ----------------
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    offset: 100,
    once: false
});

// ---------------- Banner Counter ----------------
(function () {
    const counters = document.querySelectorAll(".counter");
    const counterSection = document.getElementById("counterSection");
    let started = false;

    function animateCounter(counter) {
        let start = 0;
        const end = parseInt(counter.getAttribute("data-target"));
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start++;
            counter.textContent = start;
            if (start >= end) clearInterval(timer);
        }, stepTime);
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) {
            counters.forEach(counter => animateCounter(counter));
            started = true;
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    if (counterSection) observer.observe(counterSection);
})();

// ---------------- Skills Counter ----------------
(function () {
    const counters = document.querySelectorAll(".counter-skill");
    const skillsCounter = document.getElementById("skillsCounter");
    let started = false;

    function animateCounter(counter) {
        let start = 0;
        const end = parseInt(counter.getAttribute("data-target"));
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start++;
            counter.textContent = start;
            if (start >= end) clearInterval(timer);
        }, stepTime);
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) {
            counters.forEach(counter => animateCounter(counter));
            started = true;
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    if (skillsCounter) observer.observe(skillsCounter);
})();

// ---------------- Services Swiper ----------------
var servicesSwiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 3 }
    }
});

// ---------------- Portfolio LightGallery ----------------
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    selector: 'a'
});

// ---------------- Testimonial Swiper ----------------
var testimonialSwiper = new Swiper('.mySwiper2', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
    },
});

// ---------------- Contact Form ----------------
// Form Validation
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input, textarea');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    inputs.forEach(input => {
        const errorEl = input.parentElement.nextElementSibling;
        let error = "";

        switch (input.name) {
            case "name":
                if (!input.value.trim()) error = "Please Enter Your Name";
                break;
            case "email":
                if (!input.value.trim()) error = "Please Enter Your Email";
                else if (!/\S+@\S+\.\S+/.test(input.value)) error = "Invalid Email Format";
                break;
            case "subject":
                if (!input.value.trim()) error = "Please Enter Subject";
                break;
            case "message":
                if (!input.value.trim()) error = "Please Enter Your Message";
                break;
        }

        if (error) {
            errorEl.textContent = error;
            input.classList.add('error-input');
            valid = false;
        } else {
            errorEl.textContent = "";
            input.classList.remove('error-input');
        }
    });

    if (valid) {
        const formValues = {};
        inputs.forEach(input => {
            formValues[input.name] = input.value;
        });
        console.log(formValues)
        alert("Form Submitted Successfully!");
        form.reset();
    }
});

// ---------------- Footer Part ----------------
document.getElementById('currentYear').textContent = new Date().getFullYear();