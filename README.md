# Library REST API
A RESTful API for managing a local community library system. The API allows librarians to manage **authors and books**, perform CRUD operations

## Project Overview
The Library REST API provides a simple backend system for managing:

* Authors
* Books
The system uses an **in-memory array** to store data, meaning no database is required


### Main Features
* Add new authors and books
* View all authors and books
* Find an author or book by ID
* Update author and book information
* Delete authors and books
* View all books written by a specific author
* Search and filter books
* * Prevent invalid data from being added
* Prevent duplicate books
* Receive appropriate HTTP status codes and error messages
  
## Endpoints
* Create a new Author |POST | http://localhost:9000/v1/authors
* List all Authors    |GET  | http://localhost:9000/v1/authors
* Get user by id      |GET  | http://localhost:9000/v1/authors/:id 
* Update author       |PUT  | http://localhost:9000/v1/authors/:id
* Delete author       |DELETE | http://localhost:9000/v1/authors/:id



































## Technologies Used

* **Node.js**
* **TypeScript**
* **Express.js**
* **express-validator**
* **Postman** for API testing
* In-memory arrays for data storage



---

# Conclusion

The Library REST API provides a simple backend system for managing authors and books. It demonstrates important REST API concepts including **CRUD operations, routing, middleware, validation, relationships, HTTP status codes, error handling, query parameters, and API testing**.

The project is designed to provide a foundation that can later be extended with a database, authentication, authorization, and additional library functionality.

