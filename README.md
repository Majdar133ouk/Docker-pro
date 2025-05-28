# Gestion des Utilisateurs - Majda RAZZOUK

Ce projet est une **application fullstack** de gestion des utilisateurs développée avec **React** pour le frontend, **Express.js** pour le backend, et **MongoDB** comme base de données. Il comprend également la **dockerisation**, les **tests avec Mocha** et **l'intégration continue** via **GitHub Actions**.

---

## 🗂 Structure du Projet

backend
|-- app.js # Serveur Express
|-- Dockerfile # Docker config backend
|-- models/User.js # Modèle utilisateur
|-- tests/ # Tests avec Mocha
|-- package.json

/frontend
|-- App.js # Interface React
|-- Dockerfile # Docker config frontend
|-- package.json
/.github/workflows/ci.yml # CI avec GitHub Actions




## ✅ Prérequis

- Node.js >= 18
- npm ou yarn
- Docker & Docker Compose

## ⚙️ Installation

### 🔙 Backend

cd backend
npm install
node app.js

Le backend sera disponible sur : http://localhost:5000


Frontend

cd frontend
npm install
npm start


L’application React sera disponible sur : http://localhost:3000

Dockerisation

Docker Compose

Le projet est prêt à être exécuté via Docker Compose.
Cela lance 3 conteneurs : MongoDB, backend, et frontend.


Dockerfiles
Backend : basé sur node:18-alpine

Frontend : basé sur node:18-alpine


CI avec GitHub Actions

Le fichier ci.yml dans .github/workflows automatise les tests à chaque push/pull sur master.

name: CI - Backend Tests

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  test-backend:
    runs-on: ubuntu-latest

    steps:
      - name: 📥 Checkout du code
        uses: actions/checkout@v3

      - name: 🔧 Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: 📦 Installer les dépendances
        working-directory: ./backend
        run: npm install

      - name: 🧪 Lancer les tests
        working-directory: ./backend
        run: npm test

Fonctionnalités

    🔍 Afficher tous les utilisateurs

    ➕ Ajouter un nouvel utilisateur

    ✏️ Modifier un utilisateur

    ❌ Supprimer un utilisateur
