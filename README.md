# 👤 User & 📚 Course API Documentation

## Steps to Launch Server

1. **Navigate to the Backend Directory**:

   ```sh
   cd 3_backEndDevelopment
   ```
2. **Install Dependencies**:

   ```sh
   npm install
   ```
3. **Start the Server**:

   ```sh
   npm start
   ```

---

## 📚 Courses Controller

### **GET** `/courses/findAll`

Retrieve all courses.

**Request Body:** None

**Response:**

```json
{
  "courses": [
    {
      "id": "string",
      "name": "string",
      "content": "string"
    }
  ]
}
```

---

### **POST** `/courses/findOne`

Retrieve a course by name.

**Request Body:**

```json
{
  "name": "string"
}
```

**Response:**

```json
{
  "course": {
    "id": "string",
    "name": "string",
    "content": "string"
  }
}
```

---

### **POST** `/courses/insertOne`

Insert a new course.

**Request Body:**

```json
{
  "name": "string",
  "content": "string"
}
```

**Response:**

```json
{
  "id": "string",
  "name": "string",
  "content": "string"
}
```

---

### **PUT** `/courses/updateOne`

Update an existing course.

**Request Body:**

```json
{
  "name": "string",
  "newName": "string",
  "newContent": "string"
}
```

**Response:**

```json
{
  "message": "Course successfully updated"
}
```

---

### **DELETE** `/courses/deleteOne`

Delete a course.

**Request Body:**

```json
{
  "name": "string"
}
```

**Response:**

```json
{
  "message": "Successfully deleted the course string"
}
```

---

## 👤 Users Controller

### **GET** `/users/getAll`

Retrieve all users.

**Request Body:** None

**Response:**

```json
{
  "users": [
    {
      "id": "number",
      "name": "string",
      "email": "string",
      "password": "string"
    }
  ]
}
```

---

### **POST** `/users/getById`

Retrieve a user by ID.

**Request Body:**

```json
{
  "id": "number"
}
```

**Response:**

```json
{
  "user": {
    "id": "number",
    "name": "string",
    "email": "string",
    "password": "string"
  }
}
```

---

### **POST** `/users/insert`

Insert a new user.

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "id": "number",
  "name": "string",
  "email": "string",
  "password": "string"
}
```

---

### **PUT** `/users/update`

Update an existing user.

**Request Body:**

```json
{
  "id": "number",
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "message": "User successfully updated"
}
```

---

### **DELETE** `/users/delete`

Delete a user.

**Request Body:**

```json
{
  "id": "number"
}
```

**Response:**

```json
{
  "message": "The user number is successfully deleted"
}
```

---

## 🔒 JWT and Joi Documentation

### JWT

* `sessionValidation`: Middleware to validate the session token.
* **Parameters**:

  * `req`: The request object.
  * `res`: The response object.
  * `next`: The next middleware function.
* **Returns**: None

### Joi

#### `userSchema`: Schema for validating user data

* **Properties**:

  * `id`: Number, integer, minimum value of 1, required, strict.
  * `name`: String, pattern to match any character except `<` and `>`, optional.
  * `email`: String, email format, required, pattern to match any character except `<` and `>`, optional.
  * `password`: String, pattern to match any character except `<` and `>`, optional.

#### `courseSchema`: Schema for validating course data

* **Properties**:

  * `id`: Number, integer, minimum value of 1, required, strict.
  * `name`: String, pattern to match any character except `<` and `>`, optional.
  * `newName`: String, pattern to match any character except `<` and `>`, optional.
  * `content`: String, pattern to match any character except `<` and `>`, optional.
  * `newContent`: String, pattern to match any character except `<` and `>`, optional.

### Error Handling

* `errorHandling`: Middleware to handle errors.
* **Parameters**:

  * `err`: The error object.
  * `req`: The request object.
  * `res`: The response object.
  * `next`: The next middleware function.
* **Returns**: None
