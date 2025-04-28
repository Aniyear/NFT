const allLangs = ["ru", "en", "kk"];
const currentPathName = window.location.pathname;
let currentLang = localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

const NFT_description_page = {
    "nav_item_profile_login": {
        ru: "Авторизация",
        en: "Login",
        kk: "Авторизация",
    },
    "nav_item_profile_link": {
        ru: "Профиль",
        en: "Profile",
        kk: "Профиль",
    },
    "nav_item_profile_liked": {
        ru: "Понравилось",
        en: "Liked",
        kk: "Ұнады",
    },
    "nav_item_profile_owned": {
        ru: "Купленный",
        en: "Purchased",
        kk: "Сатып алынған",
    },
    "nft_description_page": {
        ru: "NFT описание",
        en: "NFT description",
        kk: "NFT сипаттамасы",
    },
    "nft_description_container_title": {
        ru: "NFT название",
        en: "NFT name",
        kk: "NFT атауы",
    },
    "nft_description_container_author": {
        ru: "Джеймс Хендерсон",
        en: "James Henderson",
        kk: "Джеймс Хендерсон",
    },
    "nft_description_container_description": {
        ru: "Этот NFT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        en: "This NFT is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        kk: "Бұл NFT lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    "nft_description_container_order_btn": {
        ru: "Сделать ставку",
        en: "Place a bid",
        kk: "Өтінім беру",
    },
};

function checkPagePathName() {
    switch (currentPathName) {
        case "/navbar.html":
            currentTexts = NFT_description_page;
            break;
        // Add other cases as necessary
        default:
            currentTexts = NFT_description_page;
            break;
    }
}
checkPagePathName();

function changeLang() {
    for (const key in currentTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = currentTexts[key][currentLang];
        }
    }
}
changeLang();

document.querySelectorAll(".dropdown-menu a").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        currentLang = event.target.getAttribute("data-btn");
        localStorage.setItem("language", currentLang);
        changeLang();
    });
});

function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    return allLangs.includes(navLang) ? navLang : null;
}
