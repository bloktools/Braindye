// process background images

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[data-background-url]");
    for (const section of sections) {
        const imageUrl = section.getAttribute("data-background-url");
        section.style.backgroundImage = `url(${imageUrl})`;
        section.style.backgroundSize = "cover";
        section.style.backgroundPosition = "center";
    }
});