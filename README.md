# 🤖 Joke Machine

A fun, interactive React app that fetches jokes from [JokeAPI](https://v2.jokeapi.dev/) based on the user’s selected category.
Built to explore API integration, query parameters, and client-side routing using React Router.

---

## 🧭 Overview

**Joke Machine** lets users pick a joke category — like _Programming_, _Pun_, or _Spooky_ — and instantly displays a random joke from the JokeAPI.

This project demonstrates:

- Dynamic routing with **React Router**
- Reading query parameters from the URL
- Handling API responses with **Axios**
- Conditional rendering for one-liner and two-part jokes

---

## ✨ Features

- 🎭 Choose from multiple joke categories
- ⚙️ Uses query parameters to persist your selected category in the URL
- 🔄 Fetches jokes dynamically from [JokeAPI](https://v2.jokeapi.dev/)
- 💬 Supports both _single-line_ and _two-part_ jokes
- 🧩 Built as a **Single Page Application (SPA)** with React Router
- 🚀 Simple and responsive UI

---

## 🧰 Tech Stack

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| **React (Vite)** | Frontend framework          |
| **React Router** | Page routing and navigation |
| **Axios**        | HTTP requests               |
| **JokeAPI**      | External joke data source   |
| **CSS**          | Styling                     |

---

## ⚙️ Setup Instructions

Follow these steps to run the app locally:

1. **Clone the repository**

   git clone https://github.com/jkwan14/joke-machine-app.git
   cd joke-machine

2. **Install dependencies**

   npm install

3. **Run the app**

   npm run dev

4. **Open in your browser**

   http://localhost:5173

---

## ⚙️ Future Improvements

    Add a "Next Joke" button to fetch new jokes without navigating back to home

    Allow users to save favorite jokes

---

## ⚙️ Credits

    Jokes provided by https://v2.jokeapi.dev/

    Built using React, Axios, and React Router
