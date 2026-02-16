const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = "Last modification: " + document.lastModified;


const medicinalPlants = [
    {
        name: "Ginger",
        benefit: "Helps digestion and reduces inflammation"
    },
    {
        name: "Aloe Vera",
        benefit: "Treats burns and skin problems"
    },
    {
        name: "Garlic",
        benefit: "Boosts immune system and fights infections"
    },
    {
        name: "Neem",
        benefit: "Used for skin treatment and immune support"
    },
    {
        name: "Mint",
        benefit: "Relieves headaches and digestive problems"
    }
];

function displayPlants() {

    const container = document.querySelector("#plantList");

    if (!container) return;

    container.innerHTML = medicinalPlants
        .map(plant => `
            <article class="card">
                <h3>${plant.name}</h3>
                <p>${plant.benefit}</p>
            </article>
        `)
        .join("");
}

function pageVisitCounter() {

    let visits = localStorage.getItem("plantsPageVisits");

    visits = visits ? Number(visits) + 1 : 1;

    localStorage.setItem("plantsPageVisits", visits);

    console.log(`Plants page visits: ${visits}`);
}


document.addEventListener("DOMContentLoaded", () => {
    displayPlants();
    displayCurrentYear();
    displayLastModified();
    pageVisitCounter();
});
