Movix App 🎬

Movix is a modern movie discovery application built with React. It allows users to browse and search for movies in real-time using an external API. The app integrates Firebase Authentication for secure user login/signup and Firebase Realtime Database to store user feedback, watchlists, or other personalized data.

Features ✨

Real-Time Movie Data: Fetches up-to-date movie information from a third-party API.

Search & Filter: Quickly search movies by title or filter by category.

User Authentication: Login and signup securely using Firebase Auth.

Realtime Database: Store user feedback, watchlists, or preferences in Firebase Realtime Database.

Responsive Design: Fully responsive and mobile-friendly interface.

Interactive UI: Movie cards, carousels, and dynamic routing for detailed pages.

Screenshots 🖼️

<img width="1920" height="948" alt="image" src="https://github.com/user-attachments/assets/584bfa60-a663-4e93-b0cf-18e6e68696f1" />


Home Page

<img width="1920" height="953" alt="image" src="https://github.com/user-attachments/assets/6b6d0856-3277-48a6-8678-83bf3d87afe0" />


Movie Details Page


<img width="1920" height="957" alt="image" src="https://github.com/user-attachments/assets/b98448b2-d65e-4806-9bfc-7b317c5a6c32" />


<img width="1894" height="872" alt="image" src="https://github.com/user-attachments/assets/6545b4c4-7534-43f8-a9f0-37f57a030bbd" />

Login/Signup Page

Feedback Form

<img width="1919" height="953" alt="image" src="https://github.com/user-attachments/assets/40aa3c24-bb12-4d01-935f-a6f64a9635cd" />


Technologies Used 🛠️

<img width="1023" height="731" alt="image" src="https://github.com/user-attachments/assets/e5f92642-9ae8-4880-a3a7-34b5d8e20845" />

<img width="1412" height="672" alt="image" src="https://github.com/user-attachments/assets/10f03700-d223-4aa1-a09b-d1167073e926" />


Frontend: React, Tailwind CSS, JavaScript

Backend Services: Firebase (Auth + Realtime Database)

API Integration: External Movie API for fetching movie data

Routing: React Router for dynamic routing

State Management: React Hooks (useState, useEffect)

Installation 🚀

Clone the repository

git clone https://github.com/yourusername/movix-app.git
cd movix-app


Install dependencies

npm install


Configure Firebase

Create a Firebase project at Firebase Console

Enable Email/Password Authentication

Create a Realtime Database

Replace your Firebase config in firebase.js

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);


Start the application

npm start

Usage 💡

Open the app in your browser (http://localhost:3000).

Sign Up/Login using your email and password.

Browse movies, use search, or click a movie card to see details.

Submit feedback or save your favorite movies (stored in Firebase Realtime Database).

Folder Structure 📂
movix-app/
│
├─ public/                 # Static files
├─ src/
│   ├─ components/         # Reusable components (Navbar, Carousel, MovieCard)
│   ├─ pages/              # Pages (Home, About, Feedback, MovieDetails)
│   ├─ firebase.js         # Firebase configuration
│   ├─ App.js              # Main app component
│   └─ index.js            # Entry point
├─ package.json
└─ README.md

API Integration 🎬

Movix fetches movie data from a public movie API. Example:

const fetchMovies = async (query) => {
  const response = await fetch(`https://api.example.com/movies?search=${query}`);
  const data = await response.json();
  setMovies(data.results);
};


Replace https://api.example.com/movies with your actual API endpoint.

All API calls are made in real-time and update the UI dynamically.

Firebase Auth & Database Usage 🔐

Authentication:

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


Realtime Database:

import { ref, set } from "firebase/database";

// Save feedback
set(ref(database, 'feedback/' + userId), {
  name: userName,
  email: userEmail,
  message: userMessage,
  timestamp: new Date().toISOString()
});

Contribution 🤝

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m "Add your feature")

Push to the branch (git push origin feature/YourFeature)

Open a pull request

License 📄

This project is licensed under the MIT License. See LICENSE
 for details.

Contact ✉️

Author: Taha
