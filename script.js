// script.js
document.getElementById('reveal-facts').addEventListener('click', function() {
    const facts = [
        "Nature enthusiast with a love for flowers and mountains.",
        "Values wisdom and enjoys learning from proverbs.",
        "Adventurous spirit eager to explore new experiences."
    ];

    const factsContainer = document.getElementById('fun-facts');
    factsContainer.innerHTML = '';

    facts.forEach(fact => {
        const factElement = document.createElement('p');
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    });
});
