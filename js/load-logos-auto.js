// load-logos-auto.js - Charge automatiquement tous les logos via API PHP

async function loadLogosFromAPI() {
  const grid = document.querySelector('.logos-grid');
  
  if (!grid) {
    console.error('Élément .logos-grid introuvable');
    return;
  }
  
  try {
    // Appeler l'API PHP pour récupérer la liste des logos
    const response = await fetch('get-logos.php');
    
    if (!response.ok) {
      throw new Error('Erreur lors du chargement des logos');
    }
    
    const logos = await response.json();
    
    // Effacer le contenu existant
    grid.innerHTML = '';
    
    // Créer les cartes pour chaque logo
    logos.forEach(logo => {
      const figure = document.createElement('figure');
      figure.className = 'logo-card';
      
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = logo.path;
      img.alt = logo.alt;
      
      // Animation d'apparition au scroll
      img.onload = () => {
        figure.style.opacity = '0';
        figure.style.transform = 'translateY(20px)';
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              figure.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              figure.style.opacity = '1';
              figure.style.transform = 'translateY(0)';
              observer.unobserve(figure);
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(figure);
      };
      
      // Gestion d'erreur si l'image ne charge pas
      img.onerror = () => {
        console.warn(`Impossible de charger : ${logo.file}`);
        figure.remove();
      };
      
      figure.appendChild(img);
      grid.appendChild(figure);
    });
    
    // Afficher le nombre de logos chargés
    console.log(`✅ ${logos.length} logos chargés avec succès`);
    
  } catch (error) {
    console.error('Erreur:', error);
    grid.innerHTML = '<p style="text-align:center;color:#ee4943;padding:40px;">Impossible de charger les logos. Veuillez réessayer.</p>';
  }
}

// Charger les logos au chargement de la page
document.addEventListener('DOMContentLoaded', loadLogosFromAPI);
