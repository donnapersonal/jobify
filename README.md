#### Complete App

[Jobify](https://jobify-ftoi.onrender.com)

#### Create React APP

这里使用 [VITE](https://vitejs.dev/guide/) 来创建和初始化 APP

#### 本地运行

打开终端，在根目录下运行如下命令

```
npm run dev
```

#### Documents 

- [Styled Components Docs](https://styled-components.com/)
- [Cool Images](https://undraw.co/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Express Docs](https://expressjs.com/)
  - Express is a fast and minimalist web application framework for Node.js.
  - It simplifies the process of building web applications by providing a robust set of features for handling HTTP requests, routing, middleware, and more.
  - Express allows you to create server-side applications and APIs easily, with a focus on simplicity and flexibility.
- [Nodemon Docs](https://nodemon.io/)
  - Nodemon is a development tool that improves the developer experience.
  - It monitors your Node.js application for any changes in the code and automatically restarts the server whenever a change is detected.
  - This eliminates the need to manually restart the server after every code modification, making the development process more efficient and productive.
  - Nodemon is commonly used during development to save time and avoid the hassle of manual server restarts.
- [Thunder Client](https://www.thunderclient.com/)
  - Thunder Client is a popular Visual Studio Code extension that facilitates API testing and debugging.
  - It provides a user-friendly interface for making HTTP requests and viewing the responses, allowing developers to easily test APIs, examine headers, and inspect JSON/XML payloads.
  - Thunder Client offers features such as environment variables, request history, and the ability to save and organize requests for efficient development workflows.
- [Morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [Dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [Nanoid](https://www.npmjs.com/package/nanoid)
  - The nanoid package is a software library used for generating unique and compact identifiers in web applications or databases.
  - It creates short and URL-safe IDs by combining random characters from a set of 64 characters. Nanoid is a popular choice due to its simplicity, efficiency, and collision-resistant nature.
- [MongoDb](https://www.mongodb.com/)
  - MongoDB is a popular NoSQL database that provides a flexible and scalable approach to storing and retrieving data.
  - It uses a document-oriented model, where data is organized into collections of JSON-like documents.
  - MongoDB offers high performance, horizontal scalability, and easy integration with modern development frameworks, making it suitable for handling diverse data types and handling large-scale applications.
  - MongoDB Atlas is a fully managed cloud database service provided by MongoDB, offering automated deployment, scaling, and monitoring of MongoDB clusters, allowing developers to focus on building their applications without worrying about infrastructure management.
- [Mongoose](https://mongoosejs.com/)
  - Mongoose is an Object Data Modeling (ODM) library for Node.js that provides a straightforward and elegant way to interact with MongoDB.
  - It allows developers to define schemas and models for their data, providing structure and validation.
  - Mongoose also offers features like data querying, middleware, and support for data relationships, making it a powerful tool for building MongoDB-based applications.
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
  - The "express-async-errors" package is an Express.js middleware that helps handle errors that occur within asynchronous functions.
  - It catches unhandled errors inside async/await functions and forwards them to Express.js's error-handling middleware, preventing the Node.js process from crashing.
  - It simplifies error handling in Express.js applications by allowing you to write asynchronous code without worrying about manually catching and forwarding errors.
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
  - A library for HTTP status codes is useful because it provides a comprehensive and standardized set of codes representing the outcomes of HTTP requests.
  - It allows developers to easily understand and handle different scenarios during web development, such as successful responses, client or server errors, redirects, and more.
  - Using a status code library, developers can ensure consistent and reliable communication between servers and clients, leading to better error handling and improved user experience.
  ```
  200 OK OK
  201 CREATED Created

  400 BAD_REQUEST Bad Request
  401 UNAUTHORIZED Unauthorized

  403 FORBIDDEN Forbidden
  404 NOT_FOUND Not Found

  500 INTERNAL_SERVER_ERROR Internal Server Error
  ```
- [Express Validator](https://express-validator.github.io/docs/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
  ```
  // hash the password
  // The genSalt() function in bcrypt generates a random salt value using a specified "cost" value.
  //  The cost value determines how much CPU time is needed to calculate the hash, and higher cost values result in stronger hashes that are more resistant to attacks.
  const salt = await bcrypt.genSalt(10);
  // The hash() function in bcrypt takes two arguments: the password to be hashed, and the salt value to use for the hash.
  // It then calculates the hash value using a one-way hash function and the specified salt value.
  const hashedPassword = await bcrypt.hash(password, salt);
  ```
  - Overall, while bcrypt and bcryptjs are both good choices for hashing passwords in Node.js applications, bcryptjs is considered to be a better choice for its cross-platform compatibility, improved security, ease of use, and ongoing maintenance.
- [Useful Resource](https://jwt.io/introduction)
  - A JSON Web Token (JWT) is a compact and secure way of transmitting data between parties.
  - It is often used to authenticate and authorize users in web applications and APIs.
  - JWTs contain information about the user and additional metadata and can be used to securely transmit this information
- [JWT](https://jwt.io/)
- [Cookie Parser](https://www.npmjs.com/package/cookie-parser)
- [Axios Docs](https://axios-http.com/docs/intro)
  - Axios is a popular JavaScript library that simplifies the process of making HTTP requests from web browsers or Node.js.
  - It provides a simple and elegant API for performing asynchronous HTTP requests, supporting features such as making GET, POST, PUT, and DELETE requests, handling request and response headers, handling request cancellation, and more.
- [FormData API - JS Nuggets](https://youtu.be/5-x4OUM-SP8)
- [FormData API - React ](https://youtu.be/WrX5RndZIzw)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [Dayjs Docs](https://day.js.org/docs/en/installation/installation)
- [pexels](https://www.pexels.com/search/person/)
  - get two images from pexels
- [Cloudinary](https://cloudinary.com/)
  - Cloudinary is a cloud-based media management platform that helps businesses store, optimize, and deliver images and videos across the web.
  - It provides developers with an easy way to upload, manipulate, and serve media assets, enabling faster and more efficient delivery of visual content on websites and applications.
  - Cloudinary also offers features like automatic resizing, format conversion, and responsive delivery to ensure optimal user experiences across different devices and network conditions.
- [MongoDB Docs](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/)
  - The MongoDB aggregation pipeline is like a factory line for data.
  - Data enters, it goes through different stages like cleaning, sorting, or grouping, and comes out at the end changed in some way. It's a way to process data inside MongoDB.
- [recharts](https://recharts.org/en-US/)
- [JS Nuggets - Debounce](https://youtu.be/tYx6pXdvt1s)
  - In JavaScript, debounce is a way to limit how often a function gets called.
  - It helps prevent rapid or repeated function executions by introducing a delay.
  - This is useful for tasks like handling user input, where you want to wait for a pause before triggering an action to avoid unnecessary processing.
- [Render](https://render.com/)
- [React Query Docs](https://tanstack.com/query/v4/docs/react/overview)
  - React Query is a powerful library that simplifies data fetching, caching, and synchronization in React applications.
  - It provides a declarative and intuitive way to manage remote data by abstracting away the complex logic of fetching and caching data from APIs.
  - React Query offers features like automatic background data refetching, optimistic updates, pagination support, and more, making it easier to build performant and responsive applications that rely on fetching and manipulating data.
- Package: helmet
  - Description: helmet is a security package for Express.js applications that helps protect them by setting various HTTP headers to enhance security, prevent common web vulnerabilities, and improve overall application security posture.
  - Need: The package is needed to safeguard web applications from potential security threats, such as cross-site scripting (XSS) attacks, clickjacking, and other security exploits.
- Package: express-mongo-sanitize
  - Description: express-mongo-sanitize is a middleware for Express.js that sanitizes user-supplied data coming from request parameters, body, and query strings to prevent potential NoSQL injection attacks on MongoDB databases.
  - Need: The package addresses the need to protect MongoDB databases from malicious attempts to manipulate data and helps ensure the integrity of data storage and retrieval.
- Package: express-rate-limit
  - Description: express-rate-limit is an Express.js middleware that helps control and limit the rate of incoming requests from a specific IP address or a set of IP addresses to protect the server from abuse, brute-force attacks, and potential denial-of-service (DoS) attacks.
  - Need: This package is necessary to manage and regulate the number of requests made to the server within a given time frame, preventing excessive usage and improving the overall stability and performance of the application.
