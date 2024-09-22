function fetchJSONData() {
    fetch("./moviesDB.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const movieCards = document.getElementById('movie-cards');
            // Clear existing cards if necessary
            movieCards.innerHTML = '';

            // Loop through each movie and create a card
            data.moviesDatabase.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('card-custom-padding');
                movieCard.innerHTML = `
                    <div class="card-custom">
                            <img src="${movie.image_path}" class="card-image" alt="${movie.title}">
                    </div>
                `;

                // Add click event to redirect to test.html with MovieID
                movieCard.addEventListener('click', () => {
                    window.location.href = `test.html?movieid=${movie.MovieID}`;
                });

                movieCards.appendChild(movieCard);
            });
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
        });
}

fetchJSONData();
