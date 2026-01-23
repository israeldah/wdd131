
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = "Last modification: " + document.lastModified;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
