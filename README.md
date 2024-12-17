#Dark Mode

![Screenshot_26-5-2024_05536_localhost](https://github.com/amanverma20/social-meadia-dashboard/assets/131933744/a3999d91-05c5-44a3-8722-3af1f7f7cccd)


#Light Mode

![Screenshot_26-5-2024_1124_localhost](https://github.com/amanverma20/social-meadia-dashboard/assets/131933744/57ff1149-fbd3-494a-98c2-d524c2593581)

# Social Media Dashboard

This project is a Social Media Dashboard that connects multiple platforms like Instagram, YouTube, and Facebook on a single page. It displays social engagement and insights for each platform. The application is built using Node.js, Express, React.js, MongoDB, and several modern libraries for styling and functionality.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Connect Multiple Platforms**: Integrate Instagram, YouTube, Facebook, and other platforms.
- **Display Insights**: View social media metrics like followers, likes, comments, and video views.
- **Single Dashboard**: Unified dashboard to monitor all social platforms.
- **Responsive UI**: Built with Bootstrap, CSS, and Ant Design for a clean and responsive layout.
- **Secure API**: Backend secured with Express and MongoDB for data storage.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for building APIs.
- **React.js**: Frontend library for creating interactive UI.
- **MongoDB**: NoSQL database for storing user and insights data.
- **CSS**: Custom styles for layout and design.
- **Bootstrap**: Responsive CSS framework.
- **Ant Design (antd)**: React UI components library for professional design.
- **HTML5**: Markup language for page structure.
- **JavaScript**: Programming language for both frontend and backend.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- MongoDB installed locally or use a MongoDB Atlas cluster

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB server:**
   Ensure MongoDB is running locally or configure a connection string for MongoDB Atlas.

2. **Run the backend server:**

   Navigate to the `backend` directory and start the server:

   ```bash
   cd backend
   npm run dev
   ```

   The backend server will run at `http://localhost:5000` by default.

3. **Run the frontend application:**

   Navigate to the `frontend` directory and start the React development server:

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

## Available Scripts

### Backend Scripts
- `npm run dev`: Starts the backend server in development mode.
- `npm start`: Starts the backend server.

### Frontend Scripts
- `npm start`: Starts the React development server.
- `npm run build`: Builds the frontend for production.

## Folder Structure

```
├── backend
│   ├── config          # Database configuration
│   ├── models          # Mongoose models
│   ├── routes          # API routes for social insights
│   ├── controllers     # Logic for fetching and storing insights
│   ├── middleware      # Authentication and custom middleware
│   ├── server.js       # Entry point for the backend server
├── frontend
│   ├── public          # Static assets
│   ├── src
│   │   ├── assets      # Images, fonts, etc.
│   │   ├── components  # Reusable React components
│   │   ├── pages       # Dashboard and individual platform pages
│   │   ├── services    # API calls to fetch data
│   │   ├── utils       # Utility functions
│   │   ├── App.js      # Main React component
│   │   ├── index.js    # Entry point for the React app
├── .env                # Environment variables file
├── package.json        # Backend dependencies
└── README.md           # Project documentation
```

## Environment Variables

Create a `.env` file in the backend folder and add the following variables:

```
PORT=5000
MONGO_URI=<Your_MongoDB_Connection_String>
JWT_SECRET=<Your_JWT_Secret>
FACEBOOK_API_KEY=<Your_Facebook_API_Key>
INSTAGRAM_API_KEY=<Your_Instagram_API_Key>
YOUTUBE_API_KEY=<Your_YouTube_API_Key>
```

Replace `<Your_Values>` with appropriate credentials for each API platform.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

