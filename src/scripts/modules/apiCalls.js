const baseUrl = "http://localhost:8088";

export const API = {
    getPlaces: function () {
        return fetch(`${baseUrl}/places`).then(results => results.json());
    },
    getOnePlace: function (id) {
        return fetch(`${baseUrl}/places/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },
    saveNewPlace: function (newPlaceObject) {
        return fetch(`${baseUrl}/places`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlaceObject)
        }).then(response => response.json());
    },
    deletePlace: function (placeId) {
        return fetch(`${baseUrl}/places/${placeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },
    editPlace: function (placeId, placeObject) {
        return fetch(`${baseUrl}/places/${placeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(placeObject)
        }).then(response => response.json());
    },
    getInterests: function () {
        return fetch(`${baseUrl}/interests`).then(results => results.json());
    },
    getOneInterest: function (id) {
        return fetch(`${baseUrl}/interests/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },
    saveNewInterest: function (newInterestObject) {
        return fetch(`${baseUrl}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterestObject)
        }).then(response => response.json());
    },
    deleteInterest: function (interestId) {
        return fetch(`${baseUrl}/interests/${interestId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    },
    editInterest: function (interestId, interestObject) {
        return fetch(`${baseUrl}/interests/${interestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestObject)
        }).then(response => response.json());
    }
};