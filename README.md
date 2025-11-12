# Fees Management App (Angular + Node.js + MongoDB)

A complete full-stack web application built using **Angular**, **Node.js (Express)**, and **MongoDB** for managing user authentication — Signup and Login.

---

## 🚀 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | Angular 19, TypeScript, HTML5, SCSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ORM) |
| Auth | bcrypt for password hashing |
| Tools | Git, npm, VS Code, Thunder Client/Postman |

---

## 🧩 Features

✅ User Registration (Signup)  
✅ Secure Password Hashing using **bcrypt**  
✅ Login Authentication  
✅ Form Validation in Angular  
✅ RESTful API Integration  
✅ CORS enabled for frontend-backend communication  

---

## 🖼️ Screenshots

### 🟢 Signup Page
![Signup Screenshot](https://github.com/NiranjanPAbharekar/fees-management-app/blob/main/SignUp.png)

### 🔵 Login Page
![Login Screenshot](https://github.com/NiranjanPAbharekar/fees-management-app/blob/main/Login.png)



## 📁 Project Structure
FeesManagementApp/
├── backend/
│ ├── server.js
│ ├── routes/
│ │ └── routes.js
│ ├── User/
│ │ └── userModel.js
│ └── package.json
│
└── frontend/
├── src/
│ ├── app/
│ │ ├── login/
│ │ │ ├── login.component.ts
│ │ │ ├── login.component.html
│ │ │ └── login.component.scss
│ ├── environments/
│ └── main.ts
└── package.json

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/NiranjanPAbharekar/fees-management-app.git
cd fees-management-app

### 2️⃣ Backend Setup  

cd backend
npm install
npm start
The backend will start at: http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
ng serve

🔄 API Endpoints

|Method	|Endpoint	|Description|
|POST	|/api/signup|Register new user
|POST	|/api/login	|Login existing user



