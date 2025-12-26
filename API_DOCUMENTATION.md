# VintagePic Authentication API

## Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/vintagepic"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
```

## API Endpoints

### 1. Sign Up

**POST** `/api/auth/signup`

Create a new user account.

**Request Body:**

```json
{
  "fullName": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

**Response (201):**

```json
{
  "message": "Account created successfully",
  "user": {
    "id": "clxyz123...",
    "fullName": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": null,
    "bio": null,
    "isVerified": false,
    "createdAt": "2025-12-26T..."
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Validation Rules:**

- Username: 3-20 characters, alphanumeric and underscores only
- Email: Valid email format
- Password: Minimum 8 characters, must contain uppercase, lowercase, and numbers

---

### 2. Sign In

**POST** `/api/auth/signin`

Authenticate user and get access token.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "SecurePass123",
  "rememberMe": true
}
```

**Response (200):**

```json
{
  "message": "Signed in successfully",
  "user": {
    "id": "clxyz123...",
    "fullName": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": null,
    "bio": null,
    "isVerified": false,
    "isPrivate": false,
    "createdAt": "2025-12-26T...",
    "updatedAt": "2025-12-26T..."
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Session Duration:**

- Default: 7 days
- With `rememberMe: true`: 30 days

---

### 3. Sign Out

**POST** `/api/auth/signout`

Invalidate user session.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200):**

```json
{
  "message": "Signed out successfully"
}
```

---

### 4. Get Current User

**GET** `/api/auth/me`

Get authenticated user's information.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200):**

```json
{
  "user": {
    "id": "clxyz123...",
    "fullName": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": null,
    "bio": null,
    "isVerified": false,
    "isPrivate": false,
    "createdAt": "2025-12-26T...",
    "updatedAt": "2025-12-26T..."
  }
}
```

---

## Error Responses

### 400 Bad Request

```json
{
  "error": "All fields are required"
}
```

### 401 Unauthorized

```json
{
  "error": "Invalid email or password"
}
```

### 409 Conflict

```json
{
  "error": "Email already registered"
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal server error"
}
```

---

## Usage Examples

### Using fetch:

```typescript
// Sign Up
const signUp = async () => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: "John Doe",
      username: "johndoe",
      email: "john@example.com",
      password: "SecurePass123",
    }),
  });
  const data = await response.json();
  localStorage.setItem("token", data.token);
};

// Sign In
const signIn = async () => {
  const response = await fetch("/api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "john@example.com",
      password: "SecurePass123",
      rememberMe: true,
    }),
  });
  const data = await response.json();
  localStorage.setItem("token", data.token);
};

// Get Current User
const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  return data.user;
};

// Sign Out
const signOut = async () => {
  const token = localStorage.getItem("token");
  await fetch("/api/auth/signout", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  localStorage.removeItem("token");
};
```

---

## Security Features

✅ Password hashing with bcrypt (10 salt rounds)
✅ JWT token authentication
✅ Session management in database
✅ Email and username uniqueness validation
✅ Strong password requirements
✅ Token expiration handling
✅ Secure password comparison
✅ Input validation and sanitization

---

## Next Steps

1. Set up your PostgreSQL database
2. Add `JWT_SECRET` to your `.env` file
3. Run `npx prisma migrate dev` to create database tables
4. Test the API endpoints with Postman or Thunder Client
5. Integrate the API with your frontend forms
