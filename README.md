
# Expense Tracker MERN Stack

A full-stack expense tracking application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. Track your income and expenses with an interactive dashboard, visualizations, and comprehensive transaction management.

![Expense Tracker](src/assets/logo.svg)

## 🚀 Features

### User Management
- 👤 User Authentication (Register/Login)
- 🎭 Custom Avatar Selection using DiceBear API
- 🔒 Secure JWT Authentication

### Transaction Management
- ➕ Add new transactions
- 📝 Edit existing transactions
- ❌ Delete transactions
- 🏷️ Category-based organization
- 💰 Support for both Income and Expense types

### Advanced Filtering
- 📅 Date Range Selection
- 📊 Transaction Type Filtering
- ⏰ Time Period Filters (7/15/30 days)
- 🔍 Custom Date Range Search

### Data Visualization
- 📈 Line Progress Charts
- 🔄 Circular Progress Charts
- 📊 Analytics Dashboard
- 📑 Table View & Chart View Toggle

### UI/UX Features
- 🎨 Responsive Bootstrap Design
- ✨ Particle.js Background Effects
- 🔔 Interactive Toast Notifications
- ✅ Form Validations
- 🔄 Loading States
- 📱 Mobile-Friendly Interface

## 🛠️ Tech Stack

### Frontend
- React.js
- Bootstrap & React-Bootstrap
- Material-UI Icons
- Chart.js for visualizations
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT for authentication
- Cors for secure cross-origin requests

### Development Tools
- Environment Variables
- Error Handling
- MongoDB Atlas Cloud Database
- Development/Production Configurations

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/Sai-Dangade777/Personal-Finance-Manager.git
```

2. Install dependencies for backend
```bash
cd backend
npm install
```

3. Install dependencies for frontend
```bash
cd frontend
npm install
```

4. Create a .env file in the backend directory with your MongoDB connection string and port:
```
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

5. Start the backend server
```bash
cd backend
npm run dev
```

6. Start the frontend application
```bash
cd frontend
npm start
```

## 💡 Usage

1. Register a new account or login
2. Set up your profile avatar
3. Start adding transactions with details like:
   - Title
   - Amount
   - Category
   - Date
   - Transaction Type (Income/Expense)
   - Description (optional)
4. View your spending patterns in the analytics dashboard
5. Filter transactions based on date range or type
6. Toggle between table and chart views
7. Edit or delete transactions as needed

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](../../issues).

### Live Demo

- Amplify URL: https://main.d1sj7cd70hlter.amplifyapp.com/
- Vercel URL: https://expense-tracker-app-three-beryl.vercel.app/

## Objectives:

    1. Simplify expense tracking for individuals and organizations.

    2. Provide detailed insights into spending patterns to enable better financial management.

    3. Offer a platform for users to create, update, and delete expenses and categories.

    4. Generate comprehensive reports based on user-defined time periods and categories.

## Features


- User Authentication and Authorization:

    Allow users to sign up and log in to their personal accounts using secure authentication mechanisms.
Implement role-based access control for administrative tasks.

- Expense and Category Management:

    Enable users to create, update, and delete expense entries and categories.
Track expenses by date, category, and description.
Support attaching receipts or other relevant documents to expense entries.

- Dashboard and Reporting:

    Provide a visual dashboard displaying an overview of the user's expenses, including total expenses, expenses by category, and recent transactions.

    Generate reports based on selected date ranges and categories, displaying pie charts and bar graphs to help users understand their spending patterns.
    

- Responsive User Interface:

    Design a clean, responsive user interface that works seamlessly across desktop, tablet, and mobile devices.
    
    Utilize React.js for building reusable UI components and managing state effectively.


## Technical Architecture:

- Frontend:

    Utilize React.js for building the user interface, tsparticle library for awesome background effect and used other libraries like unique-names-generator, react-datepicker, moment

    Implement responsive design using CSS frameworks like Bootstrap and Material-Icons.

- Backend:

    Use Node.js and Express.js to build a RESTful API for handling client requests and serving as the application's backend.

    Implement authentication and authorization using JSON Web Tokens (JWT) and middleware to protect endpoints.

- Database:

    Store all data, including user information, expense entries, and categories, in MongoDB, a NoSQL database.

    Implement Mongoose ORM for schema definition and validation.

- Deployment:

    Deploy the application to a cloud provider like AWS and render.
    frontend has deployed on AWS and backend on Render.

    Set up Continuous Integration and Continuous Deployment (CI/CD) pipelines for automated builds and deployments.
## Run Locally

Clone the project

```bash
  git clone https://github.com/Priyanshu9898/Expense-Tracker-App
```

Go to the project directory

```bash
  cd Expense-Tracker-App
```

Go to the frontend directory and Install dependencies

```bash
  cd frontend
```
```bash
  npm install
```

Go to the backend directory and Install dependencies

```bash
  cd backend
```
```bash
  npm install
```

Start the frontend server

```bash
  npm start
```


Start the backend server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend folder

create config folder and add config.env file in it and all all env variables there.

`MONGO_URL` : Your MongoDB Connection String

`PORT`: PORT number


## Tech Stack

**Client:** React, Redux, react-bootstrap, Material Icons, tsparticles

**Server:** Node, Express

**Database:** MongoDB


## Screenshots

![App Screenshot](https://i.postimg.cc/6qLR3WNt/Expense-Management-System-Brave-19-04-2023-11-08-53.png)

![App Screenshot](https://i.postimg.cc/DynLNXqZ/Expense-Management-System-Brave-19-04-2023-11-08-59.png)

![App Screenshot](https://i.postimg.cc/Dy6L3wgc/Expense-Management-System-Brave-19-04-2023-11-15-46.png)

![App Screenshot](https://i.postimg.cc/13YF47bn/Expense-Management-System-Brave-19-04-2023-11-15-54.png)

![App Screenshot](https://i.postimg.cc/rwpWV2Z2/Expense-Management-System-Brave-19-04-2023-11-16-01.png)

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)





## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Priyanshu9898/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/priyanshumalaviya/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Priyanshu2281)
[![Medium](https://img.shields.io/badge/medum-1DA1F2?style=for-the-badge&logo=medium&logoColor=black)](https://medium.com/@priyanshumalaviya9210)

## Demo

Insert gif or link to demo


## License

[MIT](https://choosealicense.com/licenses/mit/)

