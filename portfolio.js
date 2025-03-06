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