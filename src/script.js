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

const toggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
});

function toggleNotif() {
    const panel = document.getElementById("notifPanel");
    panel.classList.toggle("hidden");
}

document.addEventListener("click", function (e) {
    const panel = document.getElementById("notifPanel");
    const button = e.target.closest("button");

    if (!panel.contains(e.target) && !button) {
        panel.classList.add("hidden");
    }
});

function toggleNotif() {
    const panel = document.getElementById('notifPanel');
    const bell = document.getElementById('bellIcon');
    const bellHover = document.getElementById('bellIconHover');
    const isOpen = !panel.classList.contains('hidden');

    panel.classList.toggle('hidden');

    // Keep the active icon shown while panel is open
    if (!isOpen) {
        bell.classList.add('!hidden');
        bellHover.classList.add('!block');
    } else {
        bell.classList.remove('!hidden');
        bellHover.classList.remove('!block');
    }
}

// Close panel when clicking outside
document.addEventListener('click', function (e) {
    const panel = document.getElementById('notifPanel');
    const button = e.target.closest('button');

    if (!button && !panel.classList.contains('hidden')) {
        panel.classList.add('hidden');
        document.getElementById('bellIcon').classList.remove('!hidden');
        document.getElementById('bellIconHover').classList.remove('!block');
    }
});