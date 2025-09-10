# 👤 User API Documentation

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  ![Joi](https://img.shields.io/badge/Joi-FF8800?style=for-the-badge&logo=joi&logoColor=white)  ![bcrypt](https://img.shields.io/badge/Bcrypt-3388FF?style=for-the-badge&logo=lock&logoColor=white)  ![REST API](https://img.shields.io/badge/REST-02569B?style=for-the-badge&logo=swagger&logoColor=white)

Base route:

```
/users
```

All routes are protected by middleware:

```
sessionValidation
```

---

## 1. Get All Users

**Endpoint**

```
GET /users/getAll
```

**Description**  
Fetch all users from the database.

**Request Body**  
_None_

---

## 2. Get User by ID

**Endpoint**

```
POST /users/getById
```

**Description**  
Fetch a single user by their ID.

**Request Body**

```json
{
  "id": 1
}
```

**Validation**

- `id`: required, must be a valid integer.

---

## 3. Insert User

**Endpoint**

```
POST /users/insert
```

**Description**  
Create a new user. Password is hashed before storage.

**Request Body**

```json
{
  "name": "Alice",
  "email": "alice@email.com",
  "password": "securePassword123"
}
```

**Validation**

- `id`: forbidden (auto-generated).
- `name`: required, string.
- `email`: required, valid email.
- `password`: required, string.

---

## 4. Update User

**Endpoint**

```
PUT /users/update
```

**Description**  
Update an existing user. Password is always re-hashed.

**Request Body**

```json
{
  "id": 1,
  "name": "Alice Updated",
  "email": "alice.updated@email.com",
  "password": "newPassword456"
}
```

**Validation**

- `id`: required.
- `name`: required, string.
- `email`: required, valid email.
- `password`: required, string.

---

## 5. Delete User

**Endpoint**

```
DELETE /users/delete
```

**Description**  
Delete a user by ID.

**Request Body**

```json
{
  "id": 1
}
```

**Validation**

- `id`: required, must be a valid integer.

---

⚠️ **Error Handling**

- If validation fails → `400 Bad Request` with Joi error details.
- If DB query fails → error passed to next middleware (likely `500 Internal Server Error`).
