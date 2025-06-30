# LooperAI - Personal Finance Management System

A full-stack web application for managing personal finances with transaction tracking, analytics, and user authentication.

## 📝 Signup Note ⚠
⚠️ While signing up, please use one of the following userIds:

user_001

user_002

user_003

These IDs match the pre-seeded transaction data in the database. You can enter any email and password. For example:

json
{
  "email": "test@example.com",
  "password": "yourpassword",
  "userId": "user_001"
}

## 🚀 Features

- **User Authentication** - Secure signup/signin with JWT tokens
- **Transaction Management** - Add, view, and track financial transactions
- **Dashboard Analytics** - Visual charts and financial insights
- **Responsive Design** - Modern UI built with React and Tailwind CSS
- **Real-time Updates** - Live transaction data synchronization

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **React Hot Toast** for notifications
- **React Cookie** for authentication state

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** for cross-origin requests
- **Cookie Parser** for session management

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/LooperAI.git
cd LooperAI
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
# MongoDB connection string
MONGO_URL=mongodb://localhost:27017/looperai
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/looperai

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secure_jwt_secret_key_here

# Port (optional, defaults to 3001)
PORT=3001
```

4. Start the backend server:
```bash
node index.js
```

The backend will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_BACKEND_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### cors configuration 
4. Update backend CORS configuration to allow frontend access:
   In backend/index.js, modify the CORS settings:

   bash
   app.use(
    cors({
    origin: [<Your Frontend URL Here>],   // Add all frontend URLs explicitly


   methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: [

    "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
    })
    );

## 🎯 Usage Examples

### User Registration
1. Navigate to `/auth/signup`
2. Fill in your details (User ID, Email, Password)
3. Click "Sign Up"
4. You'll be redirected to the dashboard upon successful registration

### Adding Transactions
1. From the dashboard, navigate to the transactions section
2. Click "Add Transaction"
3. Fill in transaction details:
   - Amount
   - Category (Income/Expense)
   - Description
   - Date
4. Submit the transaction

### Viewing Analytics
1. Access the dashboard to view:
   - Total balance
   - Monthly expenses
   - Income vs. Expenses charts
   - Recent transactions list

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3001
```

#### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:3001
```

### CORS Configuration
The backend is configured to accept requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Create React App)
- `https://looperai.vercel.app` (Production)

## 📁 Project Structure

```
LooperAI/
├── backend/
│   ├── Controllers/
│   │   └── AuthController.js
│   ├── Middlewares/
│   │   └── AuthMiddleWare.js
│   ├── Models/
│   │   ├── TransactionsModel.js
│   │   └── userModel.js
│   ├── Routes/
│   │   └── AuthRoute.js
│   ├── Schemas/
│   │   ├── TransactionsSchema.js
│   │   └── UserSchema.js
│   ├── util/
│   │   └── SecretToken.js
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Authintication/
│   │   │   └── ui/
│   │   ├── assets/
│   │   └── lib/
│   ├── public/
│   ├── package.json
│   └── .env
└── README.md
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `VITE_BACKEND_URL=your_production_backend_url`
3. Deploy automatically on push to main branch

### Backend (Vercel/Railway/Heroku)
1. Set environment variables:
   - `MONGO_URL=your_production_mongodb_url`
   - `JWT_SECRET=your_production_jwt_secret`
2. Update CORS origins to include your frontend URL
3. Deploy using your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally
   - Check your connection string in `.env`
   - For MongoDB Atlas, ensure IP whitelist is configured

2. **CORS Errors**
   - Verify frontend URL is in backend CORS configuration
   - Check environment variables are properly set

3. **Authentication Issues**
   - Clear browser cookies
   - Check JWT_SECRET is consistent
   - Verify token expiration settings

### Getting Help
- Create an issue in the GitHub repository
- Check existing issues for solutions
- Contact the development team

## 📊 Performance

- Frontend built with Vite for fast development and optimized production builds
- Backend uses efficient MongoDB queries
- JWT tokens for stateless authentication
- Responsive design for all device sizes

---

**Made with ❤️ by Juilee Talekar Team**
