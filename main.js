const sectionEl = document.querySelector(".section-hero");


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
        threshold: 0.1,
    })

check.observe(sectionEl)