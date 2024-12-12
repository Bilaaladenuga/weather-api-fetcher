// Select elements
const fetchButton = document.getElementById('fetchButton');
const dataContainer = document.getElementById('dataContainer');

// API Key and Endpoint
const API_KEY = "8f5dcdceb4d147ba82e243fe601c49ff";
const API_URL = `https://newsapi.org/v2/everything?q=ai&apiKey=${API_KEY}`;


// Fetch News Data
async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Clear previous content
        dataContainer.innerHTML = "";

        // Display news articles
        data.articles.forEach((article) => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('news-item');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            dataContainer.appendChild(articleElement);
        });
    } catch (error) {
        dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Add Event Listener to Button
fetchButton.addEventListener('click', fetchNews);
