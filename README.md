🚘 CarsOnScroll – Parallax Car Website with Backend Integration

A modern MERN-based (MongoDB, Express, Node.js) web project where users can:

Explore cars through a parallax-style website
Submit contact messages
Buy cars through a form
Login via frontend form
All submitted data is stored securely in MongoDB Atlas and can be viewed later via API endpoints.

🧩 Project Structure
CarsOnScroll/
│
├── backend/
│   ├── models/
│   │   ├── BuyCar.js
│   │   ├── Contact.js
│   │   └── Login.js
│   │
│   ├── routes/
│   │   ├── buyCarRoutes.js
│   │   ├── contactRoutes.js
│   │   └── loginRoutes.js
│   │
│   ├── db.js
│   └── server.js
│
├── frontend/
│   ├── project-last-complete.html     → Main website (Home + Login)
│   ├── contact.html                   → Contact Us form
│   ├── tryout.html                    → Buy Car form
│   └── cars-info.html                 → Extra car info page
│
├── .env
├── package.json
└── README.md

⚙️ Technologies Used
🖥️ Frontend

HTML5, CSS3, JavaScript (Vanilla)
Responsive UI with Dark Mode
Parallax scrolling & interactive design

🧠 Backend

Node.js + Express.js — REST API
Mongoose + MongoDB Atlas — Cloud Database
CORS — for frontend-backend communication
dotenv — to manage environment variables

🔌 Environment Variables

Create a .env file in the project root with the following content:

MONGO_URI=mongodb+srv://<username>:<password>@cluster-url/carsOnScrollDB
PORT=5000

🏗️ Setup Instructions
1️⃣ Install Dependencies
npm install

2️⃣ Start the Backend
npm run dev
or
node backend/server.js
The backend runs on http://localhost:5000

3️⃣ Run the Frontend
Simply open any HTML file (like project-last-complete.html) in your browser
—or— use Live Server in VS Code.

Frontend runs typically on http://localhost:5500
 (if using Live Server)

🔁 API Endpoints
Method	Endpoint	Description
POST	/api/contact	Store contact form data
GET	/api/contact	Retrieve all contact messages
POST	/api/login	Store login form data
GET	/api/login	Retrieve all login data
POST	/api/buy	Store car purchase data
GET	/api/buy	Retrieve all purchase data

✅ Example:
Visit http://localhost:5000/api/buy in your browser to view all car orders.

💾 Database Collections

MongoDB will automatically create 3 collections:

contacts
logins
buycars
Each form submission from the frontend is stored in the respective collection.

💡 Key Features

Parallax landing page with smooth scrolling
Contact, Login, and Buy Car forms linked to backend
MongoDB integration using Mongoose
Fully functional REST APIs
Dark/Light mode with localStorage persistence

📸 Preview

Frontend: Parallax car theme website with animated sections
Backend: REST API storing form data in MongoDB
Database: Cloud-based MongoDB Atlas

👨‍💻 Author

Sahil Soni
Master of Computer Applications (MCA)
Chandigarh University
