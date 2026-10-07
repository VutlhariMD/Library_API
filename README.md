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

* Create a new book |POST | http://localhost:9000/books
* List all books   |GET  | http://localhost:9000/books
* Get book by id      |GET  | http://localhost:9000/books/:id 
* Update book       |PUT  | http://localhost:9000/books/:id
* Delete book      |DELETE | http://localhost:9000/books/:id

--
## How to run the project
Open the project folder

In VS Code, open your library-api project.

Then open the terminal:

Ctrl + `

or go to Terminal → New Terminal.

2. Install dependencies

If you haven't installed the packages yet:

npm install

This installs the dependencies from your package.json.

3. Start the server

If your package.json has a dev script such as:

"scripts": {
  "dev": "tsx src/server.ts"
}

run:

npm run dev

You should see something similar to:

Server is running on port 5000
4. Test the API

Open your browser and go to:

http://localhost:5000/authors

Or use Postman to test the different endpoints.

For example:

GET http://localhost:5000/authors

and:

GET http://localhost:5000/books
If you haven't created the project yet

You can set it up with:
































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

