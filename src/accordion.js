// Accordion Action
const accordionButton = document.querySelector(".accordion-button");
const accordionItem = document.querySelector(".accordion-item");
const caret = document.querySelector(".fa-caret-down")

accordionButton.addEventListener("click", () => {
    if (accordionItem.classList.contains("active")) {
        accordionItem.classList.remove("active");
        caret.classList.remove("rotate")
    } else {
        accordionItem.classList.add("active");
        caret.classList.add("rotate")
    }
})