const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', e => {
        categories.forEach(category => {
            category.classList.remove("category-active");
        })
        e.target.classList.add("category-active");
    })
})