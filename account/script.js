// on document load

document.addEventListener("DOMContentLoaded", function() {
    // check if user has account
    if (localStorage.getItem("hasAccount")) {
        if (sessionStorage.getItem("loggedIn") === "true") {
            document.getElementById("username-display").textContent = localStorage.getItem("username");
        } else {
            window.location.href = "/account/login";
        }
    } else {
        window.location.href = "/account/signup";
    }
});