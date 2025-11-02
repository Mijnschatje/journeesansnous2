// menu.js - Charge le menu hamburger automatiquement sur toutes les pages

// Fonction pour créer le menu
function createMenu() {
    // Créer le HTML du menu
    const menuHTML = `
        <!-- Bouton Hamburger -->
        <div class="hamburger-menu" onclick="toggleMenu()">
            <div class="hamburger-icon" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <!-- Fond sombre -->
        <div class="backdrop" id="backdrop" onclick="toggleMenu()"></div>

        <!-- Menu déroulant -->
        <div class="menu-overlay" id="menu">
            <nav>
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="comprendre.html">Comprendre la situation</a></li>
                    <li><a href="guide-greve.html">Comment faire grève ?</a></li>
                    <li><a href="outil-mails.html">Écrire à un syndicat</a></li>
                    <li><a href="appel.html">Lire et signer l'appel</a></li>
                    <li><a href="liste-signataires.html">Liste des signataires</a></li>
                </ul>
            </nav>
        </div>
    `;

    // Insérer le menu au début du body
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}

// Fonction pour toggle le menu
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const backdrop = document.getElementById('backdrop');
    
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    backdrop.classList.toggle('open');
}

// Initialiser le menu quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    createMenu();

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.menu-overlay a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Fermer le menu avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const menu = document.getElementById('menu');
            if (menu && menu.classList.contains('open')) {
                toggleMenu();
            }
        }
    });

    // Empêcher le scroll quand le menu est ouvert
    const observer = new MutationObserver(() => {
        const menu = document.getElementById('menu');
        if (menu && menu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    const menuElement = document.getElementById('menu');
    if (menuElement) {
        observer.observe(menuElement, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
});
