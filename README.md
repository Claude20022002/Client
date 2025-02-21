# Portfolio Personnel - Documentation

## Structure du Projet

# Structure du projet :

-   Client

# Client

/mon-projet-react
│── /node_modules # Dépendances installées via npm/yarn
│── /public # Fichiers statiques accessibles par le navigateur
│ ├── index.html # Fichier principal HTML (point d'entrée)
│ ├── favicon.ico # Icône du site
│ ├── assets/ # Images, logos, etc.
│── /src # Code source de l'application
│ ├── /components # Composants réutilisables
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── Button.jsx
│ ├── /pages # Pages principales de l'application
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Contact.jsx
│ ├── /layouts # Layouts pour structurer les pages
│ ├── /hooks # Hooks personnalisés
│ │ ├── useFetch.js
│ ├── /context # Contexte global (React Context API)
│ ├── /services # Fonctions pour appeler une API (ex: axios)
│ ├── /utils # Fonctions utilitaires
│ ├── /styles # Fichiers CSS/SCSS
│ │ ├── global.css
│ │ ├── variables.scss
│ ├── App.jsx # Composant principal
│ ├── main.jsx # Point d'entrée pour React (avec ReactDOM.createRoot)
│── .gitignore # Fichiers à ignorer par Git
│── package.json # Dépendances et scripts du projet
│── vite.config.js # Configuration de Vite (si utilisé)
│── README.md # Documentation du projet

## Technologies Utilisées

-   **React** : Framework JavaScript pour l'interface utilisateur
-   **Material-UI (MUI)** : Bibliothèque de composants UI
-   **Framer Motion** : Bibliothèque d'animations
-   **EmailJS** : Service d'envoi d'emails
-   **Vite** : Outil de build et serveur de développement

## Fonctionnalités Principales

### 1. Page Projets

-   Affichage des projets en grille responsive
-   Carrousel d'images automatique au survol
-   Animations fluides avec Framer Motion
-   Modal pour voir toutes les images d'un projet
-   Liens vers les repositories GitHub
-   Affichage des technologies utilisées pour chaque projet

#### Détails techniques :

-   Utilisation de `Grid` de MUI pour la mise en page responsive
-   Animation des cartes avec Framer Motion
-   Gestion du hover pour le carrousel d'images
-   Système de modal pour l'affichage détaillé

### 2. Page Contact

-   Formulaire de contact interactif
-   Validation des champs en temps réel
-   Intégration avec EmailJS pour l'envoi de messages
-   Animations des champs et feedback visuel
-   Design moderne avec effet glassmorphism

#### Détails techniques :

-   Gestion d'état avec React Hooks
-   Intégration EmailJS avec variables d'environnement
-   Animations des inputs au focus
-   Gestion des états de chargement et des erreurs

### 3. Animations et Transitions

-   Animations d'entrée pour les éléments
-   Transitions fluides entre les états
-   Effets de hover élégants
-   Feedback visuel pour les interactions

## Configuration EmailJS

Pour configurer le système de contact :

1. Créer un compte sur EmailJS
2. Configurer un service email
3. Créer un template pour les messages
4. Définir les variables d'environnement :
    ```
    serviceID: votre_service_id
    templateID: votre_template_id
    userId: votre_user_id
    ```

## Styles et Design

### Thème Principal

-   Palette de couleurs :
    -   Principal : #2196F3 (bleu)
    -   Secondaire : #21CBF3 (bleu clair)
    -   Fond : Blanc avec effets de transparence
-   Typographie moderne et lisible
-   Effets de glassmorphism
-   Ombres douces pour la profondeur

### Responsive Design

-   Breakpoints adaptés pour mobile, tablet et desktop
-   Grille flexible pour les projets
-   Adaptation des tailles et espacements
-   Navigation optimisée pour mobile

## Installation et Démarrage

1. Cloner le repository :

```bash
git clone [url-du-repo]
```

2. Installer les dépendances :

```bash
cd portfolio/client
npm install
```

3. Configurer les variables d'environnement :

-   Créer un fichier `.env` à la racine du projet
-   Ajouter les variables EmailJS

4. Démarrer le projet :

```bash
npm run dev
```

## Dépendances Principales

```json
{
    "@mui/material": "^5.x.x",
    "@emotion/react": "^11.x.x",
    "@emotion/styled": "^11.x.x",
    "framer-motion": "^10.x.x",
    "emailjs-com": "^3.x.x"
}
```

## Contribution

1. Fork le projet
2. Créer une branche pour la fonctionnalité
3. Commit les changements
4. Push vers la branche
5. Ouvrir une Pull Request

## Licence

MIT License - voir le fichier LICENSE pour plus de détails.
