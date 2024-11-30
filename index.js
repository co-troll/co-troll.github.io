const hamBtn = document.querySelector("#ham");
const menu = document.querySelector("#menu");

hamBtn.addEventListener("click", (e) => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
})

const htmlTab = document.querySelector("#htmlTab");
const cssTab = document.querySelector("#cssTab");
const jsTab = document.querySelector("#jsTab");
const tsTab = document.querySelector("#tsTab");
const nodejsTab = document.querySelector("#nodejsTab");
const reactTab = document.querySelector("#reactTab");
const mysqlTab = document.querySelector("#mysqlTab");

const skillTabs = [htmlTab, cssTab, jsTab, tsTab, nodejsTab, reactTab, mysqlTab];

skillTabs.forEach((tabEl) => {
    tabEl.addEventListener("click", (e) => {
        const check = tabEl.classList.toggle("select");
        tabEl.querySelector(".skilldown").style.display = check ? "none" : "block";
        tabEl.querySelector(".skillup").style.display = check ? "block" : "none";
        tabEl.querySelector(".skilldes").style.display = check ? "block" : "none";
        skillTabs.forEach((El) => {
            if (El === tabEl) return
            El.classList.toggle("select", false);
            El.querySelector(".skilldown").style.display = "block";
            El.querySelector(".skillup").style.display = "none";
            El.querySelector(".skilldes").style.display = "none";
        })
    })
})

const mainMenu = document.querySelector("#mainMenu");
const aboutmeMenu = document.querySelector("#aboutmeMenu");
const skillMenu = document.querySelector("#skillMenu");
const projectMenu = document.querySelector("#projectMenu");

const menus = [mainMenu, aboutmeMenu, skillMenu, projectMenu];

const otherTitle = document.querySelector("#otherTitle");

menus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        menu.classList.toggle("select", true);
        menu.style.color = "black";
        otherTitle.innerHTML = e.target.innerHTML;
        document.querySelector(`#${menu.id.split("M")[0]}`).style.display = "flex";
        menus.forEach((El) => {
            if (El === menu) return
            El.classList.toggle("select", false);
            El.style.color = "gray"
            document.querySelector(`#${El.id.split("M")[0]}`).style.display = "none";
        })
    })
})

const discordTab = document.querySelector("#discordTab");
const BookTab = document.querySelector("#BookTab");
const youtubeTab = document.querySelector("#youtubeTab");
const tetrisTab = document.querySelector("#tetrisTab");
const discordProTab = document.querySelector("#discordProTab");

const projectTabs = [discordTab, BookTab, youtubeTab, tetrisTab, discordProTab];

projectTabs.forEach((tabEl) => {
    tabEl.addEventListener("click", (e) => {
        const check = tabEl.classList.toggle("select");
        tabEl.querySelector(".projectdown").style.display = check ? "none" : "block";
        tabEl.querySelector(".projectup").style.display = check ? "block" : "none";
        tabEl.querySelector(".projectdes").style.display = check ? "block" : "none";
        projectTabs.forEach((El) => {
            if (El === tabEl) return
            El.classList.toggle("select", false);
            El.querySelector(".projectdown").style.display = "block";
            El.querySelector(".projectup").style.display = "none";
            El.querySelector(".projectdes").style.display = "none";
        })
    })
})