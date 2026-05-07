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
    const panel = document.getElementById('notifPanel');
    const bell = document.getElementById('bellIcon');
    const bellHover = document.getElementById('bellIconHover');
    const isOpen = panel.classList.contains('is-open');

    if (isOpen) {
        closeNotif();
    } else {
        // Show panel
        panel.classList.add('is-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
        panel.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2', 'scale-95');
        bell.classList.add('!hidden');
        bellHover.classList.remove('hidden');
        bellHover.classList.add('block');
    }
}

function closeNotif() {
    const panel = document.getElementById('notifPanel');
    const bell = document.getElementById('bellIcon');
    const bellHover = document.getElementById('bellIconHover');

    panel.classList.remove('is-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
    panel.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2', 'scale-95');
    bell.classList.remove('!hidden');
    bellHover.classList.remove('block');
    bellHover.classList.add('hidden');
}

// Close when clicking outside
document.addEventListener('click', function (e) {
    const panel = document.getElementById('notifPanel');
    const btn = document.getElementById('notifBtn');

    if (panel.classList.contains('is-open') && !panel.contains(e.target) && !btn.contains(e.target)) {
        closeNotif();
    }
});

function openProfile() {
    const profile = document.getElementById("profile");
    const box = document.getElementById("profileBox");

    profile.classList.remove("opacity-0", "invisible", "pointer-events-none");
    profile.classList.add("opacity-100", "visible");

    box.classList.remove("scale-95", "translate-y-4", "opacity-0");
    box.classList.add("scale-100", "translate-y-0", "opacity-100");
}

function closeProfile() {
    const profile = document.getElementById("profile");
    const box = document.getElementById("profileBox");

    box.classList.remove("scale-100", "translate-y-0", "opacity-100");
    box.classList.add("scale-95", "translate-y-4", "opacity-0");

    profile.classList.remove("opacity-100", "visible");
    profile.classList.add("opacity-0", "invisible");

    setTimeout(() => {
        profile.classList.add("pointer-events-none");
    }, 300);
}