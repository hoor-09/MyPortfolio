var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link"); 
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");  
    }

    event.currentTarget.classList.add("active-link");  
    document.getElementById(tabname).classList.add("active-tab"); 
}

document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        once: false, // Ensures animations trigger only once
        duration: 1000, // Animation speed
        offset: 120 // Starts animations slightly before scrolling into view
    });
});

document.addEventListener("scroll", function() {
    AOS.refresh(); // Recalculates positions & triggers animations again
});


document.addEventListener("DOMContentLoaded", function () {
    let seeMoreBtn = document.getElementById("seeMoreBtn");
    let hiddenWorks = document.querySelectorAll(".work.hidden");

    // Hide elements on page load
    hiddenWorks.forEach(work => work.style.display = "none");

    seeMoreBtn.addEventListener("click", function () {
        let isHidden = hiddenWorks[0].style.display === "none";

        hiddenWorks.forEach(work => {
            if (isHidden) {
                work.style.display = "block"; // Show before animation
                setTimeout(() => work.classList.add("show"), 10); // Animate visibility
            } else {
                work.classList.remove("show"); // Start hiding animation
                setTimeout(() => work.style.display = "none", 500); // Hide after animation
            }
        });

        // Toggle button text
        seeMoreBtn.textContent = isHidden ? "See Less" : "See More";
    });
});





const scriptURL = 'https://script.google.com/macros/s/AKfycbyZOX3Nj5cYF1XBzoc93ev-S5jWkr8uTF6SJwhWS30s7KkBm92jh8Lmolml6mkpYkDElg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent succesfully!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

// Function to dynamically load external scripts
// Function to dynamically load external scripts
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

// Load Typed.js and initialize it
// Initialize Typed.js
var typed = new Typed("#typed-text", {
    strings: ["Web Developer", "AI Enthusiast", "Entrepreneur"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true, color: "#ffffff" }
    }
});

