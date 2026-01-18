// SIDEBAR LOGIC
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

// THEME LOGIC
function toggleDarkMode() {
    const isDark = document.body.hasAttribute('data-theme');
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// CALCULATOR LOGIC
const display = document.getElementById('display');
function append(char) { if(display) display.value += char; }
function clearDisplay() { if(display) display.value = ''; }
function del() { if(display) display.value = display.value.slice(0,-1); }
function calculate() {
    try { display.value = eval(display.value); }
    catch { display.value = "Error"; }
}

// INIT ON LOAD
window.onload = () => {
    // Apply Theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Load Profile Data if on profile page
    if (document.getElementById('displayName')) {
        document.getElementById('displayName').innerText = localStorage.getItem('uName') || "Bro User";
        document.getElementById('displayBio').innerText = localStorage.getItem('uBio') || "I love 3D UI!";
    }
};

// PROFILE SAVE
function saveProfile() {
    const name = document.getElementById('editName').value;
    const bio = document.getElementById('editBio').value;
    localStorage.setItem('uName', name);
    localStorage.setItem('uBio', bio);
    alert("Profile Saved Bro!");
    location.reload();
}

// Add click ripple effect to all 3D buttons
document.querySelectorAll('.btn-3d').forEach(button => {
    button.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList.add('ripple');
        this.appendChild(ripples);

        setTimeout(() => { ripples.remove() }, 600);
    });
});
