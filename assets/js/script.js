const API_KEY = "fmMOi8zwMATJsFLfKwH11lkh5G8";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_KEY}?api_key=${API_KEY}`;
}