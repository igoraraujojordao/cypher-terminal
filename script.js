// script.js

// Sample data for featured symbols
const featuredSymbols = [
    {
        name: "The Eye of Providence",
        image: "images/eye-of-providence.jpg",
        description: "A symbol representing divine providence."
    },
    {
        name: "Ouroboros",
        image: "images/ouroboros.jpg",
        description: "An ancient symbol depicting a serpent eating its own tail."
    },
    // Add more symbols as needed
];

// Function to display featured symbols
function displayFeaturedSymbols() {
    const container = document.getElementById('featured-symbols');
    featuredSymbols.forEach(symbol => {
        const card = document.createElement('div');
        card.className = 'symbol-card';

        const img = document.createElement('img');
        img.src = symbol.image;
        img.alt = symbol.name;

        const name = document.createElement('h3');
        name.textContent = symbol.name;

        const desc = document.createElement('p');
        desc.textContent = symbol.description;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);

        container.appendChild(card);
    });
}

// Call the function on page load
window.onload = function() {
    displayFeaturedSymbols();
};



// Sample data for all symbols
const allSymbols = [
    // Include featured symbols and more
    ...featuredSymbols,
    {
        name: "Ankh",
        image: "images/ankh.jpg",
        description: "An ancient Egyptian hieroglyphic symbol representing life."
    },
    // Add more symbols as needed
];

// Function to display all symbols
function displayAllSymbols(symbols) {
    const container = document.getElementById('symbol-library');
    container.innerHTML = ''; // Clear previous content
    symbols.forEach(symbol => {
        const card = document.createElement('div');
        card.className = 'symbol-card';

        const img = document.createElement('img');
        img.src = symbol.image;
        img.alt = symbol.name;

        const name = document.createElement('h3');
        name.textContent = symbol.name;

        const desc = document.createElement('p');
        desc.textContent = symbol.description;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);

        container.appendChild(card);
    });
}

// Search functionality
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredSymbols = allSymbols.filter(symbol =>
            symbol.name.toLowerCase().includes(query)
        );
        displayAllSymbols(filteredSymbols);
    });
}

// Initialize symbol library on page load
if (window.location.pathname.includes('symbol-library.html')) {
    window.onload = function() {
        displayAllSymbols(allSymbols);
    };
}


// Sample data for symbol locations
const symbolLocations = [
    {
        name: "Pyramids of Giza",
        symbol: "Ankh",
        coordinates: [29.9792, 31.1342],
        description: "The Ankh symbol is prevalent in ancient Egyptian sites."
    },
    {
        name: "All-Seeing Eye Mural",
        symbol: "Eye of Providence",
        coordinates: [40.7128, -74.0060],
        description: "A mural in New York City featuring the Eye of Providence."
    },
    // Add more locations as needed
];

// Function to initialize the map
function initializeMap() {
    const map = L.map('map').setView([20, 0], 2); // Centered world view

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add markers
    symbolLocations.forEach(location => {
        const marker = L.marker(location.coordinates).addTo(map);
        marker.bindPopup(`<b>${location.name}</b><br>${location.symbol}<br>${location.description}`);
    });
}

// Initialize map on page load
if (window.location.pathname.includes('map.html')) {
    window.onload = function() {
        initializeMap();
    };
}


// Chatbot functionality
if (window.location.pathname.includes('chat.html')) {
    window.onload = function() {
        const chatContainer = document.getElementById('chat-container');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');

        sendBtn.addEventListener('click', function() {
            const userInput = chatInput.value.trim();
            if (userInput !== '') {
                displayMessage(userInput, 'user');
                chatInput.value = '';
                // Send userInput to LLM backend and get response
                getLLMResponse(userInput);
            }
        });

        // Handle Enter key
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });

        function displayMessage(message, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${sender}`;
            messageDiv.textContent = message;
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function getLLMResponse(message) {
            // Placeholder for LLM API call
            displayMessage("Analyzing...", 'bot');

            // Simulate API call with a timeout
            setTimeout(function() {
                // Replace this with actual API response
                const botResponse = "This is a simulated response from Third Eye AI.";
                displayMessage(botResponse, 'bot');
            }, 1000);
        }
    };
}
