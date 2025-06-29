# API Documentation

## Base URL
- **Development**: `http://localhost:3001`
- **Production**: `https://your-backend-url.vercel.app`

## Authentication
All protected routes require a JWT token sent as an HTTP-only cookie named `token`.

---

## Endpoints

### Authentication Endpoints

#### POST /signup
Register a new user account.

**Request Body:**
```json
{
  "userId": "string",
  "email": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "userId": "string"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Email already exists"
}
```

---

#### POST /signin
Authenticate an existing user.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "userId": "string"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

#### POST /
Verify user authentication token.

**Headers:**
```
Cookie: token=jwt_token_here
```

**Response:**
```json
{
  "status": true,
  "userId": "string",
  "message": "Token verified successfully"
}
```

**Error Response:**
```json
{
  "status": false,
  "message": "Invalid token"
}
```

---

### Transaction Endpoints

#### GET /getTransactionsByUserId/:userId
Retrieve all transactions for a specific user.

**Parameters:**
- `userId` (string): The unique identifier of the user

**Headers:**
```
Cookie: token=jwt_token_here
```

**Response:**
```json
{
  "success": true,
  "transactions": [
    {
      "_id": "string",
      "userId": "string",
      "amount": 100.50,
      "category": "Food",
      "type": "expense",
      "description": "Lunch at restaurant",
      "date": "2025-06-30T12:00:00.000Z",
      "createdAt": "2025-06-30T12:00:00.000Z",
      "updatedAt": "2025-06-30T12:00:00.000Z"
    }
  ]
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "User not found"
}
```

---

#### POST /addTransaction
Add a new transaction for the authenticated user.

**Headers:**
```
Cookie: token=jwt_token_here
Content-Type: application/json
```

**Request Body:**
```json
{
  "amount": 100.50,
  "category": "Food",
  "type": "expense",
  "description": "Lunch at restaurant",
  "date": "2025-06-30"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Transaction added successfully",
  "transaction": {
    "_id": "string",
    "userId": "string",
    "amount": 100.50,
    "category": "Food",
    "type": "expense",
    "description": "Lunch at restaurant",
    "date": "2025-06-30T12:00:00.000Z",
    "createdAt": "2025-06-30T12:00:00.000Z",
    "updatedAt": "2025-06-30T12:00:00.000Z"
  }
}
```

---

#### PUT /updateTransaction/:id
Update an existing transaction.

**Parameters:**
- `id` (string): The unique identifier of the transaction

**Headers:**
```
Cookie: token=jwt_token_here
Content-Type: application/json
```

**Request Body:**
```json
{
  "amount": 150.75,
  "category": "Food",
  "type": "expense",
  "description": "Dinner at restaurant",
  "date": "2025-06-30"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Transaction updated successfully",
  "transaction": {
    "_id": "string",
    "userId": "string",
    "amount": 150.75,
    "category": "Food",
    "type": "expense",
    "description": "Dinner at restaurant",
    "date": "2025-06-30T18:00:00.000Z",
    "updatedAt": "2025-06-30T18:00:00.000Z"
  }
}
```

---

#### DELETE /deleteTransaction/:id
Delete a transaction.

**Parameters:**
- `id` (string): The unique identifier of the transaction

**Headers:**
```
Cookie: token=jwt_token_here
```

**Response:**
```json
{
  "success": true,
  "message": "Transaction deleted successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Transaction not found"
}
```

---

## Data Models

### User Schema
```json
{
  "_id": "ObjectId",
  "userId": "string (unique)",
  "email": "string (unique)",
  "password": "string (hashed)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Transaction Schema
```json
{
  "_id": "ObjectId",
  "userId": "string (ref: User.userId)",
  "amount": "Number (required)",
  "category": "string (required)",
  "type": "string (enum: ['income', 'expense'])",
  "description": "string",
  "date": "Date (required)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict (e.g., email already exists) |
| 500 | Internal Server Error |

---

## Rate Limiting
- No rate limiting currently implemented
- Consider implementing rate limiting for production use

## CORS Configuration
The API accepts requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Create React App)
- `https://looperai.vercel.app` (Production frontend)

## Authentication Flow
1. User registers/signs in via `/signup` or `/signin`
2. Server responds with HTTP-only cookie containing JWT token
3. Client includes cookie in subsequent requests
4. Server validates token on protected routes
5. Server returns user data or error message

## Example Usage

### Using cURL

**Register a new user:**
```bash
curl -X POST http://localhost:3001/signup \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "john_doe",
    "email": "john@example.com",
    "password": "securepassword123",
    "confirmPassword": "securepassword123"
  }'
```

**Sign in:**
```bash
curl -X POST http://localhost:3001/signin \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

**Get transactions:**
```bash
curl -X GET http://localhost:3001/getTransactionsByUserId/john_doe \
  -H "Content-Type: application/json" \
  -b cookies.txt
```

### Using JavaScript/Axios

**Frontend example:**
```javascript
// Sign in
const response = await axios.post(
  `${VITE_BACKEND_URL}/signin`,
  {
    email: "john@example.com",
    password: "securepassword123"
  },
  { withCredentials: true }
);

// Get transactions
const transactionsResponse = await axios.get(
  `${VITE_BACKEND_URL}/getTransactionsByUserId/john_doe`,
  { withCredentials: true }
);
```
