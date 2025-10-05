🎬 Movix App

Movix is a modern movie discovery application built with React. It allows users to browse and search movies in real-time using an external API. The app integrates Firebase Authentication for secure user login/signup and Firebase Realtime Database to store feedback, watchlists, and personalized user data.

✨ Features

🔥 Real-Time Movie Data: Fetches up-to-date movie information from a third-party API.

🔍 Search & Filter: Quickly search movies by title or filter by category.

🔐 User Authentication: Secure login/signup using Firebase Auth.

🗄️ Realtime Database: Store user feedback, watchlists, and preferences in Firebase Realtime Database.

📱 Responsive Design: Fully responsive and mobile-friendly UI.

🎨 Interactive UI: Includes movie cards, carousels, and dynamic routing for detailed pages.

🖼️ Screenshots
🏠 Home Page
<img width="1920" height="948" alt="Home" src="https://github.com/user-attachments/assets/584bfa60-a663-4e93-b0cf-18e6e68696f1" />
🎥 Movie Details Page
<img width="1920" height="953" alt="Details" src="https://github.com/user-attachments/assets/6b6d0856-3277-48a6-8678-83bf3d87afe0" />
🔐 Login / Signup Page
<img width="1894" height="872" alt="Login" src="https://github.com/user-attachments/assets/6545b4c4-7534-43f8-a9f0-37f57a030bbd" />
💬 Feedback Form
<img width="1919" height="953" alt="Feedback" src="https://github.com/user-attachments/assets/40aa3c24-bb12-4d01-935f-a6f64a9635cd" />
🛠️ Technologies Used
<img width="1023" height="731" alt="Tech Stack" src="https://github.com/user-attachments/assets/e5f92642-9ae8-4880-a3a7-34b5d8e20845" /> <img width="1412" height="672" alt="React Firebase" src="https://github.com/user-attachments/assets/10f03700-d223-4aa1-a09b-d1167073e926" />

⚛️ Frontend: React, Tailwind CSS, JavaScript

🔥 Backend Services: Firebase (Auth + Realtime Database)

🎬 API Integration: External Movie API

🌐 Routing: React Router

🧠 State Management: React Hooks (useState, useEffect)

🚀 Installation
1️⃣ Clone the repository
git clone https://github.com/yourusername/movix-app.git
cd movix-app

2️⃣ Install dependencies
npm install

3️⃣ Configure Firebase

Create a Firebase project from Firebase Console

Enable Email/Password Authentication

Create a Realtime Database

Replace Firebase config in firebase.js

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

4️⃣ Start the app
npm start

💡 Usage

Open the app in your browser → http://localhost:3000

Sign up / Log in with your email and password.

Browse or search movies in real-time.

View movie details, submit feedback, or save your favorites (stored in Firebase).

📂 Folder Structure
movix-app/
│
├─ public/                 # Static files
├─ src/
│   ├─ components/         # Reusable UI components
│   ├─ pages/              # Pages (Home, About, Feedback, MovieDetails)
│   ├─ firebase.js         # Firebase configuration
│   ├─ App.js              # Main App component
│   └─ index.js            # Entry point
├─ package.json
└─ README.md

🎬 API Integration
const fetchMovies = async (query) => {
  const response = await fetch(`https://api.example.com/movies?search=${query}`);
  const data = await response.json();
  setMovies(data.results);
};


Replace https://api.example.com/movies with your actual API endpoint.
All data updates in real-time and reflects dynamically in the UI.

🔐 Firebase Authentication & Database
🔑 Authentication
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

💾 Realtime Database
import { ref, set } from "firebase/database";

// Save feedback
set(ref(database, 'feedback/' + userId), {
  name: userName,
  email: userEmail,
  message: userMessage,
  timestamp: new Date().toISOString()
});

🤝 Contributing

Contributions are welcome! 💪

Fork the repo

Create a branch

git checkout -b feature/YourFeature


Commit your changes

git commit -m "Add your feature"


Push and open a pull request

git push origin feature/YourFeature

📄 License

This project is licensed under the MIT License — see the LICENSE file for details.

✉️ Contact

👨‍💻 Author: Taha
