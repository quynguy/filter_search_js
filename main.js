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


// display all drugs by default
window.onload = () => {
    filterDrugs("all");
};
