import {buildInterestDOM} from "./outputDom";

let interestsContainer = document.querySelector(".output");

export function editInterestEntry(interest) {
    var messagePrompt = prompt(`Add a review to ${interest.name}?`);
    if (messagePrompt == null || messagePrompt == "") {
        alert("cancelled edit");
    }
    else {
        let newInterestObj = {
            placeId: interest.placeId,
            name: interest.name,
            description: interest.description,
            cost: interest.cost,
            review: messagePrompt
        }
        console.log("newObj",newInterestObj)
        fetch(`http://localhost:8088/interests/${interest.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterestObj)
        }).then(response => response.json())
            .then(() => fetch("http://localhost:8088/interests")
                .then(results => results.json()))
            .then(interests => {
                interestsContainer.innerHTML = "";
                interests.forEach(interest => buildInterestDOM(interest));
            });
    }
};