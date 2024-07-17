# Projet simple Back NodeJS SQL Sequelize

Ceci est un projet simplifié de gestionnaire de contact avec le Back-End en NodeJS et BDD SQL avec Sequelize pour ajouter, supprimer, récupérer, modifier des contact.

--------
## 1. Installer dépendances

Exécuter dans votre terminal :

```bash
npm install

```

--------
## 2. Installer BDD SQL et créer BDD

Installer une Base de Données SQL en local avec par exemple WAMP ou XAMP.
Se connecter à l'outil PhpMyAdmin et créer la base de donnée avec pour nom `contact`.

--------
## 3. Modifier informations connexion BDD

Modifier le fichier `models/index.js` pour entrer les données BDD_NAME, BDD_HOST, BDD_USERNAME et BDD_PASSWORD.

--------
## 4. Lancer le serveur

Exécuter dans votre terminal :

```bash
nodemon server.js

```

--------
## 5. Tester les routes

Tester les routes pour ajouter, récupérer, modifier, supprimer un contact en les tapant sur un outil comme postman.

```
http://localhost/api/contact/add
http://localhost/api/contact/all
http://localhost/api/contact/update
http://localhost/api/contact/delete
```