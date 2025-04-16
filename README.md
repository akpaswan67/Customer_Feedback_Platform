# 🌟 Feedback Web App

A full-stack feedback collection platform where users can log in using Google, submit categorized feedback, and view existing feedback. Built using **React.js**, **Tailwind CSS**, **Node.js**, **Express**, **MongoDB**, and **Google OAuth**.

---

## 🚀 Features

- 🔐 Google OAuth login using Passport.js
- 📝 Submit feedback with category, rating, and comments
- 📋 View all submitted feedback
- 🌈 Clean and responsive UI with Tailwind CSS
- 🔄 Real-time UI updates on new feedback submission
- 🌐 RESTful API with Express and MongoDB

---

## 🛠️ Tech Stack

**Frontend**:
- React.js
- Tailwind CSS
- React Router

**Backend**:
- Node.js
- Express.js
- MongoDB
- Passport.js (Google OAuth)
- Mongoose
- CORS, dotenv

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/c2440f8a-5a3d-411d-94a4-d172201b04ce)
![image](https://github.com/user-attachments/assets/73fc6be1-c02e-496e-bc00-753b788446f8)

![image](https://github.com/user-attachments/assets/a310c09a-b935-4e62-9b4b-4550ebde88e0)


Installation
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/feedback-app.git
cd feedback-app
2. Setup the backend
bash
Copy
Edit
cd backend
npm install
Create a .env file inside the backend folder:

env
Copy
Edit
PORT=5001
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:3000
Start the backend:

bash
Copy
Edit
npm run dev
3. Setup the frontend
bash
Copy
Edit
cd ../frontend
npm install
Start the frontend:

bash
Copy
Edit
npm start



