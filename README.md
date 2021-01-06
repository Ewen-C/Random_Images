# Random_Images

Cette page affiche une image de fond aléatoire parmi une sélection, lors du chargement de la page ou quand le bouton est sélectionné.
Le bouton en haut à gauche masque les autres éléments pour pouvoir regarder seulement l'image de fond.
Les informations à propos des images sont au format JSON pour pouvoir les afficher si elles proviennent d'un serveur.
Les images sont dans un dossier /images, au niveau du code, contenant 15 images numérotées de 0 à 14.

Vu que le nombre d'images pouvant être affichées est donné par le JSON et n'est pas fixe, si le nombre d'image change et que le JSON est mis à jour, toutes les images pourront être affichées, sans erreur.

## Améliorations possibles de la page :

- Créer une page Gallerie affichant les images en miniature, qui s'agrandissent au clic (propriété onclick="" ?)
- Créer des transitions entre les images (balayage, fondu)
