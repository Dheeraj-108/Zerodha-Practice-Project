# Zerodha Clone (Kite)

A full-stack clone of Zerodha's trading platform, featuring a professional landing page and a feature-rich trading dashboard (Kite).

## 🚀 Overview

This project is a comprehensive clone of Zerodha. It is split into three main components:

1.  **Frontend**: A beautiful, SEO-optimized landing page explaining the services.
2.  **Dashboard**: A functional trading platform (Kite clone) where users can manage holdings, positions, and orders.
3.  **Backend**: A robust REST API managing user authentication, market data (simulated), and trade persistence.

## 🛠️ Tech Stack

### Frontend & Dashboard

-   **React 19**: Latest React features for a modern UI.
-   **Vite**: Ultra-fast build tool and development server.
-   **Tailwind CSS 4**: Utility-first styling with the latest features.
-   **React Router 7**: For seamless navigation and layout management.
-   **Chart.js & React-Chartjs-2**: Dynamic visualization of portfolio data.
-   **Axios**: Efficient API communication.

### Backend

-   **Node.js & Express**: High-performance server environment.
-   **MongoDB & Mongoose**: Scalable NoSQL database for storing user profiles and trade data.
-   **JWT & HTTP-only Cookies**: Secure authentication flow.
-   **Bcrypt**: Password hashing for security.

## 📁 Project Structure

```text
Zerodha Clone/
├── frontend/             # Landing page application
│   ├── src/
│   │   ├── landing/      # Main sections (About, Products, Pricing, etc.)
│   │   └── common/       # Shared UI components (Navbar, Footer)
├── dashboard/            # Kite Trading platform
│   ├── src/
│   │   ├── components/   # Trading features (Holdings, Orders, Watchlist)
│   │   └── context/      # Authentication and global state
├── backend/              # REST API
│   ├── src/
│   │   ├── models/       # Mongoose data schemas
│   │   ├── controllers/  # Business logic
│   │   └── routes/       # API endpoints
```

## ⚙️ Setup & Installation

Each directory contains its own `.env.example` file. Create a `.env` file in each folder before starting.

### 1. Backend

```bash
cd backend
npm install
npm start
```

### 2. Dashboard

```bash
cd dashboard
npm install
npm run dev
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Authentication Refactor

The authentication logic has been centralized in the **Dashboard** application.

-   The landing page (`frontend`) handles public information and redirects users to the dashboard for login and registration.
-   Once authenticated, users stay within the dashboard environment to manage their trades.

## 📄 License

This project is for learning purposes.
