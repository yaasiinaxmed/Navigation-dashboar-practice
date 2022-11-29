const btnMenu = document.querySelector(".menu");
const dashboard = document.querySelector(".dashboard");
const navLists = document.querySelectorAll("ul li");

btnMenu.addEventListener("click", () => {
    dashboard.classList.toggle("active");
    return navList();
})

function navList(e) {
    navLists.forEach(navlink => {
        navlink.classList.remove("show");
    });

    event.target.classList.add("show");
}