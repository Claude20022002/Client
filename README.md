# Structure du projet :

-   Client
-   Server
-   Shared

# Client

/mon-projet-react
│── /node_modules # Dépendances installées via npm/yarn
│── /public # Fichiers statiques accessibles par le navigateur
│ ├── index.html # Fichier principal HTML (point d’entrée)
│ ├── favicon.ico # Icône du site
│ ├── assets/ # Images, logos, etc.
│── /src # Code source de l’application
│ ├── /components # Composants réutilisables
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── Button.jsx
│ ├── /pages # Pages principales de l’application
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
│ ├── main.jsx # Point d’entrée pour React (avec ReactDOM.createRoot)
│── .gitignore # Fichiers à ignorer par Git
│── package.json # Dépendances et scripts du projet
│── vite.config.js # Configuration de Vite (si utilisé)
│── README.md # Documentation du projet
