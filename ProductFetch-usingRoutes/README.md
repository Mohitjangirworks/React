# React Project Structure

This project follows a clean and scalable React folder structure.

## 📁 Folder Structure

```bash
src/
│
├── assets/                  # Images, icons, videos, static files
│
├── components/              # Reusable UI components
│   ├── Home.jsx
│   ├── NavBar.jsx
│   └── ProductCards.jsx
│
├── pages/                   # Main pages/screens
│   ├── DashboardDevSecurity.jsx
│   ├── DashboardPage.jsx
│   ├── DashboardSecurity.jsx
│   ├── MainPage.jsx
│   ├── NotFound.jsx
│   ├── Product.jsx
│   └── ProductDetails.jsx
│
├── routes/                  # Application routing
│   └── AppRouters.jsx
│
├── services/                # API calls and backend services
│   └── api.js
│
├── App.css                  # Global app styling
├── App.jsx                  # Root App component
├── index.css                # Global CSS
└── main.jsx                 # Entry point