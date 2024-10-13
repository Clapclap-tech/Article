
function register() {
    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;
    
    if (username && password) {
        localStorage.setItem(username, password);
        alert("Registration successful! You can now log in.");
        document.getElementById("reg-username").value = "";
        document.getElementById("reg-password").value = "";
    } else {
        alert("Please fill out all fields.");
    }
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    var storedPassword = localStorage.getItem(username);
    
    if (storedPassword === password) {
        alert("Login successful! Welcome " + username);
        localStorage.setItem("loggedInUser", username);
        showMainContent(username);
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

function showMainContent(username) {

    document.getElementById("auth-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    
    document.getElementById("username").innerText = username;
    document.getElementById("userhandle").innerText = "@" + username;
}

window.onload = function() {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showMainContent(loggedInUser);
    } else {
        document.getElementById("auth-section").style.display = "block";
        document.getElementById("main-section").style.display = "none";
    }
}
