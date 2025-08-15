// تسجيل حساب جديد
function registerUser(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfully!");
    window.location.href = "login.html";
}

// تسجيل الدخول
function loginUser(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password!");
    }
}

// التحقق من تسجيل الدخول في الصفحة الرئيسية
function checkLogin() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn !== "true") {
        window.location.href = "login.html";
    }
}

// تسجيل الخروج
function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
