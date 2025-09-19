document.addEventListener('DOMContentLoaded', () => {

    console.log("CineVerse script chargé !");
    const featuredTitle = document.querySelector('.hero-content h1');
    if (featuredTitle) {
        featuredTitle.textContent = "Film du Moment : La Revanche des IA";
        featuredTitle.style.color = '#1abc9c'; 
    }

    const movieGrid = document.querySelector('.new-releases .movie-grid');

    if (movieGrid) {
        const newMovieCard = document.createElement('article');
        newMovieCard.classList.add('movie-card');
        const newMovieImg = document.createElement('img');
        newMovieImg.src = "https://via.placeholder.com/300x450";
        newMovieImg.alt = "Poster for Nebula";
        const newMovieTitle = document.createElement('h3');
        newMovieTitle.textContent = "Nebula";
        const newMovieGenre = document.createElement('p');
        newMovieGenre.textContent = "Mystery";
        newMovieCard.appendChild(newMovieImg);
        newMovieCard.appendChild(newMovieTitle);
        newMovieCard.appendChild(newMovieGenre);
        movieGrid.appendChild(newMovieCard);
    }
    const subscribeButtons = document.querySelectorAll('.pricing-tier button');

    subscribeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Merci ! Votre abonnement a été pris en compte. 🎉');
        });
    });
    const addContactBtn = document.getElementById('add-contact-btn');
    const contactsContainer = document.getElementById('additional-contacts-container');

    if (addContactBtn && contactsContainer) {
        addContactBtn.addEventListener('click', () => {
            const fieldWrapper = document.createElement('div');

            const newContactInput = document.createElement('input');
            newContactInput.type = 'text';
            newContactInput.placeholder = 'Autre contact (ex: téléphone)';
            newContactInput.style.marginRight = '10px'; 

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.textContent = 'Supprimer';

            removeBtn.addEventListener('click', () => {
                fieldWrapper.remove(); 
            });
            
            fieldWrapper.appendChild(newContactInput);
            fieldWrapper.appendChild(removeBtn);
            
            contactsContainer.appendChild(fieldWrapper);
        });
    }

});