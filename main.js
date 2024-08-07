const sectionEl = document.querySelector(".section-hero");
const navButton = document.getElementById("nav-btn");
const navLinks = document.querySelectorAll("a:link");
const header = document.querySelector(".header")

// Add click event to the menu button

navButton.addEventListener("click", () => {
    document.body.classList.toggle("open-nav");
    document.body.classList.toggle("overlay")
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (link.classList.contains("nav__link")) {
            document.body.classList.toggle("open-nav")
            document.body.classList.toggle("overlay")

        }
    })
})




const check = new IntersectionObserver(
    (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
            document.body.classList.add("sticky")
        } else {
            document.body.classList.remove("sticky")
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    })

check.observe(sectionEl)