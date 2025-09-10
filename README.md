# 👤 User API Documentation

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  ![Joi](https://img.shields.io/badge/Joi-FF8800?style=for-the-badge&logo=joi&logoColor=white)  ![bcrypt](https://img.shields.io/badge/Bcrypt-3388FF?style=for-the-badge&logo=lock&logoColor=white)  ![REST API](https://img.shields.io/badge/REST-02569B?style=for-the-badge&logo=swagger&logoColor=white)

## Courses Controller

### Routes:

1. **GET /findAll**
   - **Description**: Retrieve all courses.
   - **Request Body**: None
   - **Response**:
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

2. **POST /findOne**
   - **Description**: Retrieve a course by name.
   - **Request Body**:
     ```json
     {
       "name": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "course": {
         "id": "string",
         "name": "string",
         "content": "string"
       }
     }
     ```

3. **POST /insertOne**
   - **Description**: Insert a new course.
   - **Request Body**:
     ```json
     {
       "name": "string",
       "content": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "id": "string",
       "name": "string",
       "content": "string"
     }
     ```

4. **PUT /updateOne**
   - **Description**: Update an existing course.
   - **Request Body**:
     ```json
     {
       "name": "string",
       "newName": "string",
       "newContent": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Course successfully updated"
     }
     ```

5. **DELETE /deleteOne**
   - **Description**: Delete a course.
   - **Request Body**:
     ```json
     {
       "name": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Successfully deleted the course string"
     }
     ```

## Users Controller

### Routes:

1. **GET /getAll**
   - **Description**: Retrieve all users.
   - **Request Body**: None
   - **Response**:
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

2. **POST /getById**
   - **Description**: Retrieve a user by ID.
   - **Request Body**:
     ```json
     {
       "id": "number"
     }
     ```
   - **Response**:
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

3. **POST /insert**
   - **Description**: Insert a new user.
   - **Request Body**:
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "id": "number",
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```

4. **PUT /update**
   - **Description**: Update an existing user.
   - **Request Body**:
     ```json
     {
       "id": "number",
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "User successfully updated"
     }
     ```

5. **DELETE /delete**
   - **Description**: Delete a user.
   - **Request Body**:
     ```json
     {
       "id": "number"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "The user number is successfully deleted"
     }
     ```

## JWT and Joi Documentation

### JWT

- **sessionValidation**: Middleware to validate the session token.
  - **Parameters**:
    - `req`: The request object.
    - `res`: The response object.
    - `next`: The next middleware function.
  - **Returns**: None

### Joi

- **userSchema**: Schema for validating user data.
  - **Properties**:
    - `id`: Number, integer, minimum value of 1, required, strict.
    - `name`: String, pattern to match any character except `<` and `>`, optional.
    - `email`: String, email format, required, pattern to match any character except `<` and `>`, optional.
    - `password`: String, pattern to match any character except `<` and `>`, optional.

- **courseSchema**: Schema for validating course data.
  - **Properties**:
    - `id`: Number, integer, minimum value of 1, required, strict.
    - `name`: String, pattern to match any character except `<` and `>`, optional.
    - `newName`: String, pattern to match any character except `<` and `>`, optional.
    - `content`: String, pattern to match any character except `<` and `>`, optional.
    - `newContent`: String, pattern to match any character except `<` and `>`, optional.

### Error Handling

- **errorHandling**: Middleware to handle errors.
  - **Parameters**:
    - `err`: The error object.
    - `req`: The request object.
    - `res`: The response object.
    - `next`: The next middleware function.
  - **Returns**: None