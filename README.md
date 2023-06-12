# node-practice1
# Node.js App with Express and MySQL2 - Guidelines

This document provides guidelines to help you achieve the following objectives in setting up a Node.js application with Express and MySQL2:

1. Setting up a backend only app from scratch.
2. Setting up 5 server routes.
3. Serving static assets from the public folder.
4. Implementing error handling on the 5 server routes.

## Objective 1: Setting up a Node.js app from scratch

1. Create a new directory for your project and navigate to it in your terminal. Name it (node-practice)
2. Initialize a new Node.js project using the `npm init -y` command.
3. Install the required dependencies: `express` and `mysql2`.
4. Create a new database on MySQL workbench, create a default schema and run the queries in `sqlQuery.template`. Ensure that all the data in users table is there.
5. Create a new file named `server.js`.
6. Require the necessary modules (`express` and `mysql2`) in `server.js`.
7. Set up the server using the `express()` function and specify a port for it to listen on.

## Objective 2: Setting up 5 server routes

1. Open `server.js`.
2. Define five route handlers using the `app.get()`, `app.post()`, `app.put()`, and `app.delete()` methods provided by Express.
3. Implement the necessary logic within each route handler to interact with the MySQL database to achieve the following:
 - GET with params: given the endpoint: '/users/:id', retrieve user data from the database and send to client
 - GET with query: given the endpoint: '/users/?name={Michael Johnson}&age={41}', retrieve user data from the database and send to client
 - POST with body: endpoint: '/users', create a new user based on the following properties passed in through req.body. `{name: Billy Bob, age: 28, followers: 1000, verified: false, country: Germany}`
 - PUT with params: endpoint: '/users/:id', id = 6 update user based on id from params.
 - DELETE with params: endpoint: '/users/:id', id = 10 delete user based on id from params.
4. Send appropriate responses using `res.send()`. 

## Objective 3: Serving static assets

1. Create a folder named `public` in the root of your project directory.
2. Place the provided index.html and style.css files inside `public` folder
3. In `server.js` use the `express.static()` middleware to serve static assets from the `public` folder.

## Objective 4: Error handling

1. Implement error handling middleware functions to handle errors that may occur within the route handlers.
 - You can take any approach you like: try-catch blocks, conditional rendering or using the 4 parameter approach noted below:
 - Note: Error handling middleware functions can have four parameters `(err, req, res, next)`, not just `(req, res)`.
3. Check for errors within each middleware function and handle them appropriately. For example, you can send error responses using `res.status()` and `res.send()`.
4. BONUS: Use the `app.use()` method to define a GLOBAL ERROR HANDLER middleware functions AFTER defining the routes.

---

Note: These guidelines provide a high-level overview of the steps required to achieve each objective. It's important to refer to the official documentation and additional resources to gain a deeper understanding of each topic and to write the actual code required for your application.

By following these guidelines, you'll be able to set up a Node.js app with Express and MySQL2, define server routes, serve static assets, and implement error handling within your application.
