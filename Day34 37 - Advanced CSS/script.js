document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENU DE NAVIGATION MOBILE (HAMBURGER) ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger) {
        // Crée le menu burger s'il n'existe pas en CSS
        // Il est souvent plus simple de le styler en CSS (voir ci-dessus)
        // Mais voici comment le rendre fonctionnel
        const lines = document.querySelectorAll('.burger div');
        if (!lines.length) {
            burger.innerHTML = `<div></div><div></div><div></div>`;
        }

        burger.addEventListener('click', () => {
            // Affiche ou cache la navigation
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                // Style pour le menu déroulant
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.right = '0px';
                navLinks.style.top = '8vh';
                navLinks.style.backgroundColor = '#2c3e50';
                navLinks.style.flexDirection = 'column';
                navLinks.style.alignItems = 'center';
                navLinks.style.width = '50%';
            }
        });
    }


    // --- 2. VALIDATION DU FORMULAIRE DE CONTACT ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Empêche l'envoi du formulaire par défaut
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Vérification simple que les champs ne sont pas vides
            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs.');
            } else {
                alert('Merci ! Votre message a été envoyé.');
                // Ici, tu pourrais envoyer les données à un service comme Formspree
                contactForm.reset(); // Vide le formulaire
            }
        });
    }

    // --- 3. FILTRE DE PROJETS (Optionnel mais super !) ---
    // Pour cela, tu dois modifier ton HTML.
    // Ajoute des boutons de filtre :
    // <div class="filter-buttons">
    //   <button class="filter-btn" data-category="all">Tous</button>
    //   <button class="filter-btn" data-category="web">Web</button>
    //   <button class="filter-btn" data-category="design">Design</button>
    // </div>
    //
    // Et sur chaque projet, ajoute une catégorie :
    // <article class="project-item" data-category="web">...</article>

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            projects.forEach(project => {
                if (category === 'all') {
                    project.style.display = 'block'; // Affiche tous les projets
                } else if (project.dataset.category === category) {
                    project.style.display = 'block'; // Affiche ce projet
                } else {
                    project.style.display = 'none'; // Cache les autres
                }
            });
        });
    });

});