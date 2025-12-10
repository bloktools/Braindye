// process background images

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[data-background-url]");
    for (const section of sections) {
        const imageUrl = section.getAttribute("data-background-url");
        section.style.backgroundImage = `url(${imageUrl})`;
        section.style.backgroundSize = "cover";
        section.style.backgroundPosition = "center";
    }

// inject global elements
    const body = document.body;
    body.insertAdjacentHTML("afterbegin", `
        <nav>
        <ul>
            <a href="/" class=ignore-nav><img src="/global/assets/logo-light.svg" alt="" srcset="" width="160px" height="40px"></a>
        </ul>
        <ul>
            <a href="/about"><li>About</li></a>
            <a href="/help"><li>Help</li></a>
            <a href="/dashboard" class="dashboard"><li>Dashboard</li></a>
            <a href="/pricing"><li>Pricing</li></a>
        </ul>
        <ul>
            <a href="/account"><li>Account</li></a>
        </ul>
    </nav>
    `);

    const head = document.head
    head.insertAdjacentHTML("beforeend", `
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Asta+Sans:wght@300..800&family=Funnel+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    `);

// handle get started button click

    const getStartedButton = document.getElementById("get-started-button");
    if (getStartedButton) {
        getStartedButton.addEventListener("click", function() {
            if (localStorage.getItem("hasAccount")) {
                window.location.href = "/account/login";
            } else {
                window.location.href = "/account/signup";
            };
        });
    }

});
