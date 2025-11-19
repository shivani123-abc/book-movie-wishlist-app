Book World

A full-featured book review and management application built with the MERN stack (MongoDB, Express, React, Node.js). Users can browse books, leave reviews with star ratings, and manage their favorites. Admins have extended capabilities for adding, editing, and deleting books, as well as managing user data and access.

Features

User Authentication:

Secure user registration and login system.

JWT for authorization.

Bcrypt for password hashing.

Book Listing with Reviews & Ratings:

Browse and search for books.

Leave detailed reviews with star ratings.

Read community reviews for insights.

User Profile Pages:

Personalized profiles to track activity.

Manage and curate a list of favorite books.

Advanced Feature:

Nested commenting system using Depth-First Search (DFS) for efficient comment deletion within review threads.

User Roles & Permissions:

Differentiation between user and admin roles.

Admin can add, update, and delete book listings.

Manage user data and roles (except master admin).

Technologies Used

Frontend:

React.js

Recoil for State Management

Tailwind CSS

Shadcn UI library

React Hook Form

Tanstack Tables

Lucide-React for icons

Backend:

Node.js

Express.js

MongoDB

Mongoose

Multer for file uploads

CORS

JWT for authentication

Bcrypt for password hashing

Other Dependencies:

Axios

Zod for schema validation

React Router DOM for routing

Cloudinary for image uploads (optional)

Installation Guide
Requirements

Node.js

MongoDB (or use Mongo Atlas)

Configure Environment Variables

Rename .env.example to .env in both backend and frontend directories.
Add your MONGO_URL, JWT_SECRET, CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET, and PORT in the backend .env.

If you don’t use Cloudinary, replace cloudStorage with diskStorage in /backend/middleware/upload.js.

Installation
Clone the Repository
git clone https://github.com/shivani123-abc/book-movie-wishlist-app.git
cd book-movie-wishlist-app

Install Packages
cd backend
npm install
cd ../frontend
npm install

Start Frontend
npm run dev

Start Backend
cd ../backend
node index.js


Open http://localhost:5173 in your browser.

License

MIT LICENSE

Copyright (c) 2025 Shivani Yadav

Screenshots


















