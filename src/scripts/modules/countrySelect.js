import { API } from "./apiCalls";

let countrySelect = document.querySelector("#country_select");

export const places = API.getPlaces().then(places => {
    places.forEach(place => {
        console.log("places", place);
        createDropDown(place);
    })
})

const createDropDown = (place) => {
    let item = document.createElement("option");
    item.setAttribute("id", `country-${place.id}`)
    item.textContent = `${place.name}`;
    countrySelect.appendChild(item);
}