// ── Landing page stuff (other pages) ──
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const header = document.getElementById('mainHeader');

if (btn) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

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
    document.body.classList.remove("loaded");
    setTimeout(() => { window.location.href = link; }, 300);
}

// ── Sidebar (dashboard) ──
const toggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    });
    overlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });
}

// ── Notifications ──
function toggleNotif() {
    const panel = document.getElementById('notifPanel');
    panel.classList.contains('is-open') ? closeNotif() : openNotif();
}

function openNotif() {
    const panel = document.getElementById('notifPanel');
    const bell = document.getElementById('bellIcon');
    const bellHover = document.getElementById('bellIconHover');
    panel.classList.add('is-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
    panel.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2', 'scale-95');
    bell.classList.add('!hidden');
    bellHover.classList.remove('hidden');
    bellHover.classList.add('block');
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

document.addEventListener('click', function (e) {
    const panel = document.getElementById('notifPanel');
    const notifBtn = document.getElementById('notifBtn');
    if (panel && notifBtn && panel.classList.contains('is-open') &&
        !panel.contains(e.target) && !notifBtn.contains(e.target)) {
        closeNotif();
    }
});

// ── Profile ──
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
    setTimeout(() => { profile.classList.add("pointer-events-none"); }, 300);
}

// ── Battery ──
const levelEl = document.getElementById("level");
const statusEl = document.getElementById("status");
const batteryRing = document.getElementById("battery-ring");
const warningEl = document.getElementById("battery-warning");

if (levelEl && batteryRing) {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function (battery) {
            let warningDismissed = false;

            function updateBatteryInfo() {
                const level = Math.round(battery.level * 100);
                levelEl.textContent = level + "%";

                const offset = 314 - (314 * battery.level);
                batteryRing.style.strokeDashoffset = offset;

                if (battery.charging) {
                    statusEl.textContent = "Charging ⚡";
                    warningDismissed = false;
                    warningEl.classList.add("hidden");
                    warningEl.classList.remove("flex");
                    batteryRing.style.stroke = "#FFBB02";
                } else {
                    statusEl.textContent = "Not Charging";
                    if (level <= 40) {
                        if (!warningDismissed) {
                            warningEl.classList.remove("hidden");
                            warningEl.classList.add("flex");
                        }
                        batteryRing.style.stroke = "#EF4444";
                    } else {
                        warningDismissed = false;
                        warningEl.classList.add("hidden");
                        warningEl.classList.remove("flex");
                        batteryRing.style.stroke = "#FFBB02";
                    }
                }
            }

            updateBatteryInfo();
            battery.addEventListener('levelchange', updateBatteryInfo);
            battery.addEventListener('chargingchange', updateBatteryInfo);
        });
    } else {
        levelEl.textContent = "N/A ❌";
        statusEl.textContent = "Try Chrome/Edge";
    }
}

function openSync() {
    const el = document.getElementById("sync");
    const box = document.getElementById("syncBox");
    el.classList.remove("opacity-0", "invisible", "pointer-events-none");
    el.classList.add("opacity-100", "visible");
    box.classList.remove("scale-95", "translate-y-4", "opacity-0");
    box.classList.add("scale-100", "translate-y-0", "opacity-100");
}

function closeSync() {
    const el = document.getElementById("sync");
    const box = document.getElementById("syncBox");
    box.classList.remove("scale-100", "translate-y-0", "opacity-100");
    box.classList.add("scale-95", "translate-y-4", "opacity-0");
    el.classList.remove("opacity-100", "visible");
    el.classList.add("opacity-0", "invisible");
    setTimeout(() => el.classList.add("pointer-events-none"), 300);
}

function openOutage() {
    const el = document.getElementById("popup");
    const box = document.getElementById("outageBox");
    el.classList.remove("opacity-0", "invisible", "pointer-events-none");
    el.classList.add("opacity-100", "visible");
    box.classList.remove("scale-95", "translate-y-4", "opacity-0");
    box.classList.add("scale-100", "translate-y-0", "opacity-100");
}

function closeOutage() {
    const el = document.getElementById("popup");
    const box = document.getElementById("outageBox");
    box.classList.remove("scale-100", "translate-y-0", "opacity-100");
    box.classList.add("scale-95", "translate-y-4", "opacity-0");
    el.classList.remove("opacity-100", "visible");
    el.classList.add("opacity-0", "invisible");
    setTimeout(() => el.classList.add("pointer-events-none"), 300);
}