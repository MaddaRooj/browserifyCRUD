import { API } from "./apiCalls";

export function renderInterestEntries() {
    fetch("http://localhost:8088/interests")
        .then(interests => interests.json())
        .then(parsedInterests => {
            parsedInterests.forEach(interest => {
                console.log("interest #", interest);
                buildInterestDOM(interest);
            });
        });
};

export function buildInterestDOM(interest) {

    let interestsContainer = document.querySelector(".output");
    let interestContainerHeading = document.createElement("h1");
    interestContainerHeading.innerHTML = "Your Points of Interest";

    // build interest card container
    let interestCard = document.createElement("section");
    interestCard.setAttribute("id", `point-${interest.id}`);
    interestCard.setAttribute("class", "interest_card");

    // build header element
    let interestName = document.createElement("h2");
    interestName.textContent = interest.name;

    // build event details
    let interestDetails = document.createElement("div");
    interestDetails.innerHTML = `<p>${interest.description}</p>`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit_btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
        console.log(`Edit Interest ${interest.id}`);
        // createEventEdit(interest);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete_btn");
    deleteBtn.setAttribute("id", `deleteBtn-${interest.id}`);
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        console.log("Interest.id", interest.id);
        let result = confirm(`Are you sure you want to delete Point of Interest ${interest.id}?`);
        if (result) {
            console.log(`Deleted point of interest ${interest.id}`)
            API.deleteInterest(interest.id).then(() => {
                interestsContainer.innerHTML = "";
                renderInterestEntries();
            })
        }
    });
    interestCard.appendChild(interestName);
    interestCard.appendChild(interestDetails);
    interestCard.appendChild(editBtn);
    interestCard.appendChild(deleteBtn);
    interestsContainer.appendChild(interestCard);
};