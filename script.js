function clearForm() {
    // Clear each input field by accessing them through their class names or tags
    document.querySelectorAll('.box').forEach(input => input.value = '');
}

// navbar function 

function navmenu() {
    // Toggle the 'show' class on the header to change its left position
    document.querySelector("#header").classList.toggle("show");
}

