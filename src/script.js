const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const header = document.getElementById('mainHeader');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

        // Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

        // Mobile menu
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function togglePassword() {
    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
                            
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.className = "fas fa-eye-slash text-lg";
    } else {
        password.type = "password";
        eyeIcon.className = "fas fa-eye text-lg";
    }
}

function validateForm() {
  const contact = document.getElementById("contact").value;

  if (contact.length !== 11) {
    alert("Contact number must be exactly 11 digits.");
    return;
  }

  alert("Form valid! Ready to submit.");
}

function fadeOut(e) {
    e.preventDefault();

    const link = e.currentTarget.href;

    document.body.classList.remove("loaded"); // fade out

    setTimeout(() => {
      window.location.href = link;
    }, 300); // match CSS duration
}