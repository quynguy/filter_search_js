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
    let card = document.createElement("div");
    card.classList.add("card","i.dosageForm");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("products").appendChild(card);
}
