const text = "Welcome to my resume website! Here you'll find my projects, skills, and contact information.";
let i = 0;
const speed = 50; // Speed of typing in milliseconds

function typeWriter() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typing effect on page load
window.onload = typeWriter;