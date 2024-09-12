// Navbar hide/show on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px"; // Scroll Down - hide
    } else {
        navbar.style.top = "0"; // Scroll Up - show
    }
    lastScrollTop = scrollTop;
});

// Play/Stop Background Music
const playBtn = document.getElementById("play-btn");
const music = document.getElementById("background-music");

playBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        playBtn.textContent = "Stop";
    } else {
        music.pause();
        playBtn.textContent = "Play";
    }
});

// Toggle article content on title click
const articleTitles = document.querySelectorAll(".article-title");

articleTitles.forEach(title => {
    title.addEventListener("click", function () {
        const articleBox = this.parentElement;
        const content = this.nextElementSibling;
        
        if (articleBox.classList.contains("opened")) {
            articleBox.classList.remove("opened");
            content.style.display = "none";
        } else {
            articleBox.classList.add("opened");
            content.style.display = "block";
        }
    });
});


function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// Call the function to update the year when the page loads
updateYear();
