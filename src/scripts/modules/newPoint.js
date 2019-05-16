import { renderInterestEntries } from "./outputDom";

let submitBtn = document.querySelector("#submit");
let interestsContainer = document.querySelector(".output");

export const submit = submitBtn.addEventListener("click", function () {
    let interestName = document.querySelector("#interestNameInput");
    let interestCost = document.querySelector("#cost");
    let interestDesc = document.querySelector("#description");
    let interestPlace = document.querySelector("#country_select");

    const newInterestObj = {
        placeId: parseInt(interestPlace.value.split("-")[1]),
        name: interestName.value,
        description: interestDesc.value,
        cost: interestCost.value,
        review: ""
    };
    interestName.value = "";
    interestCost.value = "";
    interestDesc.value = "";

    fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestObj)
    }).then(response => response.json())
        .then(() => {
            interestsContainer.innerHTML = "";
            renderInterestEntries();
        })
});