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

## Technologies Used

* **Node.js**
* **TypeScript**
* **Express.js**
* **express-validator**
* **Postman** for API testing
* In-memory arrays for data storage
