# CICDProject

Ce projet contient une api node faite avec express, ainsi qu'une procédure d'intégration continue sous github

# Prérequis
* Node: 19
* Docker: 25.0.3

# Source

Lien du projet: https://github.com/TimotheeSvg/CICDProject

# Installation du projet
> git clone https://github.com/TimotheeSvg/CICDProject.git

> cd CICDProject

> npm install

# Lancer le projet

Deux façons de faire

## 1- Docker

Le projet est utilisable sous docker en local:

Créer une image du projet: 
> docker build -t {Nom_Image} -f Dockerfile .

Run un container du projet (run en read-only):
> docker container run --name {Nom_Container} -d -v {Nom_Volume}:/app/upload -p --readonly 3000:3000 testimage

(Si vous n'avez pas de volume)
> docker volume create {Nom_Volume}


## 2 - Node classique
(dans le dossier du projet)
> node server/index.js

Une fois une de ces étapes faites vous pouvez appeler la route http://127.0.0.1:3000 pour vérifier que tout fonctionne.

# Intégration continue

Le projet présente une procédure d'intégration continue sous github.

2 procédures sont mises en place : 

## Lint
**trigger:** à chaque push sur n'importe quelle branche

**description:**
Un lint classique (ESLint) qui passe sur tout le projet, un warning n'est pas bloquant, une erreur bloque le push.

**Pour tester en local:**

> npm run lint

(certaine règle sont fixables automatiquement en utilisant la commande avec '--fix')

## Test Image + App

**trigger:** pour tout les push/PR sur la branche main

**description:** Un test de build et run de l'image est fait ainsi qu'une requête basique vérifiant le bon start de l'api

**test en local:** En passant par le build Docker expliquer au-dessus


# Config

#### Port
Vous pouvez modifier le port dans le .env (!!Attention, si vous utilisez docker il faudra aussi changer la valeur dans la commande docker container)

# API
2 routes
- "/" => Permet de tester un retour de code 200 une fois l'api démarrer
- "/write" => Permet de tester le volume

# Volume

1 volume est présent pour le fichier upload présent dans l'app, ce dossier sert à stocker tout ce qui est upload par les utilisateurs de l'app il est donc essentiel qu'il soit persistant.

# Image

Le projet se situe dans le dossier app à la racine l'image