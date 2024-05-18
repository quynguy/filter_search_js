// elements

const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const searchBox = document.getElementById("search-container");

// console.log("Elements selected:", { nav, searchIcon, navOpen, navClose });
// console.log("Search box:", searchBox);


// search icon click event 
searchIcon.addEventListener("click", () => {
    // console.log("Search icon clicked");
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    searchBox.classList.toggle("openSearch");
    // console.log("Current nav classes:", nav.classList);
    if (nav.classList.contains("openSearch")) {
        // console.log("Switching to close icon");
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    // console.log("Switching to search icon");
    searchIcon.classList.replace("uil-times", "uil-search");
});

// menu open button click event
navOpen.addEventListener("click", () => {
    // console.log("Nav open button clicked");
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
    // console.log("Current nav classes:", nav.classList);
});

// menu close button click event
navClose.addEventListener("click", () => {
    // console.log("Nav close button clicked");
    nav.classList.remove("openNav");
    // console.log("Current nav classes:", nav.classList);
});



let drugs = {
    data: [
        {
            productName: "Abilify ",
            dosageForm: "Tablets/Capsules",
            price: "100",
            quantity: "500",
            image: "images/abilify.jpg",
        },
        {
            productName: "Aimovig ",
            dosageForm: "Injectables/Injections",
            price: "1000",
            quantity: "1",
            image: "images/aimovig.jpg",
        },
        {
            productName: "Amoxicillin Oral Powder",
            dosageForm: "Syrups/Liquids",
            price: "75",
            quantity: "1",
            image: "images/amoxicillinRecon.jpg",
        },
        {
            productName: "Tobramycin Ophthalmic Solution",
            dosageForm: "Drops",
            price: "175",
            quantity: "1",
            image: "images/tobramycin.jpg",
        },
    ],
};

for (let i of drugs.data) {
    //card
    let card = document.createElement("div");
    card.classList.add("card", i.dosageForm, "hide");
    // image container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // card image
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // product container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    // product price
    let price = document.createElement("h6");
    price.innerText = "$" +i.price;
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
};

function filterDrugs(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });

    // select all drug cards
    let elements = document.querySelectorAll(".card");
    // loop through all cards 
    elements.forEach((element => {
        // display all cards on "all" button click
        if (value == "all") {
            element.classList.remove("hide");
        }
        else {
            // check if element contains drug category class
            if(element.classList.contains(value)){
                // display element based on category
                element.classList.remove("hide");
            }
            else{
                // hide other elements 
                element.classList.add("hide");
            }
        }
    }));
};


// search functionality
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    // console.log(searchInput);

    // loop through all elements 
    elements.forEach((element, index) => {
        // check if text includes search value
        if(element.innerText.includes(searchInput.toUpperCase())) {
            // display matching card
            cards[index].classList.remove("hide");
        }
        else {
            // hide other elements 
            cards[index].classList.add("hide");
        }
    })
});

// display all drugs by default
window.onload = () => {
    filterDrugs("all");
};




